import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Shop App</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to='/cart'><Button variant="warning"><FontAwesomeIcon className={styles.icon} icon={faBasketShopping}></FontAwesomeIcon></Button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;