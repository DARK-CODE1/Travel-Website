import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import './customdropdown.css';

const CustomDropdown = ({ label, options }) => {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleClick = (selectedVal) => {
    setSelectedValue(selectedVal)
  }
  return (
    <>
      <label className="item-search-lable">{label}</label>
      <Dropdown className='dropdown-custom' onSelect={handleClick}>
        <Dropdown.Toggle id="dropdown-custom-components">
          {selectedValue ? selectedValue : label}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Search..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {options.filter(
              (options) =>
                !value || options.toLowerCase().startsWith(value.toLowerCase()),
            ).map((option, index) => (
              <Dropdown.Item eventKey={option} key={index}>
                {option}
              </Dropdown.Item>
            ))
            }
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default CustomDropdown