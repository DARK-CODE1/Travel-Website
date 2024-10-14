import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from "../../assets/images/slider/1-1.png";
import sliderImg2 from "../../assets/images/slider/1-2.png";
import './banner.css'
const Banner = () => {

  return (
    <>
      <section className='slider'>
        <Carousel variant='dark'>
          <Carousel.Item>
            <img src={sliderImg1} alt="Frist Slider" className="d-block w-100" />
            <Carousel.Caption>
              <div className="slider-des">
                <h5 className="heading">JOURNEY TO <span>EXPLORE WORLD</span></h5>
                <p className="sub_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={sliderImg2} alt="Second Slider" className="d-block w-100" />
            <Carousel.Caption>
              <div className="slider-des">
                <h5 className="heading">BEAUTIFUL PLACE <span>TO VISIT</span></h5>
                <p className="sub_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  )
}

export default Banner