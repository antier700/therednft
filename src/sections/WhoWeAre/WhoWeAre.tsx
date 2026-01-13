import { Container, Row, Col, Card } from 'react-bootstrap'
import CommonHeading from '../../components/CommonHeading/CommonHeading'
import './WhoWeAre.scss'

const WhoWeAre = () => {
  const features = [
    {
      icon: 'shield-check',
      title: 'Expertise & Heritage',
      description: 'Decades of expertise in Red Sandalwood cultivation across Andhra Pradesh, preserving sacred traditions.'
    },
    {
      icon: 'leaf',
      title: 'CITES Compliance',
      description: 'CITES-compliant, rare species preservation-focused operations with environmental accountability.'
    },
    {
      icon: 'chain',
      title: 'Blockchain Innovation',
      description: 'ESG-aligned operations with blockchain asset management on Polygon and full audit transparency.'
    }
  ]

  return (
    <section className="who-we-are-section">
      <Container>
        <Row>
          <Col lg={4} className="who-we-are-content">
            <CommonHeading
              title="Who We Are"
              align="left"
              className="mb-4"
            />
            <p className="section-text">
              We are not newcomers.<br />
              With decades of deep-rooted expertise<br />
              in Red Sandalwood cultivation, our team<br />
              has operated across the native regions<br />
              of Andhra Pradesh.
            </p>
          </Col>
          <Col lg={8} className="feature-cards-col">
            <div className="feature-cards-wrapper">
              {features.map((feature, index) => (
                <Card key={index} className="feature-card">
                  <Card.Body>
                    <div className={`feature-icon feature-icon-${feature.icon}`}>
                      {feature.icon === 'shield-check' && (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 2.5L5 7.5V20C5 28.25 11.75 35.5 20 37.5C28.25 35.5 35 28.25 35 20V7.5L20 2.5Z" fill="#4a9b5f" stroke="#4a9b5f" strokeWidth="1.5"/>
                          <path d="M15 20L18 23L25 15.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {feature.icon === 'leaf' && (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 2.5C12.5 10 7.5 17.5 7.5 25C7.5 31.25 11.25 35 17.5 35C22.5 35 26.25 31.25 27.5 26.25C28.75 31.25 32.5 35 37.5 35C37.5 27.5 32.5 20 25 12.5C22.5 10 21.25 7.5 20 2.5Z" fill="#4a9b5f"/>
                        </svg>
                      )}
                      {feature.icon === 'chain' && (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="20" r="5" fill="#4a9b5f"/>
                          <rect x="5" y="15" width="10" height="10" rx="1.5" fill="#4a9b5f"/>
                          <rect x="25" y="15" width="10" height="10" rx="1.5" fill="#4a9b5f"/>
                          <rect x="10" y="10" width="10" height="10" rx="1.5" fill="#4a9b5f"/>
                          <rect x="20" y="10" width="10" height="10" rx="1.5" fill="#4a9b5f"/>
                          <rect x="10" y="20" width="10" height="10" rx="1.5" fill="#4a9b5f"/>
                          <rect x="20" y="20" width="10" height="10" rx="1.5" fill="#4a9b5f"/>
                        </svg>
                      )}
                    </div>
                    <Card.Title className="feature-title">{feature.title}</Card.Title>
                    <Card.Text className="feature-description">{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhoWeAre
