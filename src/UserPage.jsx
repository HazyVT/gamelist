import { useParams } from "react-router-dom"
import { supabase } from "./supaClient";
import { useEffect, useState, useRef } from 'react'
import { Box, Heading, Image, Spinner, Table, TableCaption, TableContainer, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

export default function UserPage() {
  let params = useParams()
  console.log("User Page: " + params.username);

  const [ username, setUsername ] = useState(null);
  const [ avatar, setAvatar ] = useState(null);
  const [ created, setCreated ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ id, setId ] = useState('');
  const [ gameList, setGameList ] = useState([]);
  const [ tableLoad, setTaleLoad ] = useState(true);
  const [ write, setWrite ] = useState(0);
  const tableRef = useRef();
  let glist = [];
  let joined = new Date;

  async function getProfile() {
    if (write <= 1) {
      console.log(write);
    // Get the user
    supabase
    .from('profiles')
    .select().eq('full_name', params.username)
    .then((res) => {
      setUsername(res.data[0].full_name);
      setAvatar(res.data[0].avatar_url);
      setId(res.data[0].id);
      let year = res.data[0].created_at.slice(0,4);
      let month = res.data[0].created_at.slice(5,7);
      let date = res.data[0].created_at.slice(8,10);
      joined.setDate(date);
      joined.setMonth(month);
      joined.setFullYear(year);
      setCreated(joined.toDateString().slice(4,));
    });

    const { data, error} = await supabase
      .from('profiles')
      .select().eq('full_name', params.username)
    console.log(data);

    // Get the users game list
    supabase
    .from('game_list')
    .select().eq('user_id', id)
    .then((res) => {
      res.data.forEach((value, index) => {
        let gname = value.game_name;
        let score = value.score;
        setGameList(prevState => [...prevState,<Tr key={index}><Td>{gname}</Td><Td>{score}</Td></Tr>])
      })
    })
    console.log(gameList)
    setLoading(false);
    setWrite(write+1);
  }
}

  useEffect(() => {
    getProfile();
  }, [gameList, glist, id, params.username, joined])

    return (
    <>
      {loading ? 
      <Box display='flex' justifyContent={'center'} alignItems={'center'}>
        <Spinner />
      </Box>
      :
      <Box>
        <Box display='flex' flexDir='column' justifyContent={'center'} alignItems={'center'} marginTop={12}>
          <Image src={avatar} w={24} borderRadius={12}/>
          <Heading>{username}</Heading>
          <span>Joined: {created}</span>
          {tableLoad ? 
          <TableContainer>
            <Table variant={'simple'} marginTop={6}>
              <TableCaption color='#a3a3a3'>{username}'s game list</TableCaption>
              <Thead>
                <Tr>
                  <Th color='white'>Game Name</Th>
                  <Th color='white'>Score</Th>
                </Tr>
              </Thead>
              <Tbody>
                {gameList}
              </Tbody>
            </Table>
          </TableContainer>
          :
          <Box>
            <Spinner />
          </Box>
          }

        </Box>
      </Box>
      }
    </>
  )
}