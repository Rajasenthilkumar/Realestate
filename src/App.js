import React from 'react';
import Register from './Component/Register';
import Sigin from './Component/Sigin'
import Forget from './Component/Forget'
import Reset from './Component/Reset'
import Checkemail from './Component/Checkemail'
import Resetsucces from './Component/Resetsucces'
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
        <Route path="/Forget" element={<Forget/>} />
        <Route path="/Checkemail" element={<Checkemail/>} />
        <Route path="/Reset" element={<Reset/>} />
        <Route path="/Resetsucces" element={<Resetsucces/>} />




        </Routes>
      </BrowserRouter>
    );
};

export default App;
