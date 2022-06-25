import React, { useEffect, useState } from 'react'
import {Img} from 'react-image'
import image from '../images/eunwo.jpg'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Footer({accessToken,trackUri}) {
  const [play,setPlay] = useState(false)
 useEffect(()=>setPlay(true),[trackUri])
  if(!accessToken) return null
    return (
    <footer>
         <SpotifyPlayer token={accessToken}
        showSaveIcon
        callback={state=>{
            if(!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri?[trackUri]:[]}/>

    </footer>
  )
}
