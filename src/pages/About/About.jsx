import React, { useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import aboutImg from "../../assets/images/about/aboutimg.png";
import { Card, Col, Container, Row } from 'react-bootstrap';
import './about.css';
import icon1 from "../../assets/images/icons/destination.png";
import icon2 from "../../assets/images/icons/best-price.png";
import icon3 from "../../assets/images/icons/quick.png";

const About = () => {

  useEffect(() => {
    document.title = 'About Us'
    window.scroll(0, 0)
  }, [])
  
  return (
    <>
      <Breadcrumbs title='About Us' pageName='About Us' />
      <section className="py-5">
        <Container>
          <Row>
            <Col md='8'>
              <div className="about-content">
                <div className="about-image position-relative">
                  <img src={aboutImg} alt="about" className="img-fluid rounded-5" />
                  <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm">
                    <h2 className="h2 fw-bold text-white">
                      HOW WE ARE BEST FOR TRAVEL !
                    </h2>
                  </div>
                </div>
              </div>
              <h2 className="h2 font-bold pb-2 pt-4">
                HOW WE ARE BEST FOR TRAVEL !
              </h2>
              <p className="body-text mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="body-text mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="body-text mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
            <Col md='4'>
              <Card className='border-0 shadow-sm rounded-3 mb-4'>
                <Card.Body className='text-center'>
                  <div className="d-flex justify-content-center align-item-search my-4">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 py-2">
                      <img src={icon1} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className='fw-bold h5'> 50+ Destinations</Card.Title>
                  <p className="mb-2 body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae deleniti.
                  </p>
                </Card.Body>
              </Card>

              <Card className='border-0 shadow-sm rounded-3 mb-4'>
                <Card.Body className='text-center'>
                  <div className="d-flex justify-content-center align-item-search my-4">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 py-2">
                      <img src={icon2} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className='fw-bold h5'> Best Price In The Industry </Card.Title>
                  <p className="mb-2 body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae deleniti.
                  </p>
                </Card.Body>
              </Card>

              <Card className='border-0 shadow-sm rounded-3 mb-4'>
                <Card.Body className='text-center'>
                  <div className="d-flex justify-content-center align-item-search my-4">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 py-2">
                      <img src={icon3} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className='fw-bold h5'> Super Fast Booking </Card.Title>
                  <p className="mb-2 body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae deleniti.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About