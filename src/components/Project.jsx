import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function ProjDisplay({ project }) {
  return (
    <Col xs={12} sm={9} md={4} lg={3} className="portfolio">
      <Card style={{ width: '18rem' }}>
        <div className="topLayer">
          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Button href={project.live} variant="secondary">
              Live App
            </Button>
            <Button href={project.gitHub} variant="secondary">
              GitHub
            </Button>
          </div>
        </div>
        <Card.Body className="cardCont">
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjDisplay;
