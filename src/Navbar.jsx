import { Box } from "@chakra-ui/react";
import { NavLink as Link } from "react-router-dom";

export default function Navbar({session}) {



  return (
    <>
      <Box>
        <Link to='/'>Home</Link>
        <Link to={session ? '/account' : '/auth'}>{session ? 'Profile' : 'Login'}</Link>
      </Box>
    </>
  )
}