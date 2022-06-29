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

export {Navbar}
