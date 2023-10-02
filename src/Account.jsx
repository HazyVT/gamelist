/* eslint-disable react/prop-types */
import { Box, Button, Heading, Icon, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AiFillPlusCircle } from 'react-icons/ai';
import { supabase } from "./supaClient";

export default function Account({session}) {

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      const { user } = session
      console.log(user);

      setUsername(user.user_metadata.full_name);
      setAvatar(user.user_metadata.avatar_url)

      setLoading(false);
    }

    getProfile()
  }, [session])

  //https://gamelist-snowy.vercel.app/

  
  
  return (
    <>
      {loading ? 
        <Box>
          <Spinner />
        </Box> 
        : 
        <Box display='flex' flexDir='row' justifyContent={'space-around'} margin={8}>
          <Box>
            <p>{username}</p>
            <Image src={avatar} w={16}/>
          </Box>
          <Box>
            <Heading>List</Heading>
            <Button onClick={onOpen}><Icon as={AiFillPlusCircle} /></Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Game</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input placeholder='Game Name'/>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Box>}
    </>
  )
}