import { Avatar, Box, Heading, Icon, Input, Text } from "@chakra-ui/react";
import User from "../../models/User";
import { useRef, useState } from "react";
import { CiCamera } from "react-icons/ci";

export default function AccountBasicInfo(props: { user: User; }) {

  const [ showAvatarEdit, setShowAvatarEdit ] = useState(false);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const user = props.user;

  return (
    <Box display='flex' justifyContent='space-between'>
      <Box display='flex' alignItems='center' pos='relative'>
        <Box display={showAvatarEdit === true ? 'flex' : 'none'} justifyContent='center' alignItems='center' w='30%' h='100%' bgColor='black' pos='absolute' borderRadius='50%'>
          <Icon as={CiCamera} w={8} h={8}/>
        </Box>
        <Avatar opacity={showAvatarEdit === false ? '100%' : '20%'} name={user.getName()} src={user.getImage()} marginRight={2} pos='relative' onMouseEnter={() => {setShowAvatarEdit(true)}} onMouseLeave={() => {setShowAvatarEdit(false)}} cursor={"pointer"} onClick={() => {avatarInputRef.current?.click()}}/>
        <Box>
          <Heading size='md'>{user.getName()}</Heading>
          <Text>Ranking</Text>
        </Box>
      </Box>
      <Box marginTop={2}>
      <Text fontSize={12}>Hours Played: {user.getHours()} Hours</Text>
      <Text fontSize={12}>Games Completed: {user.getGames()}</Text>
      </Box>
      <Input ref={avatarInputRef} type="file" display='none'/>
    </Box>
  )

}