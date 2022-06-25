import React from 'react'
import {Beranda} from './components/Beranda';
import Login from './components/Login';
const code = new URLSearchParams(window.location.search).get('code')
export default  function App(){
  return code?<Beranda code={code}/>:<Login/>
}