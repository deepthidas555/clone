import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import './Banner.css'
import tmdbaxiosinstance from '../tmdbaxiosinstance'
import { Row } from 'react-bootstrap';


function Banner({fetchUrl}) {

    const[movie,setMovie]=useState({})
    const base_url = `https://image.tmdb.org/t/p/original/`;
    const fetchData=async()=>{
      const {data}=await tmdbaxiosinstance.get(fetchUrl)

      console.log(data.results[Math.floor(Math.random()*data.results.length)]);
      setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    //   setAllmovies(data.results)
    }
    // console.log(movie);
    useEffect(()=>{
        fetchData()
    },[])


    
  return (
    <div 
    style={{
        height:"650px",
        backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
    }}>

        <div className='banner-content'>
            <h1>{movie?.name}</h1>
            <p style={{color:'white'}}>{movie?.overview}</p>
            <MDBBtn style={{width:'150px',height:'50px',boxShadow:'none'}} color='primary'><MDBIcon fas icon="play"  size='2x' /> </MDBBtn>   <MDBBtn size='2x' style={{width:'150px',color:'white',backgroundColor:'dimgrey',height:'50px',fontSize:18,boxShadow:'none'}}>More Info </MDBBtn>   <MDBBtn style={{width:'210px',color:'white',backgroundColor:'transparent',boxShadow:'none',height:'50px',fontSize:18}}><MDBIcon fas icon="plus-circle" />  Add To My List </MDBBtn>

        </div>
        
    </div>
  )
}

export default Banner