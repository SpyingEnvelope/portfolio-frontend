import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import classes from './StarLine.module.css';

const StarLine = (props) => {
  return (
    <Row style={{ width: "80%" }}>
      <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
        <hr className={classes["hr-lines-left"]} style={{border: `3px solid ${props.color ? props.color : 'gray' }`}}/>
      </Col>
      <Col style={{ textAlign: "center" }}>
        <FontAwesomeIcon icon={faStar} style={{ paddingTop: 10 }} />
      </Col>
      <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
        <hr className={classes["hr-lines"]} style={{border: `3px solid ${props.color ? props.color : 'gray'}`}} />
      </Col>
    </Row>
  );
};

export default StarLine;
