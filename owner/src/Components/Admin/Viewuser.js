import {React, useEffect, useState, useMemo} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


function Viewuser() {
    const [getdata,setdata]=useState([]);

    const columns = [
        
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone Number', headerName: 'Age', type: 'number', width: 90,},
        {field: 'password', headerName:'Password', width:90,},
      ];
      useEffect(() => {
        axios.get("http://localhost:5000/api/reg")
          .then(res => {
            setdata(res.data)
            console.log(res.data);
          })
      }, [])
      
    
      const row = useMemo(
        () => getdata.map((row, index) => ({ ...row, id: row._id })),
        [getdata]
      );
    

      
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />

       
    </div>
  )
}

export default Viewuser