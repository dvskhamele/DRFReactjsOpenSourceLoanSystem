import React from 'react';
import './App.css';
import Main from './components/auth/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
// import {useGlobalContext} from './components/context'
import AddTrans from './components/dashboard/AddTrans';
// import PrivateRoute from "react-private-route";



function App() {

  

  return (
    <>
      <Router>
        <Routes>
           <Route exact path='/' element={<Main/>} />
           <Route exact path='/dashboard' element ={ <Dashboard/>}/>
           <Route exact path='/addTrans' element ={<AddTrans/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
