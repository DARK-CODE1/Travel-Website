import React, { useEffect } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Col, Container, Row } from 'react-bootstrap';
import { destinationsData } from "../../utils/data";
import Cards from '../../components/Cards/Cards';

const Destinations = () => {
  useEffect(() => {
    document.title = 'Destinations'
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <Breadcrumbs title='Destinations' pageName='Destinations' />

      <section className="py-5">
        <Container>
          <Row>
            {destinationsData.map((destination, index) => {
              return (
                <Col md='3' sm='6' key={index} className='pb-4'>
                  <Cards destination={destination} key={index} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Destinations