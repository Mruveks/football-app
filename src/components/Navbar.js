import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, TextField, Typography, Button } from '@mui/material';

import {fetchData, footballOptions} from '../utils/fetchData';


const Navbar = () => {

  const [searchTeam, setSearchTeam] = useState('');
  const [searchLeague, setSearchLeague] = useState('');


  let leagues;

  const handleSearchLeagues = async () => {
    if (searchLeague) {
      const leagueData = await fetchData(`https://api-football-v1.p.rapidapi.com/v3/leagues?name=${searchLeague}`, footballOptions);

      const preJson = leagueData.response;
      const data = preJson[0];
      
      console.log(data)

      const country = data.country;
      leagues = data.league;
      const seasons = data.seasons;

      setSearchLeague('');
    }
  };

  return (
    <Stack mt="0px" pb="10px" borderBottom="1px solid black">          
      <Stack direction="row" gap="40px" fontSize="24px" justifyContent="center" alignItems="center">
        <Link to="/" style={{ textDecoration: 'none', color: '#333'}}>Home</Link>
        <Link to="/leagues" style={{ textDecoration: 'none', color: '#333' }}>Leagues</Link>
        <Link to="/matches" style={{ textDecoration: 'none', color: '#333'}}>Matches</Link>
        <Link to="/stats" style={{ textDecoration: 'none', color: '#333'}}>Stats</Link>
        <Link to="/events" style={{ textDecoration: 'none', color: '#333'}}>Events</Link>
        <Link to="/transfers" style={{ textDecoration: 'none', color: '#333' }}>Transfers</Link>

        <Stack direction="row" gap="10px">
          <TextField
            height="46px"
            sx={{ input: { fontWeight: '700', border: 'none', height:"14px", borderRadius: '4px' }, width: { lg: '200px', xs: '150px' }, backgroundColor: '#fff', borderRadius: '40px' }}
            value={searchTeam}
            onChange={(e) => setSearchTeam(e.target.value.toLowerCase())}
            placeholder="Search Teams..."
            type="text"
          />
          <Button className="search-btn" sx={{ bgcolor: '#333', color: '#fff', fontWeight: '700', textTransform: 'none', width: { lg: '100px', xs: '40px' }, height: '46px' }} onClick={handleSearchLeagues}>
          Search 
          </Button>
        </Stack>

        <Stack direction="row" gap="10px">
          <TextField
          height="46px"
          sx={{ input: { fontWeight: '700', height:"14px", border: 'none', borderRadius: '4px' }, width: { lg: '200px', xs: '150px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={searchLeague}
          onChange={(e) => setSearchLeague(e.target.value.toLowerCase())}
          placeholder="Search Leagues..."
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#333', color: '#fff', fontWeight: '700', textTransform: 'none', width: { lg: '100px', xs: '40px' }, height: '46px' }} onClick={handleSearchLeagues}>
          Search
        </Button>
        </Stack>
        
      </Stack>
    </Stack>
  )
}

export default Navbar
