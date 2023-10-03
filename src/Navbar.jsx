import { Box, Icon, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { NavLink as Link } from "react-router-dom";
import { BiSearchAlt2, BiExit } from 'react-icons/bi'
import { supabase } from "./supaClient";
import { useState } from 'react'
import Home from "./Home";

// eslint-disable-next-line react/prop-types
export default function Navbar({session}) {

  const [ loading, setLoading ] = useState(false);

  let pfp = null;

  if (session != null) {
  // eslint-disable-next-line react/prop-types
    pfp = session.user.user_metadata.avatar_url;
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    window.location.href='https://gdb.mosalim.site/'
  }

  

  const handle_search = (event) => {
    let key = event.key;
    if (key == "Enter") {
      console.log("Searching " + event.target.value);
      supabase.from('profiles').select().eq('full_name',event.target.value).then((res) => {
        if (res.data.length > 0) {
          console.log("User found");
          window.location.href='https://gdb.mosalim.site/user/' + event.target.value;
        } else {
          console.log("No user found");
        }
      });
    }
  }

  async function signInWithDiscord() {
    const { data, error } = supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: 'https://gdb.mosalim.site/account'
      }
    })  
  }


  return (
    <Box className='navbar'>
      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} paddingTop={2}>
        <Link to={'/'} className='home'>{'Home'}</Link>
        <Link className={'pfp'} to={session ? '/account' : ''} onClick={session ? () => {console.log("authed")} : () => {signInWithDiscord()}}>{session ? <Image w={12} borderRadius={50} src={pfp}/> : 'Login'}</Link>
        <Box className="signout" display={session ? 'flex' : 'none'} alignItems={'center'}>
          <Icon as={BiExit} marginRight={2}/><Link onClick={signOut}>Sign Out</Link>
        </Box>
      </Box>
      <Box display='flex' justifyContent={'center'} marginTop={8}>
        <InputGroup w={'fit-content'}>
          <InputLeftElement pointerEvents={'none'} borderRadius={'16px'} color='gray.300' children={<Icon as={BiSearchAlt2}/>} />
          <Input type='text' placeholder='username' borderRadius={'16px'} color='black' backgroundColor={'white'} onKeyPress={handle_search} />
        </InputGroup>  
      </Box>
    </Box>
  )
}