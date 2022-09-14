import { useState } from "react";
import "./cinemanavbar.css";
import "bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const Cinemanavbar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  
  return [false].map((expand) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  as={Link} to="/"className="d-inline-block">
          <img
            src="#"
            width="150rem"
            height="150rem"
            className="d-inline-block align-top"
            alt=" logo"
            as={Link} 
            to="/"
          />
          <h1 as={Link} to="/">QA CINEMA</h1>
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" />
      <Nav className="me-auto">
        
        <DropdownButton
          id="showingbutton"
          menuVariant="dark"
          title="SHOWING"
        >
          <Dropdown.Item id="dropone" as={Link} to="/NowShowing">
            NOW SHOWING
          </Dropdown.Item>
          <Dropdown.Item id="dropone" as={Link} to="/Upcoming">
            UPCOMING
          </Dropdown.Item>
          <Dropdown.Item id="dropone" as={Link} to="/MovieRating">
            FILM RATING
          </Dropdown.Item>
        </DropdownButton>

        <Nav.Link id="linkone" as={Link} to="/Booking" >
          BOOKING
        </Nav.Link>

        <Nav.Link  id="linkone"  as={Link} to="/AboutUs">
          ABOUT US
        </Nav.Link>

        <Nav.Link id="linkone" variant="primary" onClick={handleShow1} >
          GETTING HERE
        </Nav.Link>

        <Offcanvas show={show1} onHide={handleClose1}placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>GETTING HERE</Offcanvas.Title>
          </Offcanvas.Header>
          <Nav.Link id="canvas" onClick={handleClose1} as={Link} to="/Bus">
            BUS
          </Nav.Link>
          <Nav.Link id="canvas" onClick={handleClose1} as={Link} to="/Train">
            TRAIN
          </Nav.Link>
          <Nav.Link id="canvas"  onClick={handleClose1} as={Link} to="/Car">
            CAR
          </Nav.Link>
        </Offcanvas>

        <Nav.Link variant="primary" onClick={handleShow} className="me-2">
          GET IN TOUCH
        </Nav.Link>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>GET IN TOUCH</Offcanvas.Title>
          </Offcanvas.Header>
          <Nav.Link as={Link} to="/EmailForm" id="canvas" onClick={handleClose}>
            Email Us
          </Nav.Link>
          <Nav.Link id="canvas"as={Link} to="/Address" onClick={handleClose}>
            ADDRESS
          </Nav.Link>
          <Nav.Link  id="canvas"  as={Link} to="/AboutUs" onClick={handleClose}>
          ABOUT US
        </Nav.Link>
        </Offcanvas>
      </Nav>
    </Navbar>
  ));
};

export default Cinemanavbar;

