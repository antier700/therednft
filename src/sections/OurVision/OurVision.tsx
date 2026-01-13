import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import CommonHeading from '../../components/CommonHeading/CommonHeading'
import icon1 from '../../assets/images/icon_1.svg'
import icon2 from '../../assets/images/icon_2.svg'
import icon3 from '../../assets/images/icon_3.svg'
import woodImage from '../../assets/images/our_img.png'
import './OurVision.scss'

const OurVision = () => {
  const stats = [
    { 
      icon: icon1,
      largeText: '1M',
      smallText: 'Trees'
    },
    { 
      icon: icon2,
      largeText: 'Global',
      smallText: 'Asset Class'
    },
    { 
      icon: icon3,
      largeText: '500K+',
      smallText: 'Tonnes CO2'
    }
  ]

  return (
    <section className="our-vision-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="vision-content">
            <CommonHeading
              title={{ first: 'Our', second: 'Vision' }}
              align="left"
              className="mb-4"
            />
            <p className="vision-text">
              To establish Red Sandalwood as a globally recognized asset class within the next decade, creating the world's largest sustainable forestry ecosystem powered by blockchain technology.
            </p>
            <ul className="vision-list">
              <li>Transforming thousands of acres into a thriving Red Sandalwood ecosystem that restores biodiversity and sequesters over 500,000 tonnes of CO2 annually.</li>
              <li>Empowering rural communities and preserving a species that is sacred to cultures worldwide.</li>
              <li>Creating billions in sustainable wealth, while positioning India as a global hub for tokenized real-world assets.</li>
            </ul>
            <div className="cta-container">
              <Button className="buy-now-btn">Buy Now</Button>
              <p className="cta-text">Contact Us for Special pre-launch price and Bulk order discounts.</p>
            </div>
          </Col>
          <Col lg={6} className="vision-visual">
            <div className="wood-grain-image">
              <img src={woodImage} alt="Red Sandalwood grain" className="wood-image" />
              <div className="stats-container">
                {stats.map((stat, index) => (
                  <Card key={index} className="stat-card">
                    <Card.Body>
                      <div className="stat-icon">
                        <img src={stat.icon} alt="" />
                      </div>
                      <div className="stat-large-text">{stat.largeText}</div>
                      <div className="stat-small-text">{stat.smallText}</div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurVision
