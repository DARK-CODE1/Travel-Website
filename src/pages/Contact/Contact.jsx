import React, { useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Card, Col, Container, FloatingLabel, Form, ListGroup, Row } from 'react-bootstrap';
import image from "../../assets/images/about/contact-us.png";

const Contact = () => {

  useEffect(() => {
    document.title = 'Contact'
    window.scroll(0, 0)
  }, [])
  
  return (
    <>
      <Breadcrumbs title='Contact Us' pageName='Contact' />
      <section className="contact py-5">
        <Container>
          <Row>
            <Col md='12'>
              <h1 className="mb-2 h1 font-bold">Let's connect and get to konw each other</h1>
              <p className="body-text mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col md='6' lg='4' className='mb-4 mb-lg-0'>
              <Card className='border-0 shadow rounded-3 mb-4'>
                <Card.Body className='text-center'>
                  <div className="d-flex justify-content-center align-item-search my-4">
                    <div className="rounded-circle text-info bg-info shadow-sm bg-opacity-10 p-2">
                      <i className="bi bi-headset h1"></i>
                    </div>
                  </div>
                  <Card.Title className='fw-bold h5'>Call Us</Card.Title>
                  <p className="mb-3 body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae deleniti.
                  </p>
                  <div className="d-block justify-content-between">
                    <a href='#call' type='button' className='btn btn-light me-2 btn-sm'>
                      <i className="bi bi-phone me-1"></i>
                      +12 345 6789
                    </a>
                    <a href='#call' type='button' className='btn btn-light me-2 btn-sm'>
                      <i className="bi bi-telephone me-1"></i>
                      +12 987 4532
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md='6' lg='4' className='mb-4 mb-lg-0'>
              <Card className='border-0 shadow rounded-3 mb-4'>
                <Card.Body className='text-center'>
                  <div className="d-flex justify-content-center align-item-search my-4">
                    <div className="rounded-circle text-danger bg-danger shadow-sm bg-opacity-10 p-2">
                      <i className="bi bi-envelope h1"></i>
                    </div>
                  </div>
                  <Card.Title className='fw-bold h5'>Email</Card.Title>
                  <p className="mb-3 body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae deleniti.
                  </p>
                  <div className="d-block justify-content-between">


                    <a href="mailto:default@gmail.com" type='button' className='btn btn-light me-2 btn-sm'>
                      <i className="bi bi-envelope me-3"></i>
                      default@gmail.com
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md='12' lg='4' className='mb-4 mb-lg-0'>
              <Card className='border-0 shadow rounded-3 mb-4'>
                <Card.Body className='text-center'>
                  <div className="d-flex justify-content-center align-item-search my-4">
                    <div className="rounded-circle text-warning bg-warning shadow-sm bg-opacity-10 p-2">
                      <i className="bi bi-globe h1"></i>
                    </div>
                  </div>
                  <Card.Title className='fw-bold h5'>Email</Card.Title>
                  <p className="mb-3 body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae deleniti.
                  </p>
                  <div className="d-block">
                    <ListGroup horizontal className='justify-content-center'>
                      <ListGroup.Item className='border-0'><i className="bi bi-youtube"></i></ListGroup.Item>
                      <ListGroup.Item className='border-0'><i className="bi bi-facebook"></i></ListGroup.Item>
                      <ListGroup.Item className='border-0'><i className="bi bi-instagram"></i></ListGroup.Item>
                      <ListGroup.Item className='border-0'><i className="bi bi-twitter-x"></i></ListGroup.Item>
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='py-5 align-items-center'>
            <Col md='6' xl='6' className='d-none d-md-block'>
              <img src={image} alt="" className="img-fluid me-3" />
            </Col>
            <Col md='6' xl='6' className='d-none d-md-block'>
              <Card className='bg-light p-4 border-0 shadow-sm'>
                <div className="form-box">
                  <h1 className="h3 font-bold mb-4">Send Us Message</h1>
                  <Form>
                    <Row>
                      <Col md='6'>
                        <FloatingLabel controlId="name" label="Full Name" className='mb-4'>
                          <Form.Control type="text" placeholder="Full Name" />
                        </FloatingLabel>
                      </Col>
                      <Col md='6'>
                        <FloatingLabel controlId="floatingInputGrid" label="Email address" className='mb-4'>
                          <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                      </Col>
                      <Col md='12'>
                        <FloatingLabel controlId="floatingInputGrid" label="Phone Number" className='mb-4'>
                          <Form.Control type="text" placeholder="Phone Number" />
                        </FloatingLabel>
                      </Col>
                      <Col md='12'>
                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '126px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <button className='primaryBtn mt-3' type='button'>Send Message</button>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact