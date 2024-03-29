import React, { useEffect, useState } from 'react'
import tmdbaxiosinstance from '../tmdbaxiosinstance';
import './Row.css'
import { MDBIcon } from 'mdb-react-ui-kit';
function Row({title,fetchUrl,isPoster}) {
console.log(fetchUrl);
const[allMovies,setAllmovies]=useState()
const base_url = `https://image.tmdb.org/t/p/original/`;
const fetchData=async()=>{
  const {data}=await tmdbaxiosinstance.get(fetchUrl)
  // console.log(data.results);
  setAllmovies(data.results)
}
// console.log(allMovies);
useEffect(()=>{
  fetchData()
},[])


  return (
   <>
    
    <div className='row'>
    
        <h3>{title} <MDBIcon fas icon="angle-right" size='xs' color='primary' /></h3>

<div className="movies-row">
          {
          allMovies?.map(item=>(
          
           
            <img className={`${isPoster && 'movie-poster'} movie`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="noImg" />
  
          ))
        }
</div>

    </div>
    </>
   
  )
}

export default Row