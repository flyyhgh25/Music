import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Img} from 'react-image'
import {Header,Navbar} from './Header'
import axios from 'axios'
export default function Lyric() {
    const param = useParams()
    const [lyrics,setLyrics] = useState("")
    const [judul,setJudul] = useState("")
    const [gambar,setGambar] = useState("")
    const [artist,setArtist] = useState("")

    useEffect(()=>{
       axios.get('http://localhost:8000/lyrics',{ 
        params:{
            nama_lagu:param.namaLagu,
            nama_artist:param.namaArtist,
            gambar : param.linkGambar
        }
       }).then(isi=>{
        const linkGambar ='https://i.scdn.co/image/'
        const newGambar= linkGambar.concat(isi.config.params.gambar)
        console.log(newGambar)
        setArtist(isi.config.params.nama_artist)
        setGambar(newGambar)
        setJudul(isi.config.params.nama_lagu)
        const ll = isi.data
        setLyrics(ll)
        console.log(isi)
    }).catch(err=>console.log(err))
    document.querySelector('.isiL').innerHTML = `
    <h2>Lyrics</h2>
    ${lyrics.replace(/\n/g, '<br/>')}
    `
    
  })

 
  return (<>
    <Header/>
    {/* style={{backgroundImage:`url(${gambar})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} */}
    <div className='Lyrics'>
    <Navbar/>
      <section className='grid_lyrics' >
        <figure>
          <Img src={gambar} alt='profile' className='lyrics-pic'/>
        </figure>
        <div className='deskripsi'>
          <h3>{judul}</h3>
          <span>{artist}</span>
        </div>
      </section>
    </div>
    <div className='isi-lyrics'>
      <div className='isiL'>
      </div>
    </div>
  </>
  
  )
}
