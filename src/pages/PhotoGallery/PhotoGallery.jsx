import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Col, Container, Row } from 'react-bootstrap';
import Gallery from '../../components/Gallery/Gallery';

const PhotoGallery = () => {
  return (
    <>
      <Breadcrumbs title='PhotoGallery' pageName='PhotoGallery' />
      <section className="py-5" style={{overflow:'hidden'}}>
        <Container>
          <Row>
            <Col>
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default PhotoGallery