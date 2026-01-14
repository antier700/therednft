import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import CommonHeading from '../../../../components/CommonHeading/CommonHeading'
import './ContactUs.scss'

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <Container>
        <Row>
          <CommonHeading
            title="Contact Us:"
            align="left"
            className="mb-3"
          />
        </Row>
        <Row className="g-4">
          <Col lg={7}>
            <Card className="contact-form-card">
              <Card.Body>
                <Form>
                  <Row>
                    <Col lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your full name" />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="your@email.com" />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Tell us about your interest in Red Sandalwood investment..."
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Upload Screenshot</Form.Label>
                        <div className="upload-section">
                          <div className="upload-box">
                            <span className="upload-icon">📷</span>
                          </div>
                           <div className="upload-text-btn-container">
                           <p className="upload-text">Screenshot Picture</p>
                           <Button className="upload-btn">Choose File</Button>
                           </div>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button type="submit" className="send-message-btn">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5}>
            <Card className="affiliate-card">
              <Card.Body>
                <Card.Title className="affiliate-title">
                  Ready to be part of the future of sustainable investing?
                </Card.Title>
                <ul className="affiliate-list">
                  <li>Earn Up to 10% of the NFT value on every purchase made using your Affiliate code.</li>
                  <li>Register and Buy 1 NFT to become an Affiliate.</li>
                  <li>Your Affiliate code will reflect automatically in the User Dashboard.</li>
                </ul>
                <Button className="affiliate-btn">Buy Now to Become an Affiliate</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs
