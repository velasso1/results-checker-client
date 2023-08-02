import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from "./Components/Header";

import ResultsPage from "./pages/ResultsPage";
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';

import './css/style.css';

function App() {

  return (
      <>
        <Header />
        <Routes>
          <Route  path="/" element={<StartPage/>}/>
          <Route path="/results" element={<ResultsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </> 
  );
}

export default App;
