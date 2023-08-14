import React, { useState } from 'react';
import "./moviestable.scss";
import { useContext } from 'react';
import StoreContext from '../../store';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../movie-card/MovieCard';
import PageTitle from '../pageTitle/PageTitle';
import ReactPaginate from 'react-paginate';

// ...

const MoviesTable = () => {
    const store = useContext(StoreContext);
    console.log(store);
  
    const itemsPerPage = 20;
    const pageCount = Math.ceil(store.length / itemsPerPage);
  
    const [currentPage, setCurrentPage] = useState(0);
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const startIndex = currentPage * itemsPerPage;
    const endIndex = (currentPage + 1) * itemsPerPage;
  
    const selectedMovies = store.slice(startIndex, endIndex);
  
    return (
      <Container>
        <PageTitle title="POPULAR MOVIES" />
        <Row className='my-5'>
          {selectedMovies.map((movie, index) => (
            <Col className='mt-5' sm={12} md={6} lg={4} key={index}>
              <MovieCard movie={movie} />
            </Col>
          ))}
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
    );
  };
  
  export default MoviesTable;
  

