import { Container, Row, Col, Card } from 'react-bootstrap'
import CommonHeading from '../../components/CommonHeading/CommonHeading'
import './OurValues.scss'
import { EyesIcon, HeartIcon, SecurityIcon, SustainabilityIcon } from '../../assets/svgIcon'

const OurValues = () => {
  const values = [
    {
      icon: <EyesIcon />,
      title: 'Transparency',
      description: 'in operations and ownership'
    },
    {
      icon: <SecurityIcon />,
      title: 'Stewardship',
      description: 'of both nature and capital'
    },
    {
      icon: <SustainabilityIcon />,
      title: 'Sustainability',
      description: 'as a foundational principle'
    },
    {
      icon: <HeartIcon />,
      title: 'Inclusivity',
      description: 'for communities, investors, and future generations'
    }
  ]

  return (
    <section className="our-values-section">
      <Container>
        <Row>
          <CommonHeading
            title={{ first: 'Our', second: 'Values' }}
            subtitle="At The Red, we believe that true legacy is grown with:"
            align="center"
          />
        </Row>
        <Row className="g-4 values-grid">
          {values.map((value, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="value-card">
                <Card.Body>
                  <div className="value-icon">{value.icon}</div>
                  <Card.Title className="value-title">{value.title}</Card.Title>
                  <Card.Text className="value-description">{value.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default OurValues
