import React from 'react'
import {Img} from 'react-image'

export default function LikedSongs({likesoong}) {
  return (
  
            <div className='isiGrid' key={likesoong.id}>
                <figure>
                  <Img src={likesoong.gambar['url'] } alt='profile' className='jump-img'/>
                  <figcaption>
                    <a href={likesoong.name}><span className='judul-span'>{likesoong.name}</span></a><br/>
                    <span>{likesoong.name}</span>
                  </figcaption>
                </figure>
              </div>

  )
}