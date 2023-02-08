import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand='md' style={{zIndex: 100}}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">Gad Cooper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to='/' end className={({ isActive }) => isActive? classes.active : classes.notactive}>Home</NavLink>
            <NavLink to='/portfolio' className={({ isActive }) => isActive? classes.active : classes.notactive}>Portfolio</NavLink>
            <NavLink to='/about-me' className={({ isActive }) => isActive? classes.active : classes.notactive}>About</NavLink>
            <NavLink to='/contact-me' className={({ isActive }) => isActive? classes.active : classes.notactive}>Contact me</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
