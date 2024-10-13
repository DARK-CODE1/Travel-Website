import React, { useState } from 'react'
import { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {

  const [open, setOpen] = useState(false);

  const ToggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    }
  }, [])

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky')
  };
  return (
    <header className='header-section'>
      <Container>
        <Navbar expand='lg' className="p-0">
          {/* LOGO */}
          <Navbar.Brand>
            <NavLink to='/'>Weekendmonks</NavLink>
          </Navbar.Brand>

          <Navbar.Offcanvas show={open} id='offcanvasNavbar-expand-lg' aria-labelledby='offcanvasNavbarLabel-expand-lg' placement="start">
            <Offcanvas.Header>
              <h1 className='logo'>Weekendmonks</h1>
              <span className="navbar-toggler ms-auto" onClick={ToggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className='nav-link' to='/'>Home</NavLink>
                <NavLink className='nav-link' to='/'>ABOUT US</NavLink>
                <NavLink className='nav-link' to='/'>TOURS</NavLink>
                <NavDropdown title="DESTINATION" id='offcanvasNavbarDropdown-expand-lg'>
                  <NavDropdown.Item href="#action3">SPAIN TOURS</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">ITALY TOURS</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">FRANCE TOURS</NavDropdown.Item>
                </NavDropdown>
                <NavLink className='nav-link' to='/'>GALLERY</NavLink>
                <NavLink className='nav-link' to='/'>CONTACT</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-md-4 ms-2">
            <NavLink className='primaryBtn d-none d-sm-inline-block' to='/'>Book Now</NavLink>
            <div className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? 'bi bi-x-lg' : 'bi bi-list'} onClick={ToggleMenu}></i>
            </div>
          </div>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header