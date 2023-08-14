import React, { useContext, useState } from 'react'
import PageTitle from '../pageTitle/PageTitle'
import "./similarmovies.scss"
import SimilarMovieCard from '../similar-movie-card/SimilarMovieCard'
import StoreContext from '../../store'
import { Col, Container, Row } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
const SimilarMovies = ({genres}) => {

    const store = useContext(StoreContext)

    console.log("store", store);
    console.log("genres", genres);

    const similarMovies = store.filter((movie) =>
    movie.genre_ids.some((genreId) => genres.includes(genreId))
  );

    console.log("similarMovies", similarMovies);

    const itemsPerPage = 9;
    const pageCount = Math.ceil(similarMovies.length / itemsPerPage);
  
    const [currentPage, setCurrentPage] = useState(0);
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const startIndex = currentPage * itemsPerPage;
    const endIndex = (currentPage + 1) * itemsPerPage;
  
    const selectedMovies = store.slice(startIndex, endIndex);



  return (
    <div>
      <PageTitle title={"SIMILAR Movies"}/>
      <hr />
      <Container>
     <Row className='my-5'>
    {
        selectedMovies.splice(0,60).map((movie,index)=>(
            <Col className='mt-5' sm={12} md={6} lg={4} key={index}>
                <SimilarMovieCard movie={movie}   />
            </Col>
        ))
    }
    </Row>
    <ReactPaginate className='pagination-bar'
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          disableNextClassName={currentPage === pageCount - 1 ? 'disabled' : ''}
          disablePrevClassName={currentPage === 0 ? 'disabled' : ''}
        />
   </Container>
    </div>
  )
}

export default SimilarMovies
