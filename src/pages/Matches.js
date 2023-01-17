import React from 'react'

import { fetchData, footballOptions } from '../utils/fetchData';
import dataTable from '../utils/dataTable';
import { useEffect, useState } from 'react';

const Matches = () => {

  let match;
  let fixture;
  let matchDate;

  const [fixturess, setFixtures] = useState([]);

  useEffect(() => {
    const SearchLeagues = async () => {
    const currentDate = new Date().toISOString().substr(0, 10).replace('T', ' ');

    const data = await fetchData(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${currentDate}`, footballOptions);

      setFixtures(['all', ...data])
    const fixtures = data.response;
    match = fixtures[1];
    fixture = match.fixture;
    matchDate = JSON.stringify(fixture.date).substring(12, 17);
    console.log(fixturess);
    }
  SearchLeagues();
  }, [])

  return (
    <dataTable/>
  )
}

export default Matches;
