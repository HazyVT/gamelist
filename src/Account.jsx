/* eslint-disable react/prop-types */
import { Box, Button, Heading, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AiFillPlusCircle } from 'react-icons/ai';
import { supabase } from "./supaClient";

export default function Account({session}) {

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [id, setId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gname = useRef();
  const score = useRef();
  const cancelRef = useRef();

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      const { user } = session
      console.log(user);

      setUsername(user.user_metadata.full_name);
      setAvatar(user.user_metadata.avatar_url)
      setId(user.id);

      setLoading(false);
    }

    getProfile()
  }, [session])

  //https://gamelist-snowy.vercel.app/

  async function addToDB() {
    await supabase
    .from('game_list')
    .insert({user_id: id, game_name: gname.current.value, score: score.current.value});
    onClose();
  }

  
  
  return (
    <>
      {loading ? 
        <Box>
          <Spinner />
        </Box> 
        : 
        <Box display='flex' flexDir='row' justifyContent={'space-around'} marginTop={24}>
          <Box display='flex' w={48} h={'fit-content'} justifyContent={'center'} alignItems={'center'}>
            <Heading fontWeight={200} size='md' marginRight={4}>Add To List</Heading>
            <Button onClick={onOpen}><Icon as={AiFillPlusCircle} /></Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Game</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input ref={gname} type='text' placeholder='Game Name' margin={2}/>
                  <Input ref={score} type='number' placeholder='score' margin={2} />
                  <Button colorScheme="teal" margin={2} onClick={addToDB}>Add</Button>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Box>}
    </>
  )
}