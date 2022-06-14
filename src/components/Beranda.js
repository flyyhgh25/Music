import React from 'react'
import image from '../images/eunwo.jpg'
import {Img} from 'react-image'


export default function Beranda() {
  return (
    <main>
        <nav>
            <h3>Beranda</h3>
            <div className='profile'>
                <ul class='pfp'>
                    <li><Img src={ image } alt='profile' className='img-profil'/></li>
                    <li className='myname'>MyName</li>
                    <li className='myname'><i className="fa fa-angle-down" aria-hidden="true"></i></li>
                </ul>
            </div>
        </nav>
        <section className='shorcut'>
            <h3>Shorcut</h3>
            <div className='grid-3'>
                <div className='grid1'>
                    <div className='img-song'>
                        <Img src={ image } alt='profile' className='song-img'/>
                    </div>
                    <div className='desc-song'>
                        Liked Songs
                    </div>
                    <div className='played'>
                        <i class="fa fa-play" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='grid1'>
                    <div className='img-song'>
                        <Img src={ image } alt='profile' className='song-img'/>
                    </div>
                    <div className='desc-song'>
                        Liked Songs
                    </div>
                    <div className='played'>
                        <i class="fa fa-play" aria-hidden="true"></i>
                    </div>
            
                </div>
                <div className='grid1'>
                    <div className='img-song'>
                        <Img src={ image } alt='profile' className='song-img'/>
                    </div>
                    <div className='desc-song'>
                        Liked Songs
                    </div>
                    <div className='played'>
                        <i class="fa fa-play" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='grid1'>
                    <div className='img-song'>
                        <Img src={ image } alt='profile' className='song-img'/>
                    </div>
                    <div className='desc-song'>
                        Liked Songs
                    </div>
                    <div className='played'>
                        <i class="fa fa-play" aria-hidden="true"></i>
                    </div>
            </div>
            <div className='grid1'>
                    <div className='img-song'>
                        <Img src={ image } alt='profile' className='song-img'/>
                    </div>
                    <div className='desc-song'>
                        Liked Songs
                    </div>
                    <div className='played'>
                        <i class="fa fa-play" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        
              

        </section>
    </main>
  )
}
