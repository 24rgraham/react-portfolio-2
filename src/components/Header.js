import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    
    <>
      <Navbar bg="dark" variant="dark" className='bar'>
        <Container>
          <Navbar.Brand href="/">Ryan Graham</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;