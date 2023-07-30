import React from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_acw4e8o', 'template_s595yfg', e.target, '4qkkRGhvJICZrwu7q')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='contact-us-section'>
      <Container>
        <Row className='contact-us-row'>
          <Col className='pt-2 pb-2'>
            <div className='contact-details-form'>
              <Form onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Complete Name</Form.Label>
                  <Form.Control type="text" name="user_name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="email@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" name="message" placeholder='Message' rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" value="Send">Send</Button>
              </Form>
            </div>
          </Col>
          <Col>
            <ul className='mt-4'>
              <li className="text-white">
                Copyright{' '}
                <FontAwesomeIcon icon={faCopyright} />
                <span>{' '}2023 "Happy Digital Marketing Agency" All rights reserved</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
