import { Avatar, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, useColorMode, useDisclosure } from '@chakra-ui/react';
import { CiSun, CiDark } from "react-icons/ci";
import User from '../models/User';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';


export default function Navbar(props: { user: User; }) {

	const user = props.user;
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box display='flex' justifyContent='space-between' alignItems='center'>
			<Icon as={HamburgerIcon} w={5} h={5} onClick={onOpen} cursor={'pointer'}/>

			<Box display='flex' alignItems='center' w='10vw' justifyContent={'space-between'}>
				<Icon as={colorMode === 'light' ? CiDark : CiSun} w={6} h={6} cursor={'pointer'} onClick={toggleColorMode}/>
				<Link to='/account'>
					<Avatar w={6} h={6} name={user.getName()} src={user.getImage()} />
				</Link>
			</Box>
			<Drawer isOpen={isOpen} onClose={onClose} placement='left'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton marginTop={'1vh'}/>
					<Link to='/' onClick={onClose}><DrawerHeader>GameDB</DrawerHeader></Link>
					<DrawerBody display='flex' flexDir='column'>
						<Link to='/' onClick={onClose}>Home</Link>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	)
}
