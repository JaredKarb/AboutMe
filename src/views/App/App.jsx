import './App.css';
import React, { useState, useEffect, useContext  } from 'react';
import { Routes, Route, useNavigate,  } from "react-router-dom";
import Layout from "../../Components/Layout/Layout"
import Home from '../Home/Home';

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;