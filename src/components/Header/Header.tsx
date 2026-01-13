import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.scss'

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom">
          <span className="logo-icon">🌺</span>
          <span className="logo-text">THE RED</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/thered">The Red</Nav.Link>
            <Nav.Link href="/desol">DeSol</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/road-ahead">Road Ahead</Nav.Link>
            <Nav.Link href="/marketplace">Secondary Marketplace</Nav.Link>
            <Nav.Link href="/auctions">Auctions</Nav.Link>
            <Nav.Link href="/track">Track My Tree</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
