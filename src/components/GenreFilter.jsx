import React from 'react';
// import '../styles/GenreFilter.css';

function GenreFilter({ genres, onSelectGenre }) {
  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      <div className="buttons">
        {genres.map(genre => (
          <button key={genre} onClick={() => onSelectGenre(genre)}>{genre}</button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
