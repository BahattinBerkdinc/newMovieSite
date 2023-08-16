import React, { useContext, useState } from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import StoreContext from '../../store'
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "./searchedmovies.scss"
import SearchMovie from '../searchMovie-form/SearchMovie'
import Spacer from '../spacer/Spacer'

const SearchedMovies = () => {

    const store = useContext(StoreContext);

    const [movieData, setMovieData] = useState('');

    const searchedMovies = store.filter(item => item.title.toLowerCase().includes(movieData.toLowerCase()));

    return (
        <Container>
            <SearchMovie movieData={movieData} setMovieData={setMovieData} />
            <Spacer height={"100px"} />
            {movieData && (
                <Row>
                    <h2>Searched Movies :</h2>
                    {searchedMovies.map(movie => (
                        <Col className='movie-card gy-3' key={movie.id} sm={6} md={6} lg={4} xl={3}>
                            <Link to={`/movie/${movie.id}`} className="movie-card">
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                                <div className="movie-info">
                                    <p className="movie-title">{movie.title}</p>
                                    <div className="info-layout">
                                        <span className='movie-title-layout'>{movie.title}</span>
                                        <p>{movie.overview.split(' ').slice(0, 30).join(' ')}...</p>
        
                                     <NavLink as={Link}  className='show-more-btn' to={`/movie/${movie.id}`}                            >See More</NavLink>
                                    </div>
                                    <span>
                                        {Array(10).fill().map((_, i) => (
                                            <AiOutlineStar key={i} className={i < movie.vote_average ? 'star filled' : 'star empty'} />
                                        ))}
                                    </span>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    )
}

export default SearchedMovies;
