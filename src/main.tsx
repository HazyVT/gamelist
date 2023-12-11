import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Game from './models/Game';
import User from './models/User';
import Account from './pages/Account';

const game1 = new Game("Dark Souls 3", "/test.jpg", 92);
const game2 = new Game("Fallout 76", "/test.jpg", 81);
const user = new User(
    "John Keele", 
    225,
    24, 
    [game1, game2],
    "/test.jpg", 
    "I am a avid enjoyer of open world games that allow for large freedom and creativity in playstyle."
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider>
  <Box w='100vw' height='100vh' padding={8} style={{WebkitTapHighlightColor: 'transparent', userSelect: 'none'}}>
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account  user={user} />} />
      </Routes>
    </Router>
  </Box>
  </ChakraProvider>
)
