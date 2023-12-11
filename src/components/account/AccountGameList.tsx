import { Box, Text, Modal, useDisclosure, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, Input, ModalFooter, Button, Table, Thead, Th, Tbody, Tr, Td, Image } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Game from "../../models/Game";
import User from "../../models/User";

export default function AccountGameList(props: { user: User; }) {

  const user = props.user;
  const [ gameList, setGameList] = useState(user.getGameList());
  
  function AddGameButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const gameNameInputRef = useRef<HTMLInputElement>(null);
    const gameScoreInputRef = useRef<HTMLInputElement>(null);

    const handleGameAdd = () => {
      if (gameNameInputRef.current != undefined && gameScoreInputRef.current != undefined) {
        const gname = gameNameInputRef.current.value;
        const gscore = gameScoreInputRef.current.value;
        const tempGame = new Game(gname, "", Number(gscore));
        user.addGame(tempGame);
        setGameList(user.getGameList());
        onClose();
      }
    }

    return (
      <Box>
        <Text pos='absolute' right='4' top='-8' fontSize={24} fontWeight={800} cursor="pointer" onClick={onOpen}>+</Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Add Game</ModalHeader>
            <ModalBody>
              <Input ref={gameNameInputRef} type='text' placeholder='Game Name' marginBottom={2}/>
              <Input ref={gameScoreInputRef} type='number' placeholder='Game Score' />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='red' onClick={onClose} marginRight={2}>Cancel</Button>
              <Button colorScheme='teal' onClick={handleGameAdd}>Add</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }

  return (
    <Box pos='relative'>
      <AddGameButton />
      <Table>
        <Thead>
          <Th>Image</Th>
          <Th>Name</Th>
          <Th>Score</Th>
        </Thead>
        <Tbody>
          {gameList.map((game: Game, index: number) => {
            return (
              <Tr key={index}>
                <Td><Image w='10vw' src={game.getImage()} borderRadius={'6px'}/></Td>
                <Td>{game.getName()}</Td>
                <Td>{game.getScore()}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
}