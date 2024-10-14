import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './search.css';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

const AdvanceSearch = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <section className="box-search-advance">
      <Container>
        <Row>
          <Col md={12} xs={12} >
            <div className="search-box">
              <div className="search-item">
                <CustomDropdown label='location'
                  options={[
                    "USA, Turkish",
                    "Tokyo, Japan",
                    "Sydney, Australia",
                    "Melbourne, Australia",
                    "Paris, France",
                  ]} />
              </div>
              <div className="search-item item-search-2">
                <label className="item-search-label"> Check In </label>
                <DatePicker selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd, MMMM, yyyy"
                />
              </div>
              <div className="search-item item-search-2">
                <label className="item-search-label"> Check Out </label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={endDate}
                  endDate={startDate}
                  dateFormat="dd, MMMM, yyyy"
                />
              </div>
              <div className="search-item">
                <CustomDropdown
                  label="Guest"
                  // onSelect={selectedGuest}
                  options={[
                    "2 adults, 1 children",
                    "	2 adults, 1 children",
                    "2 adults, 3 children",
                  ]} />
              </div>
              <div className="search-item">

              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AdvanceSearch