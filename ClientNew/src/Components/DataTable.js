import React,{useState,useEffect}  from "react";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import "./datatable.css"

const columns=[
    {field:'_id', headerName:'ID'},
    {field:'firstName',headerName:"FirstName", width:300},
    {field:'lastName',headerName:"LastName", width:600},
    {field:'email', headerName:"Email", width:700}
]



const DataTable=()=>{
 
    const [tableData, setTableData] = useState([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:3333/entry')
        .then((data)=>data.json())
        .then((data)=>setTableData(data.UserData))
    },[])

console.log(tableData);
 
return(
            <div  style={{height:600, width:'99%'}}> 
            <h1  className="heading">Data Table</h1>
            <Link to="/">
            <Button variant="contained" color="primary" >Add a user</Button>
            </Link>
            <DataGrid  getRowId={(r) => r._id} rows={tableData} columns={columns}  checkboxSelection/>

            
            </div>
    )
}

export default DataTable