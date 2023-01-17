import React from 'react'
import MUIDataTable from "mui-datatables";
import { Box } from '@mui/material';

const dataTable = ({ fixturess }) => {

  const columns = ["Time", "Match", "League", "Logo"];

  const data = [
    fixturess.map((item) => {
      <Box>
        {fixturess.id}
      </Box>
    
  })]
   
   const options = {
     download: 'false',
     filter: 'false',
     print: 'false',
   };

  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
      />
  )
}

export default dataTable
