import React from 'react';
import './PopularCard.css';
import { Card, Stack } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const PopularCard = ({ val }) => {
  return (
    <>
      <Card className='rounded-2 shadow-md populars'>
        <Card.Img variant="top" src={val.image} className='img-fluid' alt={'image'} />
        <Card.Body>

          <Card.Text>
            <i className="bi bi-geo-alt"></i>
            <span className="text">{val.location}</span>
          </Card.Text>
          <Card.Title>
            <NavLink className="body-text text-dark text-decoration-none" to="/tour-details"> {val.title} </NavLink>
          </Card.Title>
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
    </>
  )
}

export default PopularCard