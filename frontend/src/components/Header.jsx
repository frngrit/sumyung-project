import { useState } from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HiOutlineHome,HiSearchCircle, HiShoppingCart } from "react-icons/hi";
import { GiNoodles } from "react-icons/gi";


function Header() {
  return (
    <>
      <Navbar bg='dark' variant = 'dark' expand='lg' >
        <Container>
            <Navbar.Brand as = {Link} to ='/'>
              <GiNoodles /> BabyFirstmeet
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link as = {Link} to ='/'>
                    <HiOutlineHome /> Home
                </Nav.Link>
                <Nav.Link as = {Link} to ='/order'>
                    <HiShoppingCart /> Order
                </Nav.Link>
                <Nav.Link as = {Link} to ='/track'>
                    <HiSearchCircle /> Track order
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header