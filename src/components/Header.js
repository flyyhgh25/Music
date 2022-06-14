import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <h2>MySpotify</h2>
            <ul>
                <li><Link to='/' className='link-header'><i className='fas fa-home'></i> &nbsp; &nbsp;Home</Link></li>
                <li><Link to='#' className='link-header'><i className='fas fa-search'></i>  &nbsp; &nbsp;Search</Link></li>
                <li><Link to='#' className='link-header'><i class="fa-solid fa-album-collection-circle-user"></i> &nbsp; &nbsp;Your library</Link></li>
            </ul>
            <ul>
                <li><Link to='/' className='link-header'><i className='fas fa-plus'></i> &nbsp; &nbsp;Create Playlist</Link></li>
                <li><Link to='/' className='link-header'><i className='fas fa-heaet'></i> &nbsp; &nbsp;Liked Songs</Link></li>
            </ul>
            <hr/>
        </header>
    )
}

export default Header
