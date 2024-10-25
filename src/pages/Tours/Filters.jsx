import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import { location, Categories, Duration, PriceRange, Ratings } from '../../utils/data';
import './tours.css';
const Filters = () => {
    return (
        <div className="side_bar">
            <div className="filter_box">

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Locations </Accordion.Header>
                        <Accordion.Body>
                            {location.map((location, index) => {
                                return <Form.Check key={index} type='checkbox' id={location} label={location} value={location} />
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Categories </Accordion.Header>
                        <Accordion.Body>
                            {Categories.map((category, index) => {
                                return <Form.Check key={index} type='checkbox' id={category} label={category} value={category} />
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Duration </Accordion.Header>
                        <Accordion.Body>
                            {Duration.map((days, index) => {
                                return <Form.Check key={index} type='checkbox' id={days} label={days} value={days} />
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Prices </Accordion.Header>
                        <Accordion.Body>
                            {PriceRange.map((price, index) => {
                                return <Form.Check key={index} type='checkbox' id={price} label={price} value={price} />
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ratings </Accordion.Header>
                        <Accordion.Body>
                            {Ratings.map((rating, index) => {
                                return <Form.Check key={index} type='checkbox' id={rating} label={rating} value={rating} />
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Filters