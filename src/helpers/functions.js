import axios from "axios";

const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: '0e8368c16fab615ffc56aec01936d0c2',
          append_to_response: 'credits,keywords',
        }
      });
  
      return response.data;
      
    } catch (error) {
      console.log(error);
      return null;
    }
  };
 
export default fetchMovieDetails
