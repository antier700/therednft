import { Container, Row, Col } from 'react-bootstrap'
import videoImage from '../../../../assets/images/video_img.png'
import './HeroSection.scss'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="hero-title">Our Story Begins in the Soil</h1>
            <p className="hero-subtitle">
              "In nature, time builds value. We simply make it accessible."
            </p>
            <div className="hero-video-container">
              <div className="video-placeholder">
                <img src={videoImage} alt="Forest scene" className="video-image" />
                <div className="play-button">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.9)" />
                    <path d="M24 18L42 30L24 42V18Z" fill="#000" />
                  </svg>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
