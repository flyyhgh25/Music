import React, { useState,useEffect } from 'react'
import {Img} from 'react-image'
import {Navbar, Header}  from './Header'
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
  // const [nama,setUser] = useState([])
  const [title,setTitle] = useState("")
  const [playlist,setPlaylist] = useState([])
  const [dsAll,setDesAll] = useState(false)
  const [search,setSearch] = useState("")
  const [searchResult,setSearchResult] = useState([])
  const [artist,setArtist] = useState([])
  const [playSong,setPlaySong] = useState()
  const [lyrics, setLyrics] = useState("")
  const [likedSong,setLikedSong] = useState([])
  const somePlaylist = playlist.slice(0,12)
  const allPlaylist = playlist.slice(0,30)
  const [idGambar,setIdGambr] = useState("")
  useEffect(()=>{
    if(!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  },[accessToken])
  // pengguna
  // useEffect(()=>{
  //   if(!accessToken) return
  //   spotifyApi.getMe().then(datas=>{
  //     setUser(datas.body.display_name)
  //     // setID(datas.body.id)
  //   })
  //   .catch(err=>console.log(err))
  // },)

  // Discover Weekly
  useEffect(()=>{
    if(!accessToken) return
    spotifyApi.getPlaylist('37i9dQZEVXcTo0q4erIKDp')
    .then(data=>{
      console.log(data.body)
      setTitle(data.body.name)
      setPlaylist(data.body.tracks.items.map(item=>{
        return{
          name : item.track.name,
          gambar : item.track.album.images[0], 
          uri : item.track.uri,
          id : item.track.id,
          artist:item.track.artists[0].name
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
            id : item.track.id,
            artist:item.track.artists[0].name
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
          const newGambar = hasil.gambar['url'].replace('https://i.scdn.co/image/','')
          return(
            <div className='isiGrid'key={hasil.id}>
              <figure>
                <Img src={ hasil.gambar['url'] } alt='profile' className='jump-img'/>
                <figcaption>
                  <Link to={`/lyrics/${hasil.name}/${hasil.artist}/${newGambar}`}><span className='judul-span'>{hasil.artist}</span><br/>
                  <span>{hasil.name}</span>
                  </Link>
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
          const newGambar = hasil.gambar['url'].replace('https://i.scdn.co/image/','')
          return(
            <div className='isiGrid'key={hasil.id}>
              <figure>
                <Img src={ hasil.gambar['url'] } alt='profile' className='jump-img'/>
                <figcaption>
                  <Link to={`/lyrics/${hasil.name}/${hasil.artist}/${newGambar}`}><span className='judul-span'>{hasil.artist}</span><br/>
                  <span>{hasil.name}</span>
                  </Link>
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
      <Header/>
      <main className='mainAll'>
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
        {/* discover weekly */}
        <section className='jump-back'>
          <div className='title-flex'>   
            <h3>{title}</h3>
            <h4 onClick={()=>{setDesAll(true)}} className='seAll'>SEE ALL</h4>
          </div>
          <div className='grid-7'>
            <Playlist/>
          </div>
        </section>
        <section className='jump-back'>
          <div className='title-flex'>
            <h3>Liked Songs</h3>
            <h4 onClick={()=>{setDesAll(true)}} className='seAll'>KembaliL</h4>
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