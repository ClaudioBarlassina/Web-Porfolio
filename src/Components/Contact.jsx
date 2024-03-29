import React from "react";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    LastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [ButtonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  
    const handleSubmit = async( e) => {
        e.preventDefault();
        setButtonText("Sending...")
       
    }
    
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="aling-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={e => onFormUpdate("firstName", e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.LastName}
                    placeholder="Last Name"
                    onChange={e => onFormUpdate("firstName", e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={e => onFormUpdate("email", e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={e => onFormUpdate("phone", e.target.value)}
                  ></input>
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={e => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{ButtonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={status.success === false ? "danger" : "success"}
                    >
                      {" "}
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
