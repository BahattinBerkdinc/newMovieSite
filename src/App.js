import StoreContext from './store';
import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

import MoviesTable from './components/movies-table/MoviesTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetailPage from './pages/movie-detail-page/MovieDetailPage';

function App() {

  const [movieData, setMovieData] = useState([]);

  const loadData = async () => {
    try {
      const resp = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '0e8368c16fab615ffc56aec01936d0c2',
          append_to_response: 'videos,images',
          total_results: 100,
        }
      });
      setMovieData(resp.data.results);
    } catch (error) {
      console.log(error); 
    }
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <StoreContext.Provider value={movieData}>
      <div className="App">
        {/* <Header/> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesTable/>}/>
          <Route path='/movie/:id' element={<MovieDetailPage/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
