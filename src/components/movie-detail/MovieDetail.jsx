import { useContext, useEffect, useState } from 'react';
import StoreContext from '../../store';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineRollback, AiOutlineStar } from 'react-icons/ai';
import { CgPlayTrackNextO } from 'react-icons/cg';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import "./moviedetailcomp.scss"
import axios from 'axios';

const MovieDetail = ({ onGenresChange }) => {
    const navigate = useNavigate();
    const store = useContext(StoreContext);
    const { id } = useParams();

    const selectedMovie = store.find((movie) => movie.id.toString() === id);

    const [movieDetail, setMovieDetail] = useState([]);
    const [genreIds, setGenreIds] = useState([]);

    const fetchMovieDetails = async (id) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: {
                    api_key: '0e8368c16fab615ffc56aec01936d0c2',
                    append_to_response: 'credits,keywords',
                }
            });

            setMovieDetail(response.data);

            const genreIds = response.data.genres ? response.data.genres.map((genre) => genre.id) : [];
            setGenreIds(genreIds);

            onGenresChange(genreIds);

        } catch (error) {
            console.log(error);
            return null;
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchMovieDetails(id);
    }, [id]);

    if (!selectedMovie) {
        return null;
    }

    const genre = movieDetail.genres ? movieDetail.genres.map((genre) => genre.name) : [];
    const castList = movieDetail?.credits?.cast || [];
    const castProfilePic = movieDetail?.credits?.cast ? movieDetail.credits.cast.map((cast) => cast.profile_path) : [];
    const director = movieDetail?.credits?.crew ? movieDetail.credits.crew
        .filter((crew) => crew.known_for_department === 'Directing')
        .map((crew) => crew.name)
        .join(', ') : '';

    return (
        <div className="movie-detail" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.poster_path})` }}>
            
            <Container>
                <div className="movie-detail-top">
                    <h2>{selectedMovie.title} <span>({selectedMovie.release_date})</span></h2>
                    <span>
                        {Array(10).fill().map((_, i) => (
                            <AiOutlineStar key={i} className={i < selectedMovie.vote_average ? 'star filled' : 'star empty'} />
                        ))}
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
                                    <Col md={9}>
                                    <div className="info-top-left">
                                    <p className="back" onClick={() => navigate(-1)}>Back <AiOutlineRollback/></p>
                                        <p>Release : <span>{selectedMovie.release_date}</span></p>
                                        <p>Directing : <span>{director}</span></p>
                                        <p>Genres : <span>{genre.slice(0, 3).join(', ')}</span></p>
                                    </div>
                                    </Col>
                                    <Col  md={3}>
                                    <div className="info-top-right">
                                        <p>Runtime : <span>{movieDetail.runtime}</span> minute</p>
                                        <span className='play-trailer'><CgPlayTrackNextO />Play Trailer </span>
                                    </div>
                                    </Col>
                                </div>
                               
                                    <div className="cast-profile">
                                        <div className="cast-profile-top">
                                        {castProfilePic.slice(0, 5).map((pic, index) => (
                                            <div className='profile-pic-box' key={index}>
                                                <img key={index} src={`https://image.tmdb.org/t/p/original${pic}`} alt={pic} />
                                            </div>
                                            
                                        ))}
                                        </div>
                                         <p>
                                       {castList.slice(0, 5).map((cast, index) => (
                                            <NavLink className="cast-names" key={index} as={Link} to={`/cast/${cast.id}`}>
                                                <span>{cast.name}</span>
                                                {/* {index < 4 ? '  ' : ''} */}
                                            </NavLink>
                                        ))}
                                    </p>
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

export default MovieDetail;
