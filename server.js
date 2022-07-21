const express = require('express')
const app = express()
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require('cors')
const bodyParser = require('body-parser')
const lyricsFinder = require("lyrics-finder")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const client_id = 'c2aed3f04c3f4851a294ab44fab9feee'
const client_secret = '9c673ff8686e40c1959eb943b5cd2611'

app.post('/login',(req,res)=>{
    const code = req.body.code
    var spotifyApi = new SpotifyWebApi({
        clientId: client_id,
        clientSecret: client_secret,
        redirectUri: 'http://localhost:3000',
    })
    spotifyApi.authorizationCodeGrant(code).then(data=>{
        res.json({
            accessToken:data.body.access_token,
            refreshToken:data.body.refresh_token,
            expiresIn:data.body.expires_in
        })
    })
    .catch((err)=>{
        // console.log(err)
        res.sendStatus(400)
    })
})

app.post('/refresh',(req,res)=>{
    const refreshToken = req.body.refreshToken
    console.log(refreshToken)
    var spotifyApi = new SpotifyWebApi({
        clientId: client_id,
        clientSecret:client_secret,
        redirectUri: 'http://localhost:3000',
        refreshToken
    })
    spotifyApi.refreshAccessToken().then((data)=> {
        console.log('The access token has been refreshed!');
        res.json({ 
            accessToken:data.body.access_token,
            expiresIn:data.body.expires_in
        })
        }).catch(err=> {
        // console.log('Could not refresh access token', err);
        res.sendStatus(400)
        })
}) 

app.get('/lyrics',async(req,res)=>{
    console.log('berhasul')
    const lyrics = await lyricsFinder(req.query.nama_artist,req.query.nama_lagu)|| 'Lyric tidak ditemukan'
    res.json(lyrics)
})
const port = 8000
app.listen(port,()=>console.log(`Sistem berjalan pada port ${port}`))
