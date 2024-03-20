import React from "react";
import { Col, Row} from "react-bootstrap";



function NewsLetters() {
  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newletter</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={""}>
              <div className="new-email-bx">
                <input type="email" placeholder="Email Address"></input>
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default NewsLetters;
