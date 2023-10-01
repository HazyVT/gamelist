import { Box, Icon, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { NavLink as Link } from "react-router-dom";
import { BiSearchAlt2 } from 'react-icons/bi'
import { supabase } from "./supaClient";

// eslint-disable-next-line react/prop-types
export default function Navbar({session}) {

  let pfp = null;

  if (session != null) {
  // eslint-disable-next-line react/prop-types
    pfp = session.user.user_metadata.avatar_url;
  }

  const handle_search = (event) => {
    let key = event.key;
    if (key == "Enter") {
      console.log("Searching " + event.target.value);
      supabase.from('profiles').select().eq('full_name',event.target.value).then((res) => {
        if (res.data.length > 0) {
          console.log("User found");
          window.location.href='https://gamelist-snowy.vercel.app/user/' + event.target.value;
        } else {
          console.log("No user found");
        }
      });
    }
  }

  return (
    <>
      <Box className="navbar">
        <Link to='/'>Home</Link>
        <Link to={session ? '/account' : '/auth'}>{session ? <Image w={12} borderRadius={50} src={pfp}/> : 'User'}</Link>
        <Box>
          <InputGroup w={'fit-content'}>
            <InputLeftElement pointerEvents={'none'} borderRadius={'16px'} color='gray.300' children={<Icon as={BiSearchAlt2}/>} />
            <Input type='text' placeholder='username' borderRadius={'16px'} color='black' backgroundColor={'white'} w={'fit-content'} onKeyPress={handle_search} />
          </InputGroup>
        </Box>
      </Box>
    </>
  )
}