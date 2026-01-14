import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import CommonHeading from '../../../../components/CommonHeading/CommonHeading'
import cardBg1 from '../../../../assets/images/our_mission_card_bg.png'
import cardBg2 from '../../../../assets/images/our_mission_card_bg_2.png'
import './OurMission.scss'

const OurMission = () => {
  const pillars = [
    {
      title: 'Democratize Access to Heritage',
      description: 'Making rare Red Sandalwood investments accessible to everyone through Blockchain technology.',
      bgImage: cardBg1
    },
    {
      title: 'Honor Tradition Through Innovation',
      description: 'Preserving ancient wisdom while embracing modern sustainable practices.',
      bgImage: cardBg2
    },
    {
      title: 'Regenerate Ecosystems at Scale',
      description: 'Large-scale reforestation initiatives that restore biodiversity and capture carbon.',
      bgImage: cardBg2
    },
    {
      title: 'Empower Rural Communities',
      description: 'Creating sustainable livelihoods for farmers and local communities.',
      bgImage: cardBg2
    },
    {
      title: 'Establish Transparent Ownership',
      description: 'Blockchain-verified ownership and complete supply chain transparency.',
      bgImage: cardBg1
    },
    {
      title: 'Generate Predictable Prosperity',
      description: 'Creating stable, long-term returns through sustainable forestry investments.',
      bgImage: cardBg2
    },
    {
      title: 'Set the Standard for Legacy Investing',
      description: 'Pioneering the future of sustainable, impact-driven investment models.',
      bgImage: cardBg2
    }
  ]

  return (
    <section className="our-mission-section">
      <Container>
        <Row>
          <CommonHeading
            title={{ first: 'Our', second: 'Mission' }}
            subtitle="7 Pillars That Guide Our Journey"
            align="center"
          />
        </Row>
        <Row className="mission-pillars g-4">
          {pillars.map((pillar, index) => (
            <Col md={6} lg={4} xl={3} key={index}>
              <Card 
                className="pillar-card"
                style={{ backgroundImage: `url(${pillar.bgImage})` }}
              >
                <Card.Body>
                  <Card.Title className="pillar-title">{pillar.title}</Card.Title>
                  <Card.Text className="pillar-description">{pillar.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col md={6} lg={4} xl={3} className="journey-cta">
            <Card className="journey-card">
              <Card.Body>
                <Card.Title className="journey-title">Start Your Red Journey</Card.Title>
                <Button className="buy-now-btn">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurMission
