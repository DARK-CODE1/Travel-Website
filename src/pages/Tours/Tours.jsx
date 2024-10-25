import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Col, Container, Row } from 'react-bootstrap';
import { popularsData } from "../../utils/data";
import PopularCard from '../../components/Cards/PopularCard';

const Tours = () => {
  return (
    <>
      <Breadcrumbs title='Tours' pageName='Tours' />
      <div className="py-5 tour-list">
        <Container>
          <Row>
            <Col xl='3' lg='4' md='12' sm='12'></Col>
            <Col xl='9' lg='8' md='12' sm='12'>
              <Row>
                {popularsData.map((val, index) => {
                  return (
                    <Col xs={12} sm={6} md={6} lg={6} xl={4}className='mb-3' key={index}>
                      <PopularCard val={val} />
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Tours