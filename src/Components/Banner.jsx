import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerIng from "../assets/img/header-img.svg"

function Banner() {
  return (
      <section className='banner' id='home'>
          <Container>
              <Row className='aling-item-center'>
                  <Col xs={12} md={6} xl={7}>
                      <span className='tagline '> Welcome to mu Portfolio</span>
                      <h1>{"hi I'am webdecoded"}<span className='wrap'> WEB developer</span></h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non voluptates nam libero obcaecati? Odio laudantium fugiat dolore minima, voluptate expedita consectetur nobis, architecto officiis amet ut neque, hic repellat.</p>
                       <button onClick={() => console.log("connect")}> Let's connect <ArrowRightCircle size={25}/> </button> 
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                      <img src={headerIng} alt="Headder" />
                  </Col>

           </Row>
          
          </Container>  
          
    </section>
  )
}

export default Banner