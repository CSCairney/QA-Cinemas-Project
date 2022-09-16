import { useState } from "react";
import "./cinemanavbar.css";
import "bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa";

const Cinemanavbar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return [false].map((expand) => (
    <Navbar collapseOnSelect expand="lg" id="bars" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/Home" className="d-inline-block">
          <img
            src="https://i.imgur.com/sSyKKMJ.png"
            width="300rem"
            height="200rem"
            className="d-inline-block align-top"
            alt=" logo"
            as={Link}
            to="/Home"
          />
        </Navbar.Brand>
      </Container>
      <Container id="box">
        
      <Nav.Link as={Link} to="/Search">
       <FaSearch class="searchicon"/>
      </Nav.Link>
       

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" />
        <Nav className="me-auto">

        
         
         

          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic" style={{color:"#FAD02C",backgroundColor:"#333652",borderStyle:"none",padding:"8px",fontSize:"x-large"}}>
              MOVIES
            </Dropdown.Toggle>
            <Dropdown.Menu style={{backgroundColor:"#333652",fontSize:"x-large"}}>
              <Dropdown.Item id="dropone" as={Link} to="/NowShowing">
                NOW SHOWING
              </Dropdown.Item>
              <Dropdown.Item id="dropone" as={Link} to="/Upcoming">
                UPCOMING
              </Dropdown.Item>
              <Dropdown.Item id="dropone" as={Link} to="/MovieRating">
                FILM RATING
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link style={{color:"#fad02c"}}id="linkone" as={Link} to="/Booking">
            BOOKING
          </Nav.Link>

          <Nav.Link style={{color:"#fad02c"}}id="linkone" as={Link} to="/Discussion">
            DISCUSSION
          </Nav.Link>
          <Nav.Link style={{color:"#fad02c"}}id="linkone" as={Link} to="/Visit">
            PLACES TO VISIT
          </Nav.Link>

          <Nav.Link style={{color:"#fad02c"}} id="linkone" variant="primary" onClick={handleShow1}>
            GETTING HERE
          </Nav.Link>

          <Offcanvas style={{backgroundColor:"#333652"}}show={show1} onHide={handleClose1} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{color:"#fad02c",fontSize:"x-large",display:"center"}}></Offcanvas.Title>
            </Offcanvas.Header>
            <Nav.Link  style={{color:"#fad02c",fontSize:"x-large",paddingLeft:"10rem",paddingTop:"2rem"}} id="canvas" onClick={handleClose1} as={Link} to="/Bus">
              Getting Here
            </Nav.Link>
            <Nav.Link style={{color:"#fad02c",fontSize:"x-large",paddingLeft:"10rem",paddingTop:"2rem"}}id="canvas" onClick={handleClose1} as={Link} to="/Train">
              
            </Nav.Link>
            <Nav.Link style={{color:"#fad02c",fontSize:"x-large",paddingLeft:"10rem",paddingTop:"2rem"}} id="canvas" onClick={handleClose1} as={Link} to="/Car">
            
            </Nav.Link>
          </Offcanvas>

          <Nav.Link style={{color:"#fad02c",fontSize:"x-large"}} variant="primary" onClick={handleShow} className="me-2">
            GET IN TOUCH
          </Nav.Link>
          <Offcanvas style={{backgroundColor:"#333652"}} show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{color:"#fad02c",fontSize:"x-large"}}>GET IN TOUCH</Offcanvas.Title>
            </Offcanvas.Header>
            <Nav.Link
            style={{color:"#fad02c",fontSize:"x-large",paddingLeft:"10rem",paddingTop:"2rem"}}
              as={Link}
              to="/EmailForm"
              id="canvas"
              onClick={handleClose}
            >
              EMAIL US
            </Nav.Link>
            <Nav.Link style={{color:"#fad02c",fontSize:"x-large",paddingLeft:"10rem",paddingTop:"2rem"}} id="canvas" as={Link} to="/Address" onClick={handleClose}>
              ADDRESS
            </Nav.Link>
            <Nav.Link style={{color:"#fad02c",fontSize:"x-large",paddingLeft:"10rem",paddingTop:"2rem"}} id="canvas" as={Link} to="/AboutUs" onClick={handleClose}>
              ABOUT US
            </Nav.Link>
          </Offcanvas>
        </Nav>
      </Container>
    </Navbar>
  ));
};

export default Cinemanavbar;
