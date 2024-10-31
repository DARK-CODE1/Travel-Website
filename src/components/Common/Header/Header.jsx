import React, { useState } from 'react'
import { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
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

  const closeMenu = () => {
    if (window.innerWidth <= 991) {
      setOpen(false)
    }
  }
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
                <NavLink className='nav-link' to='/' onClick={closeMenu}>HOME</NavLink>
                <NavLink className='nav-link' to='about' onClick={closeMenu}>ABOUT US</NavLink>
                <NavLink className='nav-link' to='tours' onClick={closeMenu}>TOURS</NavLink>

                <NavDropdown
                  title="DESTINATION"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>
                    SPAIN TOURS
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>
                    ITALY TOURS
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>
                    FRANCE TOURS
                  </NavLink>

                </NavDropdown>
                <NavLink className='nav-link' to='photo-gallery' onClick={closeMenu}>GALLERY</NavLink>
                <NavLink className='nav-link' to='contact-us' onClick={closeMenu}>CONTACT</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-md-4 ms-2">
            <NavLink className='primaryBtn d-none d-sm-inline-block' to='booking' onClick={closeMenu}>Book Now</NavLink>
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