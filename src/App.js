import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const textStyle = { display: "block", marginRight: "5px" };

function Dashboard() {

  return (
    <Container >
      <Row>
        <Col sm={8}>
        <Card className="mt-3" style={{height:500}}>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Col>
        <Col sm={4}>
          <Card style={{height:500}} id="boxmain" className="mt-3 border-info" >
          <Card id="Box" >
            <Card.Body>
              <Card.Title>Task Tittle</Card.Title>
              <div className="info">
                <p>Date</p>
                <p>Time <b>2:00</b></p>
              </div>
              <Card.Text>
                status
              </Card.Text>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <p> Due Date</p>
              <div  className="button-container">
          <Button variant="primary" className="btnok1">Add Task</Button>
          <Button variant="primary"className="btnok" >Button 2</Button>
        </div>
            </Card.Body>
          </Card>
          </Card>
          </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
