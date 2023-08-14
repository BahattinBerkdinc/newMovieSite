import React, { useContext } from 'react'
import "./homemovies.scss"
import { Col, Row } from 'react-bootstrap'
import StoreContext from '../../store'
import { Link } from 'react-router-dom'
const HomeMovies = () => {

    const store = useContext(StoreContext);

    console.log("store", store);

    const images = store.map((movie) => movie.poster_path)
    const moviesId = store.map((movie) => movie.id)



  return (
    <div className='home-movies'>
        <Row>
            <Col sm={12} md={4}>
                <Link to={`/movie/${moviesId[25]}`} className="home-movies-left">
                <img  src={`https://image.tmdb.org/t/p/original${images[25]}`}alt="" />
                </Link>
            </Col>
            <Col sm={12} md={8}>
                <Row>
                    <Col >
                    <Link to={`/movie/${moviesId[1]}`} >
                    <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/original${images[1]}`}alt="" />
                    </Link >
                    </Col>
                    <Col >
                    <Link to={`/movie/${moviesId[2]}`} >
                    <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/original${images[2]}`}alt="" />
                    </Link >
                    </Col>
                    <Col >
                    <Link to={`/movie/${moviesId[3]}`} >
                    <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/original${images[3]}`}alt="" />
                    </Link >
                    </Col>
                    <Col >
                    <Link to={`/movie/${moviesId[4]}`} >
                    <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/original${images[4]}`}alt="" />
                    </Link >
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col >
                    <Link to={`/movie/${moviesId[5]}`} >
                    <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/original${images[5]}`}alt="" />
                    </Link >
                    </Col>
                    <Col >
                    <Link to={`/movie/${moviesId[6]}`} >
                    <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/original${images[6]}`}alt="" />
                    </Link >
                    </Col>
                    <Col >
                    <Link to={`/movie/${moviesId[7]}`} >
                    <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/original${images[7]}`}alt="" />
                    </Link >
                    </Col>
                    <Col >
                    <Link to={`/movie/${moviesId[8]}`} >
                    <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/original${images[8]}`}alt="" />
                    </Link >
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default HomeMovies
