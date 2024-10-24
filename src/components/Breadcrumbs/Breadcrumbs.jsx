import React from 'react';
import './Breadcrumbs.css';
import { Breadcrumb, Container, NavLink, Row } from 'react-bootstrap';

const Breadcrumbs = (props) => {
    return (
        <>
            <div className="inner-banner-wrap">
                <div className="inner-banner-container">
                    <Container>
                        <div className="inner-banner-content">
                            <h1 className='fs-1 text-white text-uppercase font-bold'> {props.title} </h1>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="navbar-link">
                <Container>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item active>
                                <NavLink className='nav-link' to='/'><i className="bi bi-house-door-fill me-1"></i> Home</NavLink>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default Breadcrumbs