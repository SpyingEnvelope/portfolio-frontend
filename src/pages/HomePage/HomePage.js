import { useState } from "react";

import { Container, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "../../components/Portfolio";
import TopHeader from "../../components/TopHeader";
import ModalOverlay from "../../components/Modal";
import StarLine from "../../components/StarLine";

import classes from "./HomePage.module.css";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <motion.div
      className={`${classes["no-padding"]} d-flex flex-column text-center`}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.5 } }}
    >
      {openModal && (
        <ModalOverlay
          closed={closeModalHandler}
          data={modalData}
          show={openModal}
        />
      )}
      <TopHeader />
      <Container
        fluid
        className={`${classes["no-padding"]} d-flex flex-column`}
        style={{ padding: 0 }}
      >
        <Row>
          <Col>
            <h1
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                fontWeight: "bold",
              }}
            >
              A little bit about me
            </h1>
          </Col>
        </Row>
        <StarLine />
        <Row className="w-75">
          <Col style={{ textAlign: "center" }}>
            <p
              style={{
                opacity: 1,
              }}
            >
              My name is Gad Cooper and I am a self-taught, full-stack
              developer! <br></br> Here are some of the frameworks, libaries and
              languages I've learned about and worked with over the years:
            </p>
          </Col>
        </Row>
        <Row className="w-75 justify-content-center">
          <Col md={4} xs={6} sm={4} lg={3} xl={2}>
            <ul className={classes.myul}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>D3.js</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB and Mongoose</li>
            </ul>
          </Col>
          <Col md={4} xs={6} sm={4} lg={2} xl={1}>
            <ul className={classes.myul}>
              <li>SQLite 3</li>
              <li>Jest</li>
              <li>Chai.js</li>
              <li>Python</li>
              <li>Pygame</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
              <li>Jupyter Notebook</li>
              <li>Tensorflow</li>
              <li>Scikit Learn</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Row className="w-75">
        <h1 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          Portfolio
        </h1>
      </Row>
      <StarLine />
      <Portfolio
        openModal={openModalHandler}
        setModalData={setModalData}
        category="preview"
      />
    </motion.div>
  );
};

export default HomePage;
