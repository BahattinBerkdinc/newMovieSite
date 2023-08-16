import React from 'react'
import { Container, Form } from 'react-bootstrap';

const SearchMovie = ({setMovieData,movieData}) => {

   

  return (
    <Container>
        <Form>
            <Form.Control type="text" placeholder="Search Movie" value={movieData} onChange={(e) => setMovieData(e.target.value)} />
        </Form>
    </Container>
  )
}

export default SearchMovie
