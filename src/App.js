import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Beranda} from './components/Beranda';
import Login from './components/Login';
import useAuth from './components/useAuth';
const code = new URLSearchParams(window.location.search).get('code')

export default  function App(){
  return code?<Beranda code={code}/>:<Login/>  
  
}


