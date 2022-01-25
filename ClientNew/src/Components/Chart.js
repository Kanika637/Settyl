import React, { useEffect, useState } from "react"
import axios from 'axios'
import {Line} from "react-chartjs-2"

const Chart=()=>{

    const[chartData,setChartData]=useState({});
    const[userId,setUserId]=useState({});
    const[userFirstName,setUserFirstName]=useState({});
    const[userLastName,setUserLastName]=useState({});
    const[userEmail,setUserEmail]=useState({});


const chart=()=>{
    let firstName=[];
    let _id=[];
    let lastName=[];
    let email=[];
    axios.get("http://127.0.0.1:3333/entry")
    .then(res=>{
        console.log(res);
        for(const dataObj of res.data.data){

            _id.push(parseInt(dataObj._id));
            firstName.push(dataObj.firstName);
            email.push(dataObj.email);
            lastName.push(dataObj.lastName);

        }

    })
    .catch(err=>{
        console.log(err)
    });

    console.log(_id, firstName, lastName, email);

    setChartData({
        labels:["monday","tuesday","wednesday","thursday","friday"],
        datasets:[
            {
            label:"level of thickness",
            data:[32,45,12,76,69],
            backgroundColor:["rgba(75,192,192,0.6"],
            borderWidth:4
            }
        ]
    })
    
}

useEffect(()=>{
    chart()
},[])
return(
    <div className="app">
        <div>
            <Line data={chartData}/>
        </div>
    </div>
)
}

export default Chart