import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.scss'
import { Link } from 'react-router-dom'
import logoIcon from '../../../assets/images/logo.svg'

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom">
          <img src={logoIcon} alt="The Red Logo" className="logo-icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="#">The Red</Link>
            <Link className="nav-link" to="#">DeSol</Link>
            <Link className="nav-link active" to="/about">About</Link>
            <Link className="nav-link" to="#">Road Ahead</Link>
            <Link className="nav-link" to="#">Secondary Marketplace</Link>
            <Link className="nav-link" to="#">Auctions</Link>
            <Link className="nav-link" to="#">Track My Tree</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
