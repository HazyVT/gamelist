import { Avatar, Box, Icon, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { CiLocationArrow1 } from 'react-icons/ci';
import User from '../models/User';

export default function Home() {

  const user1 = new User("Ryan Gosling", 48, 24, [], "/test.jpg", "Test Bio")
  const user2 = new User("Matt Daemon", 48, 24, [], "/test2.jpeg", "Test Bio")

  function InputBox() {
    return (
      <InputGroup pos='absolute' bottom='0'>
        <Input border='none' focusBorderColor='transparent' placeholder='...'/>
        <InputRightElement cursor={'pointer'}>
          <Icon as={CiLocationArrow1} />
        </InputRightElement>
      </InputGroup>
    )
  }

  function ChatMessage(props: { user: User; }) {
    const user = props.user;

    return (
      <Box display='flex' padding={4}>
        <Avatar size='sm' name={user.getName()} src={user.getImage()}/>
        <Box marginLeft={2}>
          <Heading size='sm'>{user.getName()}</Heading>
          <Text>This is a test message to test out formatting</Text>
        </Box>
      </Box>
    )
    

  }
  
  return (
    <>
      <Box display='flex' flexDir='column' alignItems='center' marginTop={8} borderRadius={'20px'}>
        <Box w='80vw' h='80vh' bgColor='blackAlpha.200' pos='relative'>
          <ChatMessage user={user1}/>
          <ChatMessage user={user2}/>
          <InputBox />
        </Box>
      </Box>	
    </>
  )
}
