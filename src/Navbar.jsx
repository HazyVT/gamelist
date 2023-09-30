import { Box, Icon, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { NavLink as Link } from "react-router-dom";
import { BiSearchAlt2 } from 'react-icons/bi'

// eslint-disable-next-line react/prop-types
export default function Navbar({session}) {

  let pfp = null;

  if (session != null) {
  // eslint-disable-next-line react/prop-types
    pfp = session.user.user_metadata.avatar_url;
  }

  const handle_search = (event) => {
    console.log(event)
  }

  return (
    <>
      <Box className="navbar">
        <Link to='/'>Home</Link>
        <Link to={session ? '/account' : '/auth'}>{session ? <Image w={12} borderRadius={50} src={pfp}/> : 'Login'}</Link>
        <InputGroup w={'fit-content'}>
          <InputLeftElement pointerEvents={'none'} borderRadius={'16px'} color='gray.300' children={<Icon as={BiSearchAlt2}/>} />
          <Input type='text' placeholder='username' borderRadius={'16px'} color='black' backgroundColor={'white'} w={'fit-content'} on={handle_search} />
        </InputGroup>
      </Box>
    </>
  )
}