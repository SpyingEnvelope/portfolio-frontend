import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../store/projects-context";

import { Container, Row, Col, Card, CardGroup, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import StarLine from "./StarLine";

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
  }, []);

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

  // if (props.preview) {
  //   return (
  //     <Container
  //       className={`${classes["no-padding"]} d-flex flex-column`}
  //       style={{ padding: 0 }}
  //       fluid
  //     >
  //       <Row>
  //         <Col>
  //           <h1
  //             style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}
  //           >
  //             Portfolio
  //           </h1>
  //         </Col>
  //       </Row>
  //       <StarLine />
  //       <Row className="d-flex text-center justify-content-center">
  //         <Col>
  //           <CardGroup>
  //             <Card
  //               style={{ width: "18rem", padding: 10, border: "none" }}
  //               onClick={() =>
  //                 modalOpenHandler({
  //                   category: projectsList[0].category,
  //                   name: projectsList[0].name,
  //                   description: projectsList[0].description,
  //                   techUsed: projectsList[0].techUsed,
  //                   image: projectsList[0].image,
  //                   link: projectsList[0].link,
  //                 })
  //               }
  //             >
  //               <Card.Img
  //                 variant="top"
  //                 src={projectsList[0].image}
  //                 className={classes.image}
  //               />
  //               <div
  //                 className={`d-flex justify-content-center align-items-center ${classes.overlayPort}`}
  //               >
  //                 <p>{projectsList[0].name}</p>
  //               </div>
  //             </Card>
  //             <Card
  //               style={{ width: "18rem", padding: 10, border: "none" }}
  //               onClick={() =>
  //                 modalOpenHandler({
  //                   category: projectsList[1].category,
  //                   name: projectsList[1].name,
  //                   description: projectsList[1].description,
  //                   techUsed: projectsList[1].techUsed,
  //                   image: projectsList[1].image,
  //                   link: projectsList[1].link,
  //                 })
  //               }
  //             >
  //               <Card.Img
  //                 variant="top"
  //                 src={projectsList[1].image}
  //                 className={classes.image}
  //               />
  //               <div
  //                 className={`d-flex justify-content-center align-items-center ${classes.overlayPort}`}
  //               >
  //                 <p>{projectsList[1].name}</p>
  //               </div>
  //             </Card>
  //           </CardGroup>
  //         </Col>
  //       </Row>
  //       <Row className="d-flex text-center justify-content-center">
  //         <Col>
  //           <CardGroup>
  //             <Card
  //               style={{ width: "18rem", padding: 10, border: "none" }}
  //               onClick={() =>
  //                 modalOpenHandler({
  //                   category: projectsList[2].category,
  //                   name: projectsList[2].name,
  //                   description: projectsList[2].description,
  //                   techUsed: projectsList[2].techUsed,
  //                   image: projectsList[2].image,
  //                   link: projectsList[2].link,
  //                 })
  //               }
  //             >
  //               <Card.Img
  //                 variant="top"
  //                 src={projectsList[2].image}
  //                 className={classes.image}
  //               />
  //               <div
  //                 className={`d-flex justify-content-center align-items-center ${classes.overlayPort}`}
  //               >
  //                 <p>{projectsList[2].name}</p>
  //               </div>
  //             </Card>
  //             <Card
  //               style={{ width: "18rem", padding: 10, border: "none" }}
  //               onClick={() =>
  //                 modalOpenHandler({
  //                   category: projectsList[3].category,
  //                   name: projectsList[3].name,
  //                   description: projectsList[3].description,
  //                   techUsed: projectsList[3].techUsed,
  //                   image: projectsList[3].image,
  //                   link: projectsList[3].link,
  //                 })
  //               }
  //             >
  //               <Card.Img
  //                 variant="top"
  //                 src={projectsList[3].image}
  //                 className={classes.image}
  //               />
  //               <div
  //                 className={`d-flex justify-content-center align-items-center ${classes.overlayPort}`}
  //               >
  //                 <p>{projectsList[3].name}</p>
  //               </div>
  //             </Card>
  //           </CardGroup>
  //         </Col>
  //       </Row>
  // <Row className={`d-flex text-end ${classes["w-70"]}`}>
  //   <Link
  //     to="/portfolio"
  //     className={classes.link}
  //     style={{ paddingBottom: 30 }}
  //   >
  //     Go to the portfolio page to see more{" "}
  //     <FontAwesomeIcon icon={faArrowRight} />
  //   </Link>
  // </Row>
  //     </Container>
  //   );
  // }

  return (
    <Container className={`${classes["no-padding"]} d-flex flex-column`}>
      <Row className="d-flex text-center justify-content-center">
        {projectsToDisplay}
      </Row>
      {props.category == "preview" && (
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
