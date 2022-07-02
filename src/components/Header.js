import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import image from '../images/eunwo.jpg'
import {Img} from 'react-image'

function User() {
    return (
        <div className='dec-profile'>
            <ul>
                <li className='prof'><Link to='/login'className='link-header'>Login</Link></li>
                <li className='prof'><Link to='/'className='link-header'>Profile</Link></li>
                <li className='prof'><Link to='/'className='link-header'>Logout</Link></li>
            </ul>
        </div>
    )
}
function Navbar(){
    const [show,setShow] = useState(false)
    if(show===true){
        return(
            <>
            <User/>
            <nav>
            <h3>Beranda</h3>
                <div className='profile' onClick={()=>{setShow(false)}}>
                    <ul class='pfp'>
                        <li><Img src={ image } alt='profile' className='img-profil'/></li>
                        <li className='myname'>skies</li>
                        <li className='myname'><i className="fa fa-angle-down" aria-hidden="true" ></i></li>
                    </ul>
                </div>
            </nav>
            </>
        )    
    }
    else{
    return(
        <nav>
            <h3>Beranda</h3>
                <div className='profile'  onClick={()=>{setShow(true)}}>
                    <ul class='pfp'>
                        <li><Img src={ image } alt='profile' className='img-profil'/></li>
                        <li className='myname'>skies</li>
                        <li className='myname'><i className="fa fa-angle-down" aria-hidden="true" ></i></li>
                    </ul>
                </div>
        </nav>        
    )
}
}
function Header() {
    function DisplayNo(){
        const searchD = document.getElementById('search')
        if(searchD.style.display==='none'){
          return searchD.style.display= 'block'
        }
        else{
          return searchD.style.display= 'none'
        }
      }
    return(
    <header>
    <h2>MySpotify</h2>
      <ul>
          <li><Link to='/' className='link-header'><i className='fas fa-home'></i> &nbsp; &nbsp;Home</Link></li>
          <li onClick={DisplayNo}><i className='fas fa-search'></i>  &nbsp; &nbsp;Search</li>
          <li><Link to='#' className='link-header'><i class="fa-solid fa-album-collection-circle-user"></i> &nbsp; &nbsp;Your library</Link></li>
      </ul>
      <ul>
          <li><Link to='/' className='link-header'><i className='fas fa-plus'></i> &nbsp; &nbsp;Create Playlist</Link></li>
          <li><Link to='/' className='link-header'><i className='fas fa-heart'></i> &nbsp; &nbsp;Liked Songs</Link></li>
      </ul>
      <hr/>
    </header>   
    )
}

export {Navbar, Header}
