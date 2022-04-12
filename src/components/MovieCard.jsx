import { Typography } from 'antd'
import React from 'react'
import './style.css'

function MovieCard({movie}) {
  return (
    <div className='moviecard'>
      <div className='movieimage'>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} />
      </div>
      <div className='moviedata'>
         <Typography level = {1} className='title'>{movie.Title}</Typography>
         <Typography level = {2} className='year'>{movie.Year}</Typography>
         <Typography level = {3} className='rating'>Rated {movie.imdbRating} / 10</Typography>
      </div>
    </div>
  )
}

export default MovieCard