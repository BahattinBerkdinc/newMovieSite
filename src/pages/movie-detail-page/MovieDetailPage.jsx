import React, { useContext, useEffect, useState } from 'react';
import StoreContext from '../../store';
import './moviedetail.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import fetchMovieDetails from '../../helpers/functions';

const MovieDetailPage = () => {
  const store = useContext(StoreContext);
  const { id } = useParams(); 

  const [movieDetail, setMovieDetail] = useState(null);

  const selectedMovie = store.find((movie) => movie.id.toString() === id); 


  useEffect(() => {
    const fetchData = async () => {
      const detail = await fetchMovieDetails(selectedMovie.id);
      setMovieDetail(detail);
    };
    
    fetchData();
  }, [selectedMovie.id]);
  
  console.log(movieDetail);

  return (
    <div className="movie-detail">
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
            <img src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`} alt={selectedMovie.title} />
            </div>
            </Col>
            <Col sm={12} md={8} >
            <div className="movie-info">
              <div className="info-top">
                <div className="info-top-left">
                  <p>Release : {selectedMovie.release_date}</p>
                  <p>Genres:</p>
                </div>
                <div className="info-top-right">
                  
                  <p>Runtime : {selectedMovie.runtime}</p>
                  <span>Play Trailer - poster</span>
                </div>
              </div>
              <div className="cast">
                <p>Cast: {selectedMovie.cast} </p>
              </div>
              <div className="info-bottom">
              <h2>{selectedMovie.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam pariatur odio dolor, totam ex obcaecati tenetur repellendus, consequuntur molestiae et eligendi quasi, esse aut dolorum atque porro maxime ut sunt reiciendis nobis! Doloremque similique eligendi architecto cum, ducimus beatae!</p>
              </div>
            </div>
            </Col>
          </Row>
        </div>
          
    </Container>
        </div>
      
  );
}

export default MovieDetailPage;
