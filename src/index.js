import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './App';
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Header} from './components/Header';
import {Beranda} from './components/Beranda';
import Helmet from 'react-helmet';
import Login from './components/Login';
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Helmet>
          <meta charSet="utf-8" />
                <title>Home</title>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Helmet> 
         <Routes>
           <Route exact path='/' element={<App/>}/>
           <Route path='/login' element={<Login/>}/>
         </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

