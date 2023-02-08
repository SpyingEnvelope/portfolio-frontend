import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import classes from './AdminNavigation.module.css'

const AdminNavigation = () => {
  return (
    <Navbar bg="secondary" variant="dark" expand='md' style={{zIndex: 100}}>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to='/admin/projects' end className={({ isActive }) => isActive? classes.active : classes.notactive}>Projects</NavLink>
            <NavLink to='/admin/new-project' className={({ isActive }) => isActive? classes.active : classes.notactive}>Add New Project</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavigation;
