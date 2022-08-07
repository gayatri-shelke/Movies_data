import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Movies=()=>{
    const{movie,isLoading}=useGlobalContext()
    if(isLoading){
        return(
            
                <div className="loading">Loading....</div>
            
        )
    }
    return (<div>
    <section className="movie-page">
        <div className=" container grid grid-4-col">{movie.map((curMovies)=>{
            const {imdbID,Title,Poster}=curMovies
            const movieName=Title.substring(0,15)
            return(
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                       <div className="card-info">
                          <h2>{movieName.length>15?`${movieName}...`:movieName}</h2>
                          <img src={Poster} alt={imdbID} />
                       </div>
                    </div>
                </NavLink>
            )
        })}</div>
    </section>
    </div>
    )
}
export default Movies