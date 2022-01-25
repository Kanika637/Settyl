// import React, { useEffect, useState } from "react";
// import {Chart as ChartJs, ArcElement,Tooltip,Legend} from 'chart.js'


// import {Chart, Pie} from 'react-chartjs-2'

// ChartJs.register(ArcElement,Tooltip,Legend);

// const PieChart=()=>{

//     const [chart,setChart]=useState({});

//     var baseUrl='http://127.0.0.1:3333/entry';


//     useEffect(()=>{

//         const getdata=async()=>{
//             await fetch('http://127.0.0.1:3333/entry',{
//                 method:'GET',
//                 headers:{
//                     'Content-Type':'application/json',
//                 }
//             })
//             .then((res)=>{
//                 if(res.ok){
//                     res.json().then((json)=>{
//                         console.log(json.data);
//                         setChart(json.data)
//                     });
//                 }
//             }).catch((error)=>{
//                 console.log(error);
//             });
//         };
//         getdata()
//     },[])



//     console.log('chart',chart);
//     var data={
//         labels: chart.UserData,
//         datasets:[{
//             data
//         }]

//     }
// }