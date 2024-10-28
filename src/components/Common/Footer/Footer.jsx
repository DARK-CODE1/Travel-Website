import React, { useState } from 'react';
import { Col, Container, ListGroup, NavLink, Row } from 'react-bootstrap';
import './footer.css'
const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scroolled = document.documentElement.scrollTop;
    if (scroolled > 300) {
      setVisible(true)
    } else if (scroolled <= 300) {
      setVisible(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible)

  }
  return (
    <>
      <footer className='p-5'>
        <Container className='mt-5'>
          <Row>
            <Col md='3' sm='12' className='quick_link mt-3 mt-md-0'>
              <h4 className="mt-lg-0 mt-sm-3">Company</h4>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <NavLink to="/">About Us</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">News</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">FAQ</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md='3' sm='12' className='quick_link mt-3 mt-md-0'>
              <h4 className="mt-lg-0 mt-sm-3">Explore</h4>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <NavLink to="/">About Us</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Tours List</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Destination</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md='3' sm='12' className='quick_link mt-3 mt-md-0'>
              <h4 className="mt-lg-0 mt-sm-3">Quick Link</h4>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <NavLink to="/">Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Tours</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">About Us</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md='3' sm='12' className='location mt-3 mt-md-0'>
              <h4 className="mt-lg-0 mt-sm-3">Contact Info</h4>
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt me-3"></i>
                <p className="pb-2"> Dehradun, Uttarakhand, India</p>
              </div>
              <div className="d-flex align-items-top my-2">
                <i className="bi bi-envelope me-3"></i>
                <a target="_blank" rel="no noreferrer" href="mailto:default@gmail.com" className="d-block" > default@gmail.com</a>
              </div>
              <div className="d-flex align-items-top my-2">
                <i className="bi bi-telephone me-3"></i>
                <a target="_blank" rel="noreferrer" href="tel:9876543210" className="d-block" > 9876543210</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className={visible ? 'active':''} id='back-to-top' onClick={scrollTop}>
        <i className="bi bi-arrow-up"></i>
      </div>
    </>

  )
}

export default Footer