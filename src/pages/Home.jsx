import { use } from "react";
import MovieCard from "../components/MovieCard";
import React, { useState } from 'react'


function Home() {

    const[searchQuery, setSearchQuery] = useState("");


    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "John Wick", release_date: "2010"},
        {id: 3, title: "Stephen Wick", release_date: "2000"},
        {id: 4, title: "Terminator Wick", release_date: "1990"},
    ];

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