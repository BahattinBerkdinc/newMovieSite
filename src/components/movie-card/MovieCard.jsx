import React from 'react';
import './moviecard.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { NavLink } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  const rating = Math.floor(movie.vote_average); // Puanı 10'dan aşağıya yuvarla

  return (
    <div className='movie-card'>
      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      <span className='movie-title'>{movie.title}</span>
      <div className="info-layout">
        <span className='movie-title-layout'>{movie.title}</span>
        <p>{movie.overview.split(' ').slice(0, 12).join(' ')}...</p>
        <div className='rating'>
          {
            Array(10).fill().map((_, i) => (
              <AiOutlineStar key={i} className={i < rating ? 'star filled' : 'star empty'} />
            ))
          }
        <span>({movie.vote_average})</span>
        </div>
        <NavLink className='show-more-btn' to={`/movie/${movie.id}`}>Read More</NavLink>
      </div>
    </div>
  );
}

export default MovieCard;
