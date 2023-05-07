import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Shop App</Navbar.Brand>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;