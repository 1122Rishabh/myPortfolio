import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import MyIntro from './components/MyIntro/MyIntro';

import Home from './components/Home/Home'


function App() {
  return (
    
    <BrowserRouter><Routes>


      <Route path="/" element={<Home/>}/>
      <Route path="/blank" element={<MyIntro/>}/>




      
      
      
      </Routes></BrowserRouter>
      
  

  );
}

export default App;
