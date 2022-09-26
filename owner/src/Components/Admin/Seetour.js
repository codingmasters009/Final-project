import {React, useEffect, useState, useMemo} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
function Seetour() {
    const [getdata,setdata]=useState([]);

    const columns = [

        { headerName: "ID", field: "id" },
        { field: 'title', headerName: 'title', width: 130 },
        { field: 'day', headerName: 'Day', width: 50 },
        { field: 'agerange', headerName: 'Age', type: 'number', width: 90,},
        {field: 'cost', headerName:'Cost', width:90,},
        {field: 'operator', headerName:'Operator', width:180,},
        {field: 'description', headerName:'Discription', width:500,},
      ];
      useEffect(() => {
        axios.get("http://localhost:5000/api/admin")
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

export default Seetour