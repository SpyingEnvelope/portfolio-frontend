import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{zIndex: 100}}>
      <Container fluid className="d-flex flex-column">
        <Navbar.Text style={{ color: "white" }}>Gad Cooper</Navbar.Text>
        <Navbar.Text>Contact me</Navbar.Text>
        <Navbar.Text>Email: gad.cooper@shaw.ca</Navbar.Text>
        <Nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? classes.active : classes.notactive
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? classes.active : classes.notactive
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive ? classes.active : classes.notactive
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact-me"
            className={({ isActive }) =>
              isActive ? classes.active : classes.notactive
            }
          >
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
