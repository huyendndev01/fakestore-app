import React from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Alert variant="danger" onClose={() => navigate("/")} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    </Container>
  );
};

export default NotFound;
