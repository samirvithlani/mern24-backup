import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo4 = () => {
    const [movie, setmovie] = useState()
    const getMovieData = async () => {

        const res = await axios.get("https://moviedatabase8.p.rapidapi.com/Search/Titanic        ",{
            headers: {
                'x-rapidapi-key': 'add yours',
                'x-rapidapi-host': 'add yours'
            }
        })
        console.log(res.data[0].title)
        console.log(res.data[0].budget)
        setmovie(res.data[0])


    }
  return (
    <div>
        <h1>MOVIE API</h1>
        <button onClick={()=>{getMovieData()}}>Get Movie Data</button>
        {
            movie&&
            <div>
                <h2>{movie.title}</h2>
                <h2>{movie.budget}</h2>
                <img height="300" width="300" src={movie.poster_path}></img>
            </div>
        }
    </div>
  )
}
