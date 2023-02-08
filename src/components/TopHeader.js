import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlane  } from "@fortawesome/free-solid-svg-icons";

import StarLine from "./StarLine";

import classes from './TopHeader.module.css';

const TopHeader = () => {
    return (
        <Container
        fluid
        className={`${classes["no-padding"]} ${classes["bg-green"]} d-flex flex-column`}
        style={{padding: 0}}
      >
        <Row className={classes.topCircle}>
          <div className={classes.circle}>
            <FontAwesomeIcon
              icon={faPlane}
              className={classes.circleAirplane}
            />
          </div>
        </Row>
        <Row className={classes.h2row} style={{ paddingTop: 50 }}>
          <Col>
            <h2 className={`${classes.h2arial}`}>Gad Cooper</h2>
          </Col>
        </Row>
        <StarLine color={'white'} />
        <Row className={classes.h2row} style={{ paddingTop: 10 }}>
          <Col>
            <h3 className={classes.h3font}>Full-Stack Developer</h3>
          </Col>
        </Row>
      </Container>
    )
};

export default TopHeader;
