import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Beranda from './components/Beranda';
import DocumentMeta from 'react-document-meta'
import Footer from './components/Footer';
const meta = {
      title:'MySpotify', 
      description:'This is my song app', 
      meta:{
          charset:'utf-8', 
          name:'viewport', 
          content:"width=device-width, initial-scale=1.0",
      }
  }

ReactDOM.render(
  <React.StrictMode>
    <DocumentMeta {...meta}>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Beranda/>}/>
        </Routes>
        <Footer/>
      </Router>
    </DocumentMeta>
  </React.StrictMode>,
  document.getElementById('root')
);

