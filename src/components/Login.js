import React from 'react'
import { Link } from 'react-router-dom'
const client_id = 'c2aed3f04c3f4851a294ab44fab9feee'
const statee = 'scope=streaming user-read-private user-library-read playlist-modify-private playlist-read-collaborative user-read-email playlist-read-private user-library-modify user-read-playback-state user-modify-playback-state'
const url_spotify = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:3000&state=${statee}`

export default function Login() {
  return (
    <div className='login'>
      <a href={url_spotify} className='log'>Login</a>
    </div>
  )
}
