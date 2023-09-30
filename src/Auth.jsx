import { useState, useEffect } from 'react';
import { supabase } from './supaClient';
import { Box, Heading, Button, Spinner } from '@chakra-ui/react';

export default function Auth() {

  const [ loading, setLoading] = useState(false)
  const [ userData, setUserData ] = useState();

  const signInWithDiscord = async () => {
    setLoading(true)
    const { data, error } = supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: 'http://localhost:5174/account'
      }
    })

    if (error) {
      console.log(error);
    }
    setUserData(data);
    console.log(data);
    setLoading(false)
  }

  return (
    <>
      {loading ? <Box><Spinner /></Box> : <Box><Heading>MyGameList</Heading><Button onClick={signInWithDiscord}>Sign in via discord</Button></Box>}
    </>
  )
}