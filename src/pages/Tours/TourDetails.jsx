import React from 'react';
import './tours.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import { tourDetails } from '../../utils/data';
import ImageGallery from "react-image-gallery";
import { Accordion, Card, Col, Container, ListGroup, Nav, Row, Stack, Tab } from 'react-bootstrap';
const TourDetails = () => {
  return (
    <>
      <Breadcrumbs title={tourDetails.title} childpageName={tourDetails.title} pageName=<NavLink to='/tours'>Tours</NavLink> />

      <section className="tour_details py-5">
        <Container>
          <Row>
            <h1 className="fs-2 font-bold mb-4">{tourDetails.title}</h1>
            <ImageGallery items={tourDetails.images} showNav={false} showBullets={false} showPlayButton={false} />

            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row className='py-5'>
                <Col sm={8} className='mb-3 mb-md-0'>
                  <Col sm={12}>
                    <Nav variant="pills" className="flex-row nav_bars rounded-2">
                      <Nav.Item>
                        <Nav.Link eventKey="1"> Overview </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2"> Itinerary </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3"> Inclusions & Exclusion </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="4"> Location </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Tab.Content className='my-4'>
                    <Tab.Pane eventKey="1">
                      <div className="tour_details">
                        <h1 className="font-bold mb-2 h3 border-bottom pb-2">Overview</h1>

                        <p className="body-text">{tourDetails.des}</p>

                        <h5 className="font-bold mb-2 h5 mt-3">Tour Info</h5>
                        <ListGroup>
                          {tourDetails.tourInfo.map((val, index) => {
                            return (
                              <ListGroup.Item key={index} className='border-0 pt-0' dangerouslySetInnerHTML={{ __html: val }}></ListGroup.Item>
                            )
                          })}
                        </ListGroup>
                        <h5 className="font-bold mb-2 h5 mt-3">High Lights</h5>
                        {tourDetails.highlights.map((val, index) => {
                          return (
                            <ListGroup.Item key={index} className='border-0 pt-0 body-text'> {val} </ListGroup.Item>
                          )
                        })}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <div className="tour_details">

                        <h1 className="font-bold mb-2 h3 border-bottom pb-2">Itinerary</h1>

                        <Accordion defaultActiveKey="0" className='mt-3'>
                          {tourDetails.itinerary.map((val, index) => {
                            return (
                              <Accordion.Item eventKey={index} key={index} className='mb-4'>
                                <Accordion.Header><h1 dangerouslySetInnerHTML={{ __html: val.title }}></h1></Accordion.Header>
                                <Accordion.Body className='body-text'>
                                  {val.des}
                                </Accordion.Body>
                              </Accordion.Item>
                            )
                          })}

                        </Accordion>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      <div className="tour_details">

                        <h1 className="font-bold mb-2 h3 border-bottom pb-2">Inclusions & Exclusion</h1>

                        <h5 className="font-bold mb-3 h5 mt-3">Inclusions</h5>
                        {tourDetails.included.map((val, index) => {
                          return (
                            <ListGroup.Item key={index} className='border-0 pt-0 body-text d-flex align-items-center'>
                              <i className="bi bi-check-lg me-2 h4 m-0 text-success"></i> {val}
                            </ListGroup.Item>
                          )
                        })}

                        <h5 className="font-bold mb-3 h5 mt-3">Exclusion</h5>
                        {tourDetails.exclusion.map((val, index) => {
                          return (
                            <ListGroup.Item key={index} className='border-0 pt-0 body-text d-flex align-items-center'>
                              <i className="bi bi-x-lg me-2 h5 m-0 text-danger "></i> {val}
                            </ListGroup.Item>
                          )
                        })}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="4">
                      <div className="tour_details">

                        <h1 className="font-bold mb-4 h3 border-bottom pb-2">Location</h1>

                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977180182!2d-79.2132468334419!3d43.71837095834633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2z2KrZiNix2YbYqtmI2Iwg2KfZhtiq2KfYsduM2YjYjCDaqdin2YbYp9iv2Kc!5e0!3m2!1sfa!2s!4v1730284376061!5m2!1sfa!2s"
                          width="100%" height="400" style={{ border: '0' }}
                          allowFullScreen="" loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>

                <Col sm={4}>
                  <aside>
                    <Card className='rounded-3 p-2 shadow-sm mb-4 price-info'>
                      <Card.Body>
                        <Stack gap={2} direction='horizontal'>
                          <h5 className="font-bold mb-0 h2">${tourDetails.price}</h5>

                          <span className="fs-4"> / Person</span>
                        </Stack>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <ListGroup horizontal>
                            <ListGroup.Item className='border-0 me-2 fw-bold'>{tourDetails.rating}</ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'><i className="bi bi-star-fill"></i></ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'><i className="bi bi-star-fill"></i></ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'><i className="bi bi-star-fill"></i></ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'><i className="bi bi-star-fill"></i></ListGroup.Item>
                            <ListGroup.Item className='border-0 me-1 text-warning'><i className="bi bi-star-half"></i></ListGroup.Item>
                          </ListGroup>

                          <h5 className="h6">( {tourDetails.reviews} )</h5>
                        </div>
                        <NavLink className='primaryBtn w-100 d-flex justify-content-center fw-bold'>
                          Book Now
                        </NavLink>
                      </Card.Body>
                    </Card>
                    <Card className='p-2 shadow-sm card-info'>
                      <Card.Body>
                        <h1 className="font-bold mb-2 h3">Need Help ?</h1>

                        <ListGroup>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-telephone me-1"></i>  Call us on : <strong>+91 123 456 789</strong>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-alarm me-1"></i> Timing : <strong>10AM to 7PM</strong>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <strong> <i className="bi bi-headset me-1"></i> Let us call you</strong>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0"><i className="bi bi-calendar-check me-1"></i> <strong> Book Appointments</strong> </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </aside>
                </Col>
              </Row>
            </Tab.Container>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails