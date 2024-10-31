import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "./Booking.css";

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    document.title = 'Booking'
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <Breadcrumbs title='Booking' pageName='Booking' />
      <section className="booking-section py-5">
        <Container>
          <Row>
            <Col md='8' lg='8'>
              <div className="booking-form-wrap border rounded-3">
                <div className="form-title border-bottom px-4 py-3">
                  <h3 className="h4 font-bold m-0">Your Detsils</h3>
                </div>
                <Form className='p-4'>
                  <Row>
                    <Form.Group as={Col} md="6" controlId="firstname" className="mb-4">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First Name"
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="lastname" className="mb-4">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last Name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} controlId="phone" md='6'>
                      <Form.Label>Phone Numbers</Form.Label>
                      <Form.Control type="text" placeholder="+91** *** ****" />
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} controlId="checkin" md='6'>
                      <Form.Label className='d-block'>Check In</Form.Label>
                      <DatePicker selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd, MMMM, yyyy"
                        className='form-control w-100'
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" as={Col} controlId="checkin" md='6'>
                      <Form.Label className='d-block'>Check Out</Form.Label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={endDate}
                        endDate={startDate}
                        dateFormat="dd, MMMM, yyyy"
                        className='form-control w-100'
                      />
                    </Form.Group>
                    <Col md='12'><button className='primaryBtn'>Submit Now</button></Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md='4' lg='4'>
              <Card className='p-0 shadow card-info bg-white'>
                <Card.Header><h1 className="font-bold mt-2 h4">Price Summary</h1></Card.Header>
                <Card.Body className='pb-0'>
                  <ListGroup>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Base price</span>
                      <strong>$28,660</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Total Discount <span className='badge bg-danger'>10%</span></span>
                      <strong>$20</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Taxes & Fees</span>
                      <strong>$600</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between py-4'>
                  <span className='font-bold h5'>Payable Now</span>
                  <strong className='font-bold h5'>$28,660</strong>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Booking