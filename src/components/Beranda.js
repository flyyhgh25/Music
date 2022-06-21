import React, { useState,useEffect } from 'react'
import image from '../images/eunwo.jpg'
import {Img} from 'react-image'
import  {Header, Navbar}  from './Header'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import useAuth from './useAuth'
import HasilPencarian from './HasilPencarian'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: 'c2aed3f04c3f4851a294ab44fab9feee'
})

function Beranda({code}){
  const accessToken = useAuth(code)
  console.log(`kode aplikasi ${code}`)
  const [nama,setUser] = useState("")
  const [playlist,setPlaylist] = useState([])
  const [dsAll,setDesAll] = useState(false)
  const [search,setSearch] = useState("")
  const [searchResult,setSearchResult] = useState([])
  
  useEffect(()=>{
    if(!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  },[accessToken])

  useEffect(()=>{
    if(!accessToken) return
    spotifyApi.getMe().then(data=>{
      console.log('Informasi tentang user ini adalah :',data.body)
      setUser(data.body.display_name)
    })
    .catch(err=>console.log(err))
  })
  console.log(nama)
 

  useEffect(()=>{
    if(!accessToken) return
    spotifyApi.getPlaylist('37i9dQZEVXcTo0q4erIKDp')
    .then(data=>{
      console.log(`Informasi playlist dari user ini adalah : ${JSON.stringify(data.body)}`)
      setPlaylist(data.body.tracks.items.map(item=>{
        return{
          name : item.track.name,
          gambar : item.track.album.images[0], 
          uri:item.track.uri,
          id:item.track.id
        }
      }))
      // setPlaylist(data.body.tracks)
     
    })
    .catch(err=>console.log(err))
  },[accessToken])
  console.log(playlist)
  
  // useEffect(()=>{
  //   if(!accessToken) return
  //   spotifyApi.getUserPlaylists(userid,{ limit : 20, offset : 3 })
  //   .then(data=>{
  //     console.log(`Informasi playlist dari user ini adalah : ${data.body}`)
  //     setAll(data.body.items)
  //   })
  //   .catch(err=>console.log(err))
  // },[accessToken,userid])
  // console.log(all)
  

  const newPlaylist = playlist.slice(0,7)
  newPlaylist.map(play=>
    console.log(play)
    )
  const allPlaylist = playlist.slice(0,30)
  function Playlist(){
    if(dsAll===false){
      return(
        <>
        {
        newPlaylist.map(hasil=>{
          return(
            <div className='isiGrid'key={hasil.id}>
              <figure>
                <Img src={ hasil.gambar['url'] } alt='profile' className='jump-img'/>
                <figcaption>
                  <a href={hasil.name}><span className='judul-span'>{hasil.name}</span></a><br/>
                  <span>{hasil.name}</span>
                </figcaption>
              </figure>
            </div>
          )
        })}
      </>
      )
  }
  else{
    return(
      <>
        {
        allPlaylist.map(hasil=>{
          return(
            <div className='isiGrid'key={hasil.id}>
              <figure>
                <Img src={ hasil.gambar['url'] } alt='profile' className='jump-img'/>
                <figcaption>
                  <a href={hasil.name}><span className='judul-span'>{hasil.name}</span></a><br/>
                  <span>{hasil.name}</span>
                </figcaption>
              </figure>
            </div>
          )
        })}
      </>
    )
      }
    }
function DisplayNo(){
  const searchD = document.getElementById('search')
  if(searchD.style.display==='none'){
    return searchD.style.display= 'block'
  }
  else{
    return searchD.style.display= 'none'
  }
}

useEffect(()=>{
  if(!search) return setSearchResult([])
  if(!accessToken) return  
    spotifyApi.searchTracks(search).then(trackSongs=>{
      console.log('datanya :', trackSongs.body.tracks.items)
      setSearchResult(trackSongs.body.tracks.items.map(result=>{
        return{
          judul:result.name,
          astist:result.artists[0].name,
          uri:result.uri,
          albumUrl:result.album.images[0].url
        }
      }))
    }).catch(err=>console.log(err))
},[accessToken,search])

  return(
    <>
        <header>
                  <h2>MySpotify</h2>
                  <ul>
                      <li><Link to='/' className='link-header'><i className='fas fa-home'></i> &nbsp; &nbsp;Home</Link></li>
                      <li onClick={DisplayNo}><i className='fas fa-search'></i>  &nbsp; &nbsp;Search</li>
                      <li><Link to='#' className='link-header'><i class="fa-solid fa-album-collection-circle-user"></i> &nbsp; &nbsp;Your library</Link></li>
                  </ul>
                  <ul>
                      <li><Link to='/' className='link-header'><i className='fas fa-plus'></i> &nbsp; &nbsp;Create Playlist</Link></li>
                      <li><Link to='/' className='link-header'><i className='fas fa-heart'></i> &nbsp; &nbsp;Liked Songs</Link></li>
                  </ul>
                  <hr/>
              </header>   
      <main>
      <Navbar/>
      <div className='search' id='search'>
          <input  type="text" placeholder='Cari lagu' value={search} onChange={(e)=>setSearch(e.target.value)} autocomplete="off" autofocus />
        </div>
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
                {searchResult.map(data=>{
                  return(
                <HasilPencarian title={data.judul} artist={data.artist} uri={data.uri} album={data.albumUrl} />
                  )
               })
            }
            </div>
           
        </section>
        <section className='jump-back'>
          <div className='title-flex'>
            <h3>{nama}'s Playlist</h3>
            <h5 onClick={()=>{setDesAll(true)}}>SEE ALL</h5>
          </div>
          <div className='grid-7'>
          <Playlist/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )

}

export {
  Beranda
}