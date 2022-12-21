import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    
    <>
      <Navbar bg="dark" variant="dark" className='footer'>
        <Container className='footer-links'>
          <Navbar.Brand>Contact Me</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="mailto: 24rgraham24@gmail.com">Email</Nav.Link>
            <Nav.Link href="https://twitter.com/RealRyanGraham">Twitter</Nav.Link>
            <Nav.Link href="https://github.com/24rgraham">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;