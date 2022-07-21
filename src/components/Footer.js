import React, { useEffect, useState } from 'react'
import {Img} from 'react-image'
import image from '../images/eunwo.jpg'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Footer({prev}) {
    // const link = 'https://p.scdn.co/mp3-preview/'
    // const preview = link.concat(link)
    console.log(prev)
    return (
    <footer>
      <audio controls autoplay muted>
    {/* <source src="horse.ogg" type="audio/ogg" /> */}
    <source src={prev} type="audio/mpeg"/>
    Your browser does not support the audio element.
      </audio>

    </footer>
  )
}
