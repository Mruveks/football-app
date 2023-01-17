import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, TextField, Typography } from '@mui/material';


const Navbar = () => {

  const [search, setSearch] = useState('');

  return (
    <Stack mr="60px" ml="60px" mt="0px">          
      <Stack direction="row" gap="40px" fontSize="24px" justifyContent="center" alignItems="center">
        <Link to="/" style={{ textDecoration: 'none', color: '#333'}}>Home</Link>
        <Link to="/leagues" style={{ textDecoration: 'none', color: '#333' }}>Leagues</Link>
        <Link to="/matches" style={{ textDecoration: 'none', color: '#333'}}>Matches</Link>
        <Link to="/stats" style={{ textDecoration: 'none', color: '#333'}}>Stats</Link>
        <Link to="/events" style={{ textDecoration: 'none', color: '#333'}}>Events</Link>
        <Link to="/transfers" style={{ textDecoration: 'none', color: '#333' }}>Transfers</Link>
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '200px', xs: '150px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Teams..."
          type="text"
        />
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '200px', xs: '150px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Leagues..."
          type="text"
        />
      </Stack>
    </Stack>
  )
}

export default Navbar
