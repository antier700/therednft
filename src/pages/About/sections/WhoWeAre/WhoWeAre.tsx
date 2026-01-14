import { Container, Row, Col, Card } from 'react-bootstrap'
import CommonHeading from '../../../../components/CommonHeading/CommonHeading'
import './WhoWeAre.scss'
import { LinkIcon, SecurityIcon, SustainabilityIcon } from '../../../../assets/svgIcon'

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
        <Row className='align-items-center'>
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
                        <SecurityIcon />
                      )}
                      {feature.icon === 'leaf' && (
                        <SustainabilityIcon />
                      )}
                      {feature.icon === 'chain' && (
                       <LinkIcon />
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
