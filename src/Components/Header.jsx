import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className='p-2 p-md-3'>
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm rounded">

        <Container fluid className="px-2 px-md-3 ">
          {/* brand logo and text */}
          <div className="d-flex align-items-center flex-shrink-0">
            <img
              alt="logo"
              src={logo}
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain"
              }}
            />
            <Navbar.Brand href="#home" className='ms-2 me-2'>

              <span className='fw-bold '>CareAxis.</span> <br /> <span style={{ fontSize: "12px" }} className='text-secondary'>HEALTH NETWORK</span>
            </Navbar.Brand>
          </div>

          {/* nav options */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto align-items-lg-center ">
              <Nav.Link href="#Findcare">Find Care</Nav.Link>
              <Nav.Link href="#CareAxis Works">How CareAxis Works </Nav.Link>
              <Nav.Link href="#Services">Services </Nav.Link>
              <Nav.Link href="#Review">International Patients </Nav.Link>
              <Nav.Link href="#Providers">For Providers </Nav.Link>



            </Nav>
            {/* buttons */}
            <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2 mt-3 mt-lg-0  ">
              <Button className=' fw-bold' variant="outline-secondary">
                Log in
              </Button>
              <Button style={{ backgroundColor: "#087e7c", borderColor: "#087e7c", fontWeight: "bold" }}>Book Now</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header


