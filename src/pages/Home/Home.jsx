import React from 'react'
import Banner from '../../components/Banner/Banner'
import AdvanceSearch from '../../components/AdvanceSearch/AdvanceSearch';
import Features from '../../components/Features/Features';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { destinationsData } from "../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';
import Populars from '../../components/Populars/Populars';
import Gallery from '../../components/Gallery/Gallery';

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <>
      <Banner />
      <AdvanceSearch />
      <Features />
      <section className="tours_section slick-slider">
        <Container>
          <Row>
            <Col md='12'>
              <div className="main_heading">
                <h1> Top Destination For Your Next Vacation </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md='12'>
              <Slider {...settings}>
                {destinationsData.map((destination, index) => {
                  return (
                    <div className="img-box" key={index}>
                      <Card>
                        <Card.Img variant="top" src={destination.image} className='img-fluid' alt={destination.name} />
                        <Card.Title>{destination.name}</Card.Title>
                        <span className="tours">{destination.tours}</span>
                      </Card>
                    </div>
                  )
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      <Populars />
      <section className="call_us">
        <Container>
          <Row className='align-items-center'>
            <Col md={8}>
              <h5 className="title">CALL TO ACTION</h5>
              <h2 className="heading">READY FOR UNFORGATABLE TRAVEL. REMEMBER US!</h2>
              <p className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
            </Col>
            <Col md={4} className='text-center mt-3 my-0'>
              <a href="tel:1324569875" className="secondary_btn bounce" rel="no">
                {" "}
                Contact Us !
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>
      <section className="gallery">
        <Container>
          <Row>
            <Col md='12'>
              <div className="main_heading mt-4">
                <h1> Photo Gallery </h1>
              </div>
            </Col>
          </Row>
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

export default Home