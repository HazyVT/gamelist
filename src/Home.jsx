import { Box, Heading, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Box display='flex' flexDir='column' alignItems={'center'} margin={28}>
        <Heading>Welcome to GameDB</Heading>
        <Text>Easily track your games</Text>
        <br />
        <Text>To add a game to your list, <Link to={'/auth'}>Login</Link></Text>
      </Box>
    </>
  )
}