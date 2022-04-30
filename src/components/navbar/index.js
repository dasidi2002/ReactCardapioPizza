import React from 'react'
import {Nav, NavIcon, NavLink,Bars} from './NavbarElements'
import Fade from 'react-reveal/Fade';
const Navbar = ({toggle}) => {
  return (
  <>  
  <Fade top>
    <Nav>
      <NavLink to='/'>Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars/>
       </NavIcon>
    </Nav>
  </Fade>
 </>
  )
}

export default Navbar