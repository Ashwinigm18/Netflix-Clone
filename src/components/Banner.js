import React, { useEffect, useState } from 'react'
import requests from '../request'
import instance from './axios'
import './Banner.css'

const Banner = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request=await instance.get(requests.fetchNetflixOriginals);
            console.log(request.data.results);
            setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            return request;
        }
        fetchData();
    },[])
    console.log(movies);

    function truncate(str,n){
        return (str?.length>n ?str.substr(0,n-1)+"...":str)
    }

  return (
    <div>
      <header className="banner"
      style={{backgroundSize:"Cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,backgroundPosition:"center center"
    }}
      >
        <div className="banner_contents">
            <h1 className='banner_title'>
                {movies?.title || movies?.name || movies?.original_name}
            </h1>
            <div className="banner_button">
                <button className="banner_buttons">Play</button>
                <button className="banner_buttons">List</button>
            </div>
            <h1 className="banner_description">{truncate(movies?.overview,150)}</h1>
        </div>
        <div className="banner_fadeBottom"></div>
      </header>
    </div>
  )
}

export default Banner
