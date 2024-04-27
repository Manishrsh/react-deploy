import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Cardsbox';
import Projectsbox from './Projectsbox';
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    <>
      <Container fluid style={{ backgroundColor: 'black' }}>
        <Row>
          <Col md={6} sm={12} lg={8}>
            <Card />
          </Col>
          <Col md={6} sm={12} lg={4}>
            <Projectsbox/>
          </Col>
        </Row>
        <Row>
          <Col sm>      <Button variant="primary" className='mt-3 mb-3 ml-5' style={{width: "300px"}}>Add task</Button>  </Col>
          <Col sm><Button variant="primary" className='mt-3 mb-3' style={{width: "300px"}}>View task</Button> </Col>
          <Col sm></Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
