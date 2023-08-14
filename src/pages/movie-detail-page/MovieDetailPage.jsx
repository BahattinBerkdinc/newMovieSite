

import { useState } from 'react';
import MovieDetail from '../../components/movie-detail/MovieDetail';
import SimilarMovies from '../../components/similar-movies/SimilarMovies';
import './moviedetail.scss';



const MovieDetailPage = () => {

  const [genres, setGenres] = useState([]);

    const handleGenresChange = (genreIds) => {
        setGenres(genreIds);
    };

  
 

  return (
    <div>
      <MovieDetail onGenresChange={handleGenresChange}/>
      <SimilarMovies genres={genres}/>
    </div>
      
  );
}

export default MovieDetailPage;
