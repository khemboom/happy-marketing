import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const OurApproach = ({ sectionRef }) => {
  const ref = useRef(null);

  useEffect(() => {
    sectionRef(ref);
  }, [sectionRef]);


  return (
    <div ref={ref} id="our-approach" className="our-aproach-section">
      <h1 className="titles">OUR APPROACH</h1>
      <Container>
        <Row>
          <Col md={6} lg={6} xl={3}>
            <Card className="m-auto">
              <Card.Body>
                <Card.Title>Collaboration</Card.Title>
                <Card.Text className="mt-4 card-approach">
                  We believe that the best results are achieved through teamwork and collaboration. 
                  We work closely with our clients, listening to their goals, understanding their vision, 
                  and developing customized strategies to meet their unique needs. Your success is our success, 
                  and we're committed to being your trusted partner throughout your digital marketing journey.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} xl={3}>
            <Card className="m-auto">
              <Card.Body>
                <Card.Title>Creativity</Card.Title>
                <Card.Text className="mt-4 card-approach">
                  We love to think outside the box and bring fresh and innovative ideas to the table. 
                  Our talented team of designers, writers, and strategists are always exploring new 
                  avenues to captivate your target audience and create memorable digital experiences. 
                  We believe that creativity has the power to make a real difference in your brand's online presence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} xl={3}>
            <Card className="m-auto">
              <Card.Body>
                <Card.Title>Transparency</Card.Title>
                <Card.Text className="mt-4 card-approach">
                  Building trust and maintaining open lines of communication are essential to us. 
                  We believe in being transparent and honest in our approach, keeping you informed every step of the way. 
                  From providing detailed reports to explaining our strategies, we want you to have a clear understanding 
                  of the work we're doing and the impact it's making on your business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} xl={3}>
            <Card className="m-auto">
              <Card.Body>
                <Card.Title>Results-Driven</Card.Title>
                <Card.Text className="mt-4 card-approach">
                  While happiness is at the core of our agency, we also understand the importance of delivering tangible results. 
                  We combine our creative flair with data-driven insights to develop strategies that maximize your ROI. 
                  Our goal is to help you achieve your business objectives and witness the growth and success you deserve.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default OurApproach;