import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function footer() {
  return (
    <div>
        <footer >
            <Container fluid>
            <Row >
            <Col className="bg-primary text-white text-center py-4">
                Copyright &copy; E-cart by A.B.
            </Col>
            </Row>
        </Container>
        </footer>
    </div>
    

  )
}

export default footer