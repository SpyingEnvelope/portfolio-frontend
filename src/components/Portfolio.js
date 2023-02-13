import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../store/projects-context";

import { Container, Row, Card, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import classes from "./Portfolio.module.css";

const Portfolio = (props) => {
  const projectsList = useContext(ProjectsContext).projects;
  const getProjects = useContext(ProjectsContext).getProjects;

  const modalOpenHandler = (data) => {
    props.setModalData(data);
    props.openModal();
  };

  useEffect(() => {
    getProjects();
  });

  if (projectsList.length === 0) {
    return (
      <Container
        className={`${classes["no-padding"]} d-flex flex-column`}
        style={{ paddingBottom: 10 }}
      >
        <Spinner animation="border" role="status"></Spinner>
      </Container>
    );
  }

  const projectsToDisplay = projectsList
    .filter((item) => item.category === props.category)
    
    .map((item) => (
      
      <Card
        style={{ width: "18rem", padding: 10, border: "none" }}
        key={item['_id']}
        onClick={() =>
          modalOpenHandler({
            category: item.category,
            name: item.name,
            description: item.description,
            techUsed: item.techUsed,
            image: item.image,
            link: item.link,
          })
        }
      >
        <Card.Img
          variant="top"
          src={item.image}
          className={classes.image}
          style={{ width: "268px", height: "160px" }}
        />
        <div
          className={`d-flex justify-content-center align-items-center ${classes.overlayPort}`}
        >
          <p>{item.name}</p>
        </div>
      </Card>
    ));

  return (
    <Container className={`${classes["no-padding"]} d-flex flex-column`}>
      <Row className="d-flex text-center justify-content-center">
        {projectsToDisplay}
      </Row>
      {props.category === "preview" && (
        <Row className={`d-flex text-end ${classes["w-70"]}`}>
          <Link
            to="/portfolio"
            className={classes.link}
            style={{ paddingBottom: 30 }}
          >
            Go to the portfolio page to see more{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Row>
      )}
    </Container>
  );
};

export default Portfolio;
