
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

         
        }

        loadPopularMovies()
    }, [])


    const handleSearch = async (event) => {
        event.preventDefault()

        if (!searchQuery.trim()){
            return;
        }
        setLoading(true)
        if(loading) return 

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null)

        }catch(err){
            console.log(err)
            setError("Failed to search movies....");  
        }
        finally{
            setLoading(false)
        }



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

            { error && <div className = "error-Messages" > {error} </div>}

            { loading ? (
                <div className="loading">Loading...</div>
            ): (

                <div className="movies-grid">
                {movies.map((movie) => (
                   movie.title.toLowerCase().startsWith(searchQuery) && (
                   <MovieCard movie={movie} key={movie.id}/> )
                ))}
            </div>

            )}
           

        </div>

    );
}

export default Home; 