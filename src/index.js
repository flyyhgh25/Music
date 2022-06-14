import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Beranda from './components/Beranda';
ReactDOM.render(
  <React.StrictMode>
   <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Beranda/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

