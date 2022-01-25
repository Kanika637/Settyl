import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Entry from './Components/Entry';

import DataTable from './Components/DataTable'
import Chart from './Components/Chart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entry/>}/>
       
        <Route path="/data" element={<DataTable/>}/>
        <Route path="/chart" element={<Chart/>}/>
      </Routes>
    </div>
  );
}

export default App;
