import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function useAuth(code) {
    const [accessToken,setAccessToken] =useState()
    const [refreshToken,setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
   
    useEffect(()=>{
        axios.post('http://localhost:8000/login',{
            code
        }).then(res=>{
            console.log('Detail kode : ',res.data)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, '/')
        }).catch(()=>{
            window.location='/'
        })
    },[code])

    useEffect(()=>{ 
        if(!refreshToken || !expiresIn) return
        const timeout = setInterval(()=>{ 
            axios.post('http://localhost:8000/refresh',{ 
                refreshToken,
            }).then(res=>{
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
            }).catch((err)=>{
                window.location='/'
            })
        },(expiresIn-60)*1000)
        return ()=>clearInterval(timeout)
    },[refreshToken, expiresIn])
    return accessToken
}
