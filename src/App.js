import React from 'react';
import Register from './Component/Register';
import Sigin from './Component/Sigin'
import {
  BrowserRouter as Router, Route, Routes, BrowserRouter,
} from 'react-router-dom'
// Import other components as needed

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/Sigin" element={<Sigin/>} />
      
        </Routes>
      </BrowserRouter>
    );
};

export default App;
