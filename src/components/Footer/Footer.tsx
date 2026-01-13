import { Container, Row, Col } from 'react-bootstrap'
import logoIcon from '../../assets/images/logo_icon.svg'
import footerArt from '../../assets/images/footer_art_img.png'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="custom-footer" style={{ backgroundImage: `url(${footerArt})` }}>
      <Container>
        <Row>
          <Col lg={8} className="footer-brand">
            <div className="footer-logo">
              <img src={logoIcon} alt="The Red Logo" className="logo-icon" />
              <span className="logo-text">THE RED</span>
            </div>
            <p className="footer-description">
              The Red transforms investment capital into environmental capital, creating a legacy that benefits both investors and the planet.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="X (Twitter)">𝕏</a>
              <a href="#" className="social-icon" aria-label="Instagram">📷</a>
              <a href="#" className="social-icon" aria-label="Telegram">✈</a>
              <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
              <a href="#" className="social-icon" aria-label="TikTok">♪</a>
              <a href="#" className="social-icon" aria-label="YouTube">▶</a>
              <a href="#" className="social-icon" aria-label="Reddit">●</a>
            </div>
          </Col>
          <Col lg={2} className="footer-links">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-nav">
              <li><a href="/auctions">Auctions</a></li>
              <li><a href="/marketplace">Secondary Marketplace</a></li>
              <li><a href="/track">Track My Tree</a></li>
              <li><a href="/staking">Staking</a></li>
            </ul>
          </Col>
          <Col lg={2} className="footer-links">
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-nav">
              <li><a href="/about">About</a></li>
              <li><a href="/thered">The Red</a></li>
              <li><a href="/desci">DeSci</a></li>
              <li><a href="/road-ahead">Road Ahead</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="footer-bottom d-flex justify-content-between align-items-center">
            <p className="copyright mb-0">© 2025 The Red</p>
            <div className="footer-bottom-links d-flex align-items-center">
              <a href="/terms">Terms and conditions</a>
              <span className="separator">|</span>
              <a href="/privacy">Privacy policy</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
