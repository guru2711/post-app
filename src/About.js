import React, { useState } from 'react';
import {Button,Offcanvas} from "react-bootstrap";
function About({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div >
        <>

        <br/>
      <Button variant="primary" size="sm" onClick={handleShow}>
        ABOUT ME
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ABOUT ME</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h2>Guru Prakash</h2>
        <h5>B.E in Mechatronics Engineer</h5>
        <h5>Web Developer</h5>
        </Offcanvas.Body>
      </Offcanvas>
    </>
        
      </div>
    );
  }
  
  export default About;