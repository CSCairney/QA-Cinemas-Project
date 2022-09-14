import {useState} from "react";
import "./cinemanavbar.css";
import "bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Cinemanavbar/QAlogo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offcanvas from "react-bootstrap/Offcanvas";
import {Link} from 'react-router-dom';

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
        <Navbar.Brand href="#home" className="d-inline-block">
          <img
            src={Logo}
            width="150rem"
            height="150rem"
            className="d-inline-block align-top"
            alt=" logo"
          />{" "}
          <div />
          <h1>QA CINEMA</h1>
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" />
      <Nav className="me-auto">
        <DropdownButton
          id="dropdown-dark-example"
          menuVariant="dark"
          title="SHOWING"
        >
          <Dropdown.Item href="#/action-1">NOW SHOWING</Dropdown.Item>
          <Dropdown.Item href="#/action-2">UPCOMING</Dropdown.Item>
        </DropdownButton>

        <Nav.Link as={Link} to="/ContactUs" key="Booking">
          BOOKING
        </Nav.Link>

        <Nav.Link href="#w">ABOUT US</Nav.Link>

        <Nav.Link variant="primary" onClick={handleShow1} href="#e">
          GETTING HERE
        </Nav.Link>

        <Offcanvas show={show1} onHide={handleClose1}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>GETTING HERE</Offcanvas.Title>
          </Offcanvas.Header>
          <Nav.Link id="canvas" href="#email" onClick={handleClose1}>
            BUS
          </Nav.Link>
          <Nav.Link id="canvas" href="#booking" onClick={handleClose1}>
            TRAIN
          </Nav.Link>
          <Nav.Link id="canvas" href="#aboutus" onClick={handleClose1}>
            CAR
          </Nav.Link>
        </Offcanvas>

        <Nav.Link variant="primary" onClick={handleShow} className="me-2">
          GET IN TOUCH
        </Nav.Link>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>GET IN TOUCH</Offcanvas.Title>
          </Offcanvas.Header>
          <Nav.Link as={Link} to="/ContactUs" id="canvas" onClick={handleClose}>
            Email Us
          </Nav.Link>
          <Nav.Link id="canvas" href="#booking" onClick={handleClose}>
            BOOKING
          </Nav.Link>
          <Nav.Link id="canvas" href="#aboutus" onClick={handleClose}>
            ABOUT US
          </Nav.Link>
        </Offcanvas>
      </Nav>
    </Navbar>
  ));
};

export default Cinemanavbar;
//<div class="collapse navbar-collapse" id="navbarTogglerDemo03"></div>
