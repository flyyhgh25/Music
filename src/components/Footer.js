import React from 'react'
import {Img} from 'react-image'
import image from '../images/eunwo.jpg'

export default function Footer() {
  return (
    <footer>
        <div className='currentSong'>
            {/* <Img src={image} className='currentSong-img' alt='img'/> */}
            <div className='song-title'>
                <span className='title-s'>Fade away</span> <br/>
                <span className='pemilik'>Naryeal</span>
            </div>
            <i className='fas fa-heart'></i>
        </div>
        <div className='audioPlayer'>
                {/* KOSONg */}
        </div>
        <div className='selengkapnya'>
            <i class="fa-solid fa-music-note"></i>
            <i className='fas fa-volume-up'></i>
        </div>
    </footer>
  )
}
