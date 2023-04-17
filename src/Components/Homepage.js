import { Carousel } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Homepage.css'
import MovieList from "./Movielist/Movielist";
const contentStyle = {
    width: '100%',
    height: '700px',
    color: '#fff',
  };
export default function Homepage() {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect ( () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then((response)=>{
            setPopularMovies(response.data.results);
            console.log(popularMovies);
        })
    },[])
    return(
        <div>
            <Carousel autoplay effect="fade">
                {
                    popularMovies.map( (movie) => {
                        return(
                            <Link style={{textDecoration: 'none', color:'white'}} to={`movie/${movie.id}`} >
                                <div style={contentStyle} className="content-container">
                                    <div className="posterImage">
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie && movie.backdrop_path}`} />
                                    </div>
                                    <div className="posterImage__overlay">
                                        <div className="posterImage__title">
                                            {movie ? movie.original_title : ""}
                                        </div>
                                        <div className="posterImage__runtime">
                                            {movie ? movie.release_date : ""}
                                            <span className="posterImage__rating">
                                                {movie ? movie.vote_average : ""}
                                                <i className="fas fa-star" style={{marginLeft:'.5rem'}} />{" "}
                                            </span>
                                        </div>
                                        <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </Carousel>
            <MovieList />
        </div>

    )
}