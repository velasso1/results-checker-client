import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Header from "./Components/Header";
import useAuth from './hooks/use-auth';

import ResultsPage from "./pages/ResultsPage";
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import AuthorizedPage from './pages/AuthorizedPage';

import './css/style.css';

function App() {

  let {isAuth} = useAuth();

  return (
      <>
        <Header />
        <Routes>
          <Route  path="/" element={<StartPage/>}/>
          <Route path="/results" element={<ResultsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/authorized" element={isAuth ? <AuthorizedPage/> : <Navigate to='/login'/>}/>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </> 
  );
}

export default App;
