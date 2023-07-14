import React,{useState,useEffect} from 'react'
import "./Row.css"
import Youtube from 'react-youtube'
import instance from './axios'
import movieTrailer from 'movie-trailer'
// import axios from 'axios'

 const baseUrl='https://image.tmdb.org/t/p/original/'

const Row = ({title ,fetchUrl,isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(()=>{
        async function fetchData(){
            const request=await instance.get(fetchUrl)
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request;
        }
       
        fetchData();
       
    },[fetchUrl])
    // console.log(movies);

    const opts={
      height:"390",
      width:"100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },

    }

    const handleClick=(movie)=>{
      if(trailerUrl){
        setTrailerUrl("")
      }
      else{
        movieTrailer(movie?.name||"")
        .then((url)=>{
          const urlParams= new URLSearchParams(new URL(url).search)
          //example--https://www.youtube.com/watch?v=XtMThy8QKqU&t=10599s
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error)=>console.log(error))
      }
    }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className= "row_posters">
        {movies.map((movie)=>(
            <img key={movie.id} onClick={()=>handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={`${baseUrl}${movie.name}`} />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row
