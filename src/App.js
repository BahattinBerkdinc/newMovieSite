import StoreContext from './store';
import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import MoviesTable from './components/movies-table/MoviesTable';

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
      console.log(resp.data);
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
        <Header/>
        <MoviesTable/>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
