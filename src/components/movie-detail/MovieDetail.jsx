
import { useContext, useEffect, useState } from 'react';
import StoreContext from '../../store';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import "./moviedetailcomp.scss"
import axios from 'axios';
import Header from '../header/Header';
const MovieDetail = () => {

    const store = useContext(StoreContext);
    const { id } = useParams(); 
  
    const selectedMovie = store.find((movie) => movie.id.toString() === id); 


    const [movieDetail, setMovieDetail]=useState([])
 
    const fetchMovieDetails = async (id) => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
              api_key: '0e8368c16fab615ffc56aec01936d0c2',
              append_to_response: 'credits,keywords',
            }
          });
      
          setMovieDetail(response.data);
          
        } catch (error) {
          console.log(error);
          return null;
        }
      };
     

      useEffect(() => {
        fetchMovieDetails(id);
      },[id])

   
    console.log(movieDetail);

    const genre = movieDetail.genres ? movieDetail.genres.map((genre) => genre.name) : [];
     const cast = movieDetail?.credits?.cast ? movieDetail.credits.cast.map((cast) => cast.name)  : [];
     const director = movieDetail?.credits?.crew ? movieDetail.credits.crew.map((crew) =>{
        if(crew.known_for_department === 'Directing'){
          return crew.name
        }else{
          return null
        }
     })  : [];

    
    

  return (
    <div className="movie-detail" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.poster_path})`}}>
        <Header/>
        <Container>
        <div className="movie-detail-top">
          <h2>{selectedMovie.title} <span>({selectedMovie.release_date})</span></h2>
          <span>
            {
              Array(10).fill().map((_, i) => (
                <AiOutlineStar key={i} className={i < selectedMovie.vote_average ? 'star filled' : 'star empty'} />
              ))
            }
          </span>
        </div>
        <div className="movie-detail-bottom">
          <Row>
            <Col sm={12} md={4} >
            <div className="movie-img">
            <img src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            </div>
            </Col>
            <Col sm={12} md={8} >
            <div className="movie-info">
              <div className="info-top">
                <div className="info-top-left">
                  <p>Release : <span>{selectedMovie.release_date}</span></p>
                  <p>Directing : <span>{director.splice(0,1) }</span></p>
                  <p>Genres : <span>{genre.splice(0, 3).join(', ')}</span></p>
                </div>
                <div className="info-top-right">
                  
                  <p>Runtime : <span>{movieDetail.runtime}</span> minute</p>
                  <span>Play Trailer - poster</span>
                </div>
              </div>
              <div className="cast">
                <p>Cast: <span>{cast.splice(0, 5).join(', ') }</span> </p>
              </div>
              <div className="info-bottom">
              <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
              </div>
            </div>
            </Col>
          </Row>
        </div>
          
    </Container>
        </div>
  )
}

export default MovieDetail
