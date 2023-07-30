import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Pricing = () => {
  return (
    <div className="pricing-section">
      <Container>
        <Row>
          <Col md={{ span: 2}}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Pricing 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <span className="price">$50</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Pricing 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <span className="price">$100</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Pricing 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  <span className="price">$150</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Pricing;