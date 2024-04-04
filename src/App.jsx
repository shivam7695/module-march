import React, { useState } from 'react';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import './App.css';
import { movies, genres } from './moviesData';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreSelection = genre => {
    console.log(`Selected genre: ${genre}`);
    setSelectedGenre(genre);
  };

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <GenreFilter genres={genres} onSelectGenre={handleGenreSelection} />
      <MovieList movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}

export default App;
