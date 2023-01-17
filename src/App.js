import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Leagues from './pages/Leagues';
import Stats from './pages/Stats';
import Transfers from './pages/Transfers';
import Events from './pages/Events';
import Matches from './pages/Matches';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/events" element={<Events />} />
        <Route path="/transfers" element={<Transfers />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
