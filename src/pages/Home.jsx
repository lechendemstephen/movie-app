
import MovieCard from "../components/MovieCard";
import React, { useState, useEffect } from 'react';
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {

    const[searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]); 
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const loadPopularMovies = async () => {

            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(err){
                console.log(err)
                setError("Failed to load movies....");

            }
            finally {

                setLoading(false);

            }

            loadPopularMovies();
        }


    }, [])


    const handleSearch = (event) => {
        event.preventDefault()
        alert(searchQuery)
        setSearchQuery("........")

    };

    

    function handleSearchQuery(event){
        setSearchQuery(event.target.value)

    }


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form" >
                <input type="text" placeholder="Search for movies ..." 
                className="search-input" value={searchQuery} 
                onChange={handleSearchQuery}/>

                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map((movie) => (
                   movie.title.toLowerCase().startsWith(searchQuery) && (
                   <MovieCard movie={movie} key={movie.id}/> )
                ))}
            </div>

        </div>

    );
}

export default Home; 