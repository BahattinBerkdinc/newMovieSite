import React from 'react'
import Header from '../../components/header/Header'
import HomeMovies from '../../components/home-movies/HomeMovies'
import PageTitle from '../../components/pageTitle/PageTitle'
import Spacer from '../../components/spacer/Spacer'
import CategorieMovies from '../../components/categorie-movies/CategorieMovies'
import SearchedMovies from '../../components/searchedMovies/SearchedMovies'

const HomePage = () => {
  return (
    <>
    <Header/>
    <Spacer height={"50px"} />
    <PageTitle title={"Unleash Your Cinematic Adventure: Dive into a World of Movies."}/>
    <SearchedMovies/>
    <Spacer height={"100px"} />
    <HomeMovies/>
    <Spacer height={"100px"} />
    <hr className='text-white'/>
    <CategorieMovies categorieTitle={"Animation & Cartoons"} categorieId={16}/>
    <CategorieMovies categorieTitle={"Action"} categorieId={28}/>
    <CategorieMovies categorieTitle={"Adventure"} categorieId={12}/>
    <CategorieMovies categorieTitle={"Science Fiction"} categorieId={878}/>
    </>
  )
}

export default HomePage
