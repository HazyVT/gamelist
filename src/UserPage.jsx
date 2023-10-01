import { useParams } from "react-router-dom"
import { supabase } from "./supaClient";
import { useState } from 'react'
import { Box, Heading, Image, Spinner } from "@chakra-ui/react";

export default function UserPage() {
  let params = useParams()
  console.log("User Page: " + params.username);

  const [ username, setUsername ] = useState(null);
  const [ avatar, setAvatar ] = useState(null);
  const [ created, setCreated ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  let joined = new Date;

  supabase
  .from('profiles')
  .select().eq('full_name', params.username)
  .then((res) => {
    setUsername(res.data[0].full_name);
    setAvatar(res.data[0].avatar_url);
    let year = res.data[0].created_at.slice(0,4);
    let month = res.data[0].created_at.slice(5,7);
    let date = res.data[0].created_at.slice(8,10);
    joined.setDate(date);
    joined.setMonth(month);
    joined.setFullYear(year);
    setCreated(joined.toDateString());
    setLoading(false)
  });

  

  return (
    <>
      {loading ? 
      <Box>
        <Spinner />
      </Box>
      :
      <Box display='flex'>
        <Box display='flex' justifyContent={'center'} flexDir={'column'} alignItems={'left'} marginLeft={12}>
          <Image src={avatar} w={24}/>
          <Heading>{username}</Heading>
          <span>Joined: {created}</span>
        </Box>
      </Box>
      }
    </>
  )
}