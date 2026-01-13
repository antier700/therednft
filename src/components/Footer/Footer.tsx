import { Container, Row, Col } from 'react-bootstrap'
import logoIcon from '../../assets/images/logo_icon.svg'
import footerArt from '../../assets/images/footer_art_img.png'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="custom-footer" style={{ backgroundImage: `url(${footerArt})` }}>
      <Container>
        <Row>
          <Col xl={8} md={6} xs={12} className="footer-brand">
            <div className="footer-logo">
              <img src={logoIcon} alt="The Red Logo" className="logo-icon" />
              <span className="logo-text">THE RED</span>
            </div>
            <p className="footer-description">
              The Red transforms investment capital into environmental capital, creating a legacy that benefits both investors and the planet.
            </p>
            <div className="social-icons">
              <Link to="#" className="social-icon" aria-label="X (Twitter)">𝕏</Link>
              <Link to="#" className="social-icon" aria-label="Instagram">📷</Link>
              <Link to="#" className="social-icon" aria-label="Telegram">✈</Link>
              <Link to="#" className="social-icon" aria-label="LinkedIn">in</Link>
              <Link to="#" className="social-icon" aria-label="TikTok">♪</Link>
              <Link to="#" className="social-icon" aria-label="YouTube">▶</Link>
              <Link to="#" className="social-icon" aria-label="Reddit">●</Link>
            </div>
          </Col>
          <Col xl={2} md={3} xs={12} className="footer-links">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-nav">
              <li><Link to="#">Auctions</Link></li>
              <li><Link to="#">Secondary Marketplace</Link></li>
              <li><Link to="#">Track My Tree</Link></li>
              <li><Link to="#">Staking</Link></li>
            </ul>
          </Col>
          <Col xl={2} md={3} xs={12} className="footer-links">
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-nav">
              <li><Link to="#">About</Link></li>
              <li><Link to="#">The Red</Link></li>
              <li><Link to="#">DeSci</Link></li>
              <li><Link to="#">Road Ahead</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="footer-bottom d-flex justify-content-between align-items-center">
            <p className="copyright mb-0">© 2025 The Red NFT <span className="text-white">|</span> All rights reserved</p>
            <div className="footer-bottom-links d-flex align-items-center">
              <Link to="#">Terms and conditions</Link>
              <span className="separator">|</span>
              <Link to="#">Privacy policy</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
