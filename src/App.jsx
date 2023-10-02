import { useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { supabase } from './supaClient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './Auth';
import Account from './Account';
import Navbar from './Navbar';
import UserPage from './UserPage';
import Home from './Home';

function App() {

  const [ session, setSession ] = useState(null);
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log(session)
      setUser(session.user)
    }).catch(() => {console.log('rejected')})
  }, [])

  return (
    <>
      <Box className='container'>
        <Router>
          <Navbar session={session}/> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/user/:username' element={<UserPage/>} />
            <Route path='/account' element={<Account session={session}/>} />
          </Routes>
        </Router>
        <Box>
        </Box>
      </Box>
      <Box>
      </Box>
    </>
  )
}

export default App
