import React from 'react'
import Header from '../../components/header/Header'
import HomeMovies from '../../components/home-movies/HomeMovies'
import PageTitle from '../../components/pageTitle/PageTitle'
import Spacer from '../../components/spacer/Spacer'

const HomePage = () => {
  return (
    <>
    <Header/>
    <Spacer height={"50px"} />
    <PageTitle title={"Unleash Your Cinematic Adventure: Dive into a World of Movies."}/>
    <Spacer height={"100px"} />
    <HomeMovies/>
    </>
  )
}

export default HomePage
