import React from 'react'
import "./moviestable.scss"
import { useContext } from 'react'
import StoreContext from '../../store'
import { Col, Container, Row } from 'react-bootstrap'
import MovieCard from '../movie-card/MovieCard'
import PageTitle from '../pageTitle/PageTitle'

const MoviesTable = () => {

    const store = useContext(StoreContext)

  return (
   <Container>
    <PageTitle title="POPULAR MOVIES" />
     <Row className='my-5'>
    {
        store.map((movie,index)=>(
            <Col className='mt-5' sm={12} md={6} lg={4} key={index}>
                <MovieCard movie={movie} />
            </Col>
        ))
    }
    </Row>
   </Container>
  )
}

export default MoviesTable
