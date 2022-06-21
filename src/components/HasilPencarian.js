import React from 'react'
import {Img} from 'react-image'

export default function HasilPencarian(dataPencarian) {
  return (
    <div className='grid1'>
        <div className='img-song'>
            <Img src={dataPencarian.album} alt='profile' className='song-img'/>
        </div>
        <div className='desc-song'>
            {dataPencarian.title}<br/>
            {dataPencarian.artist}
        </div>
        <div className='played'>
            <i class="fa fa-play" aria-hidden="true"></i>
        </div>
</div>  
  )
}
 