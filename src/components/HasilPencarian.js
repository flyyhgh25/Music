import React from 'react'
import {Img} from 'react-image'

export default function HasilPencarian({track,chooseSong}) {
 function handlePlay(){
  chooseSong(track)
 }
  return (
    <div className='grid1' onClick={handlePlay}>
        <div className='img-song'>
            <Img src={track.albumUrl} alt='profile' className='song-img'/>
        </div>
        <div className='desc-song'>
            {track.judul}<br/>
            {track.artist}
        </div>
        <div className='played'>
            <i class="fa fa-play" aria-hidden="true"></i>
        </div>
    </div>  
  )
}
 