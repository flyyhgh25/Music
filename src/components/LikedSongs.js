import React from 'react'
import {Link} from 'react-router-dom'
import {Img} from 'react-image'

export default function LikedSongs({likesoong}) {
  const newGambar = likesoong.gambar['url'].replace('https://i.scdn.co/image/','')
  return (
            <div className='isiGrid' key={likesoong.id}>
                <figure>
                  <Img src={likesoong.gambar['url'] } alt='profile' className='jump-img'/>
                  <figcaption>
                    <Link to={`/lyrics/${likesoong.name}/${likesoong.artist}/${newGambar}`}>
                      <span className='judul-span'>{likesoong.artist}</span><br/>
                      <span>{likesoong.name}</span>
                    </Link>
                  </figcaption>
                </figure>
              </div>
  )
  }