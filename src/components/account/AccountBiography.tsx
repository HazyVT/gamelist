import { Box, Text, Modal, ModalOverlay, useDisclosure, ModalContent, ModalCloseButton, ModalHeader, ModalBody, Textarea, ModalFooter, Button, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import User from "../../models/User";

export default function AccountBiography(props: { user: User; }) {

  const user = props.user;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const bioInputRef = useRef<HTMLTextAreaElement>(null);
  const [ bio, setBio ] = useState<string>(user.getBiography());

  const handleBioChange = () => {
    if (bioInputRef.current != undefined) {
      user.setBiography(bioInputRef.current.value);
    }
    onClose();
    setBio(user.getBiography());
  };

  return (
    <Box marginTop={8} w='fit-content' pos='relative'>
      <Heading size='sm'>Bio</Heading>
      <Text w='30vw' fontSize={12} fontWeight={500} cursor={'pointer'} onClick={onOpen}>{bio}</Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Edit Bio</ModalHeader>
          <ModalBody>
            <Textarea ref={bioInputRef} defaultValue={user.getBiography()} h='fit-content' resize={"none"} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' marginRight={2} onClick={onClose}>Cancel</Button>
            <Button colorScheme='teal' onClick={handleBioChange}>Change</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}