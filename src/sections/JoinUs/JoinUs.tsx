import { Container, Row, Col, Button } from 'react-bootstrap'
import CommonHeading from '../../components/CommonHeading/CommonHeading'
import './JoinUs.scss'

const JoinUs = () => {
  return (
    <section className="join-us-section">
      <Container>
        <Row>
          <Col className="text-center">
            <CommonHeading
              title={
                <>
                  Join Us in Building <span>the Future</span>
                </>
              }
              subtitle="The journey from rare timber to rare wealth begins with a single decision."
              align="center"
              variant="large"
              className="mb-4"
            />
            <Button className="buy-now-btn">Buy Now</Button>
            <p className="cta-text">Contact Us for special pre-launch price and Bulk order discounts.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default JoinUs
