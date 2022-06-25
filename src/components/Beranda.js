import React, { useState,useEffect } from 'react'
import {Img} from 'react-image'
import {Navbar}  from './Header'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import useAuth from './useAuth'
import HasilPencarian from './HasilPencarian'
import SpotifyWebApi from 'spotify-web-api-node'
import LikedSongs from './LikedSongs'

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
  const [artist,setArtist] = useState([])
  const [playSong,setPlaySong] = useState()
  const [lyrics, setLyrics] = useState("")
  const [likedSong,setLikedSong] = useState([])
  const somePlaylist = playlist.slice(0,7)
  const allPlaylist = playlist.slice(0,30)
  useEffect(()=>{
    if(!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  },[accessToken])
  function DisplayNo(){
    const searchD = document.getElementById('search')
    if(searchD.style.display==='none'){
      return searchD.style.display= 'block'
    }
    else{
      return searchD.style.display= 'none'
    }
  }

  // pengguna
  useEffect(()=>{
    if(!accessToken) return
    spotifyApi.getMe().then(datas=>{
      setUser(datas.body.display_name)
      // setID(datas.body.id)
    })
    .catch(err=>console.log(err))
  },)

  // Discover Weekly
  useEffect(()=>{
    if(!accessToken) return
    spotifyApi.getPlaylist('37i9dQZEVXcTo0q4erIKDp')
    .then(data=>{
      setPlaylist(data.body.tracks.items.map(item=>{
        return{
          name : item.track.name,
          gambar : item.track.album.images[0], 
          uri : item.track.uri,
          id : item.track.id
        }
      })) 
    })
    .catch(err=>console.log(err))
  },[accessToken])
  console.log(playlist)


    //liked songs
  useEffect(()=>{
      if(!accessToken) return
      spotifyApi.getPlaylist('3qgZOqR9ZBKTHuTz7F981D')
      .then(data=>{
        setLikedSong(data.body.tracks.items.map(item=>{
          return{
            name : item.track.name,
            gambar : item.track.album.images[0], 
            uri : item.track.uri,
            id : item.track.id
          }
        })) 
      })
      .catch(err=>console.log(err))
    },[accessToken])
    console.log(likedSong)
  
// cari lagu
  useEffect(()=>{
    if(!search) return setSearchResult([])
    if(!accessToken) return  
      spotifyApi.searchTracks(search).then(trackSongs=>{
        setSearchResult(trackSongs.body.tracks.items.map(result=>{
          return{
            judul:result.name,
            artist:result.artists[0].name,
            uri:result.uri,
            albumUrl:result.album.images[0].url
          }
        }))
      }).catch(err=>console.log(err))
  },[accessToken,search])  
 
  // artist
  useEffect(()=>{
    const maher_zain = '6PUZZX4GCzeFS0GaDWxVwz'
    const shane_filan= '3Q2ya2vGeOhQ9CaF9wWNP6'
    const powfu = '6bmlMHgSheBauioMgKv2tn'
    const imagine_dragon = '53XhwfbYqKCa1cC15pYq2q'
    const thescript = '3AQRLZ9PuTAozP28Skbq8V'
    const m_tharik = '0I7sMQsYXAug5uQtZnzTIb'
    if(!accessToken) return
    spotifyApi.getArtists([maher_zain,shane_filan,powfu,imagine_dragon,thescript,m_tharik])
    .then(artis=>{
      setArtist(artis.body.artists.map(s=>{
        return{
          image: s.images[0].url,
          url : s.external_urls.spotify,
          name  : s.name,
          id:s.id
        }
      }))
      console.log(artist)
    })
    .catch(err=>console.log(err))
  })



  function Playlist(){
    if(dsAll===false){
      return(
        <>
        {
        somePlaylist.map(hasil=>{
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
            {/* hasil pencarian */}
        <section className='shorcut'>
            <h3>Shorcut Artist</h3>
            <div className='grid-3'>
              {
              artist.map(result=>{
                return(
                  <a href={result.url}>
                  <div className='grid1' key={result.id}>
                  
                    <div className='img-song'>
                        <Img src={result.image} alt='profile' className='song-img'/>
                    </div>
                    <div className='desc-song'>
                        {result.name}
                    </div>
                    <div className='played'>
                        <i class="fa fa-play" aria-hidden="true"></i>
                    </div>
                 
                </div>
                </a>
                )
              })
            }
                {searchResult.map(data=>{
                  return(
                        <HasilPencarian key={data.uri} track={data}/>
                      )
                  })}
            </div>          
        </section>
        {/* recommendation */}
        <section className='jump-back'>
          <div className='title-flex'>
            <h3>{nama}'s Playlist</h3>
            <h5 onClick={()=>{setDesAll(true)}}>SEE ALL</h5>
          </div>
          <div className='grid-7'>
            <Playlist/>
          </div>
        </section>

        <section className='jump-back'>
          <div className='title-flex'>
            <h3>{nama}'s Liked Songs</h3>
            <h5 onClick={()=>{setDesAll(true)}}>KembaliL</h5>
          </div>
          <div className='grid-7'>
          {likedSong.map(data=>{
                  return(
                        <LikedSongs key={data.uri} likesoong={data}/>
                      )
                  })}
          </div>
        </section>
      </main>
      {/* <Footer accessToken={accessToken}/> */}
    </>
  )
}

export { Beranda }