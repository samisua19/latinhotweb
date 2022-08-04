import React from 'react'
import { Row, Col, Card, Container, Button, Image } from 'react-bootstrap'

export default () => {
    
  return (
    <Container>
    <Row xs={1} md={4} className="g-2">
      {Array.from({ length: 20 }).map((_, idx) => (
        <Col>
          <Card className="cardGirl">
            <Card.Header>
              <Card.Title className="cardHeader">Mia Marin</Card.Title>
            </Card.Header>
            <Card.Img
              variant="top"
              src="https://cdmx.com/wp-content/uploads/2018/06/mia-marin-65345.jpg"
            />
            <div className="d-grid gap-2">
              <Button variant="danger" type="button">Ver</Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  )
}
