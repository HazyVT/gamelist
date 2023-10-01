import { useParams } from "react-router-dom"
import { supabase } from "./supaClient";
import { useState } from 'react'
import { Box, Heading, Image } from "@chakra-ui/react";

export default function UserPage() {
  let params = useParams()
  console.log("User Page: " + params.username);

  const [ username, setUsername ] = useState(null);
  const [ avatar, setAvatar ] = useState(null);

  supabase
  .from('profiles')
  .select().eq('full_name', params.username)
  .then((res) => {
    setUsername(res.data[0].full_name);
    setAvatar(res.data[0].avatar_url);
  });

  

  return (
    <>
      <Box display='flex' justifyContent={'center'} flexDir={'column'} alignItems={'center'}>
        <Heading padding={2}>{username}</Heading>
        <Image src={avatar} w={24}/>
      </Box>
    </>
  )
}