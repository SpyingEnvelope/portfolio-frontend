import { Row, Button } from "react-bootstrap";

const CertButton = (props) => {
  return (
    <Row
      className="w-75 justify-content-center text-center"
      style={{ paddingBottom: 10 }}
    >
      <Button
        variant="dark"
        style={{ maxWidth: "300px" }}
        href={props.link}
        target="_blank"
      >
        {props.text}
      </Button>
    </Row>
  );
};

export default CertButton;
