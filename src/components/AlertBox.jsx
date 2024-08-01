import React from "react";
import { Alert, Card, Container } from "react-bootstrap";

export const AlertBox = () => {
  return <div>
         
            <Container>
                <Card>
                <Alert variant="primary" dismissible show={false}>
                    <Alert.Heading>Heading</Alert.Heading>
                    <p>This is body</p>
                    <div>This is div</div>
                </Alert>
                </Card>
            </Container>
         
  </div>;
};
