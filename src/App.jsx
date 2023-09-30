import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { supabase } from './supaClient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './Auth';
import Account from './Account';
import Navbar from './Navbar';
import UserPage from './UserPage';

function App() {

  const [ session, setSession ] = useState(null);
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log(session)
      setUser(session.user)
    })
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/auth' element={session ? <Account session={session} /> : <Auth />} />
          <Route path='user/:username' element={<UserPage/>} />
        </Routes>
      </Router>
      <Box>
      </Box>
    </>
  )
}

export default App
