import { Box, Heading, Text } from "@chakra-ui/layout";

export default function Home() {
  return (
    <>
      <Box display='flex' flexDir='column' alignItems={'center'} margin={28}>
        <Heading>Welcome to GameDB</Heading>
        <Text>Easily track your games</Text>
      </Box>
    </>
  )
}