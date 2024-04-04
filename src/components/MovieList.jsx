import React from 'react';
// import './styles/MovieList.css';
import '../App.css';

function MovieList({ movies, selectedGenre }) {
  return (
    <div className="movie-list">
      <h2>Movies</h2>
      <table >
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies
            .filter(movie => !selectedGenre || movie.genre === selectedGenre)
            .map(movie => (
              <tr key={movie.title}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
