import StoreContext from './store';
import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetailPage from './pages/movie-detail-page/MovieDetailPage';
import HomePage from './pages/home-page/HomePage';
import PopularMovies from './pages/popular-movies/PopularMovies';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [loading,setLoading] = useState(false);

  const loadData = async () => {
    try {
      const allMovies = [];

      for (let page = 1; page <= 5; page++) {
        const resp = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '0e8368c16fab615ffc56aec01936d0c2',
              sort_by: 'popularity.desc',
              language: 'en-US',
              page: page,
            },
          }
        );
        allMovies.push(...resp.data.results);
      }

      setMovieData(allMovies);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <StoreContext.Provider value={movieData}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/popular' element={<PopularMovies loading={loading}/>} />
            <Route path="/movie/:id" element={<MovieDetailPage  />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
