import React from 'react';
import './Populars.css';
import { Col, Container, Row } from 'react-bootstrap';
import { popularsData } from "../../utils/data";
import PopularCard from '../Cards/PopularCard';

const Populars = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col md='12'>
                        <div className="main_heading">
                            <h1> Popular Activities </h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {popularsData.map((val, index) => {
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} className='mb-3' key={index}>
                                <PopularCard val={val} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Populars