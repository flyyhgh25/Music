import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import lyricsFinder from 'lyrics-finder'
export default function Lyric() {
    const param = useParams()
    const [lyric,setLyric] = useState("")
    const lagu ={
        nama_lagu:param.namaLagu,
        nama_artist:param.namaArtist

    }
    useEffect(()=>{
        lyricsFinder(lagu.nama_artist,lagu.nama_lagu).then(data=>console.log(data)).catch(err=>console.log('something wrong'))
    })
  return (
    <div>Lyric</div>
  )
}
