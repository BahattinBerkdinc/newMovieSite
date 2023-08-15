import React from 'react'
import "./header.scss"
import { Container, NavLink } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {

  const navigate = useNavigate()

  return (
    <Container className='header'>
      <div onClick={() => navigate("/")} className="logo">FREE <span>MOVIEs</span> <span className="w">W</span> </div>
      <nav>
        <NavLink as={Link} className='nav-link' to='/'>Home</NavLink>
        <NavLink as={Link} className='nav-link' to='/popular'>Popular Movies</NavLink>
        <NavLink className='nav-link' to='/'>Share Us</NavLink>
      </nav>
    </Container>
  )
}

export default Header
