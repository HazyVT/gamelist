import { Box } from "@chakra-ui/react";
import { NavLink as Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box>
        <Link to='/auth'>Log</Link>
      </Box>
    </>
  )
}