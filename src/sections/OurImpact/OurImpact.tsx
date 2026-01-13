import { Container, Row, Col, Card } from 'react-bootstrap'
import CommonHeading from '../../components/CommonHeading/CommonHeading'
import './OurImpact.scss'

const OurImpact = () => {
  const impacts = [
    {
      icon: '🌳',
      title: 'Climate',
      stat1: '1M trees',
      stat2: '500,000+ tonnes CO2 absorbed'
    },
    {
      icon: '👥',
      title: 'Community',
      stat1: 'Women-led',
      stat2: 'cooperatives and employment programs'
    },
    {
      icon: '🏢',
      title: 'Local Economy',
      stat1: 'Land partnerships',
      stat2: 'Training and long-term sourcing'
    },
    {
      icon: '🍃',
      title: 'Biodiversity',
      stat1: 'Traceable restoration',
      stat2: 'Of endangered species habitats'
    }
  ]

  return (
    <section className="our-impact-section">
      <Container>
        <CommonHeading
          title={{ first: 'Our', second: 'Impact' }}
          subtitle="We don't just grow trees. We regenerate landscapes, livelihoods, and legacies."
          align="left"
        />
        <Row className="g-4">
          {impacts.map((impact, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="impact-card text-center">
                <Card.Body>
                  <div className="impact-icon">{impact.icon}</div>
                  <Card.Title className="impact-title">{impact.title}</Card.Title>
                  <div className="impact-key-phrase">{impact.stat1}</div>
                  <Card.Text className="impact-description">{impact.stat2}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default OurImpact
