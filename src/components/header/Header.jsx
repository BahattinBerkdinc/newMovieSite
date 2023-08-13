import React from 'react'
import "./header.scss"
import { Container, NavLink } from 'react-bootstrap'
const Header = () => {
  return (
    <Container className='header'>
      <div className="logo">FREE <span>MOVIEs</span> <span className="w">W</span> </div>
      <nav>
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/'>Popular</NavLink>
        <NavLink className='nav-link' to='/'>Popular</NavLink>
      </nav>
    </Container>
  )
}

export default Header
