import React from "react";
import Container from "react-bootstrap/Container";
//for styling
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//this is for my picture to be used
import headShot from "../../assets/headShot.png";
import Image from "react-bootstrap/Image";

//this function is to display my about me info and picture
function AboutMe() {
  return (
    <Container>
      <Row className="aboutMePic  justify-content-center">
        <Col className="headShot">
          <Image src={headShot} id="headShot" />
        </Col>

        <Col className="aboutMeBio">
          <p id="aboutMe">
          As a full stack developer, with general managerial experience, I bring a fresh outlook when diving into this industury. I am passionate about bringing ideas and possibilities from thoughts to reality, through promblem solving and a zest for creativity.
          </p>
        </Col>
       
      </Row>
    </Container>
  );
}

export default AboutMe;
