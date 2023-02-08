import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";

import "./Modal.css";

const ModalOverlay = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.closed}
      centered
      className="text-center"
    >
      <Modal.Header>
        <Container className="d-flex flex-column">
          <Modal.Title>
            <h2>{props.data.name}</h2>
          </Modal.Title>
          <Image src={props.data.image} rounded />
        </Container>
      </Modal.Header>
      <Modal.Body>
        <h3>Description</h3>
        {props.data.description}
        <h3 style={{ padding: 10 }}>Tech Used</h3>
        {props.data.techUsed}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closed} className="Button">
          Close
        </Button>
        <Button
          variant="success"
          href={props.data.link}
          target="_blank"
          className="Button"
        >
          Go to Project
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalOverlay;
