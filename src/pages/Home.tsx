import { Avatar, Box, Spinner, Icon, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegBell, FaGear } from "react-icons/fa6";

import { User } from '../models/User';

export default function Home() {

    const [ loading, setLoading ] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    const getUser = async () => {
        // Get the user from the database
        setUser(new User('1', 'HazyRain', 'https://d.furaffinity.net/art/aliceofmalice/1664343595/1664343595.aliceofmalice_moistnapkin_chibi_icon.jpg'))
        setLoading(false);
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <Box>
            <Box h='90vh' display={loading ? 'flex' : 'none'} alignItems='center' justifyContent='center'>
                <Spinner thickness="4px" color='red.300' emptyColor='gray.200' w={24} h={24} />
            </Box>
            <Box display={!loading ? 'block' : 'none'}>
                {user != null ? 
                    <InAppView user={user} />
                :
                    <Box></Box>
                }
            </Box>
        </Box>
    )
}

function InAppView(props: {user: User}) {
    return (
        <Box>
            <Box w='100vw' h='100vh' zIndex={1} bgColor='#0d0e12' color='#e7e8ed' padding={12} display='flex' justifyContent='center'>
                <Navigation user={props.user} />
            </Box>
        </Box>
    )
}

function Navigation(props: {user: User}) {
    return (
        <Box w='90vw' h='6vh' bgColor='#604557' borderRadius='40px' display='flex' alignItems='center' justifyContent='space-between' padding={4}>
            <InputGroup w='30%' h='140%'>
                <InputLeftElement>
                    <Icon as={IoSearch} />
                </InputLeftElement>
                <Input variant='unstyled' placeholder="search" bgColor='#a17d82' color='white' _placeholder={{color: "gray.300"}} borderRadius={'20px'} border='none' focusBorderColor="none"/>
            </InputGroup>
            <Box display='flex' alignItems='center' w='18vw' justifyContent='space-between'>
                <Icon as={FaGear} />
                <Icon as={FaRegBell} />
                <Box display='flex' w='11vw' justifyContent='space-between' alignItems='center'>
                    <Avatar size='sm' src={`https://api.dicebear.com/7.x/thumbs/svg/seed=${props.user.username}`}/>
                    <Text>{props.user.username}</Text>
                </Box>
            </Box>
        </Box>
    )
}