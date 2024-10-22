import React from 'react';
import './Populars.css';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { popularsData } from "../../utils/data";

const Populars = () => {
    return (
        <section className="populars">
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
                                <Card className='rounded-2 shadow-md'>
                                    <Card.Img variant="top" src={val.image} className='img-fluid' alt={'image'} />
                                    <Card.Body>
                                        <Card.Text>
                                            <i className="bi bi-geo-alt"></i>
                                            <span className="text">{val.location}</span>
                                        </Card.Text>
                                        <Card.Title>{val.title}</Card.Title>
                                        <p className='review'>
                                            <span>
                                                <i className="bi bi-star-fill"></i>
                                            </span>
                                            <span> {val.rating} </span>
                                            <span>({val.reviews} reviews)</span>
                                        </p>
                                        {val.category.map((cat, index) => {
                                            return (
                                                <span className={cat.replace(/ .*/, '') + " badge"} key={index}> {cat}</span>
                                            )
                                        })}
                                    </Card.Body>
                                    <Card.Footer className='py-2'>
                                        {val.afterDiscount ? <p className="text-decoration-line-through"> {val.price.toFixed(2)}</p> : ""}
                                        <Stack direction='horizontal' className='justify-content-between mt-2'>
                                            <p>From <b>{val.afterDiscount ? val.afterDiscount.toFixed(2) : val.price.toFixed(2)}</b></p>
                                            <p><i className="bi bi-clock"></i> {val.days}</p>
                                        </Stack>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Populars