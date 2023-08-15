
import React, { useContext} from 'react'
import StoreContext from '../../store'
import { Col, Row} from 'react-bootstrap';
import PageTitle from '../pageTitle/PageTitle';
import "./categoriemovies.scss"
import { Link } from 'react-router-dom';

const CategorieMovies = ({categorieId,categorieTitle}) => {

    const store = useContext(StoreContext);

    const categorieMovies = store.filter((movie) => movie.genre_ids.includes(categorieId))

  

  return (
    <div className='categorie-movies'> 
        <PageTitle title={categorieTitle}/>
        <Row>
            {
                categorieMovies.splice(0,6).map((movie, index) => (
                    <Col className='my-3' sm={6} md={2} key={index}>
                    <Link to={`/movie/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                    </Link>
                    </Col>
                ))
            }
        </Row>
    </div>
  )
}

export default CategorieMovies
