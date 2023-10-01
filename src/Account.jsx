/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { supabase } from "./supaClient"
import { Button, Box, Spinner } from "@chakra-ui/react"

export default function Account({session}) {

  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      const { user } = session
      console.log(user);

      setUsername(user.user_metadata.full_name);
      setAvatar(user.user_metadata.avatar_url)

      setLoading(false);
    }

    getProfile()
  }, [session])


  async function signOut() {
    const { error } = await supabase.auth.signOut();
    window.location.href='https://gamelist-snowy.vercel.app/'
  }
  
  return (
    <>
      {loading ? 
        <Box>
          <Spinner />
        </Box> 
        : 
        <Box>
          <p>{username}</p>
          <img src={avatar} />
          <Button onClick={signOut}>Sign Out</Button>
        </Box>}
    </>
  )
}