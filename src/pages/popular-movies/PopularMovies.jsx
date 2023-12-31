import React from 'react'
import MoviesTable from '../../components/movies-table/MoviesTable'
import Header from '../../components/header/Header'

const PopularMovies = ({loading}) => {
  return (
    <div>
    <Header/>
    <MoviesTable loading={loading}/>
    </div>
  )
}

export default PopularMovies
