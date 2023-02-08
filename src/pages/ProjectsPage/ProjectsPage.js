import { useState } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import StarLine from "../../components/StarLine";
import Portfolio from "../../components/Portfolio";
import ModalOverlay from "../../components/Modal";
import { motion } from "framer-motion";

import classes from "./ProjectsPage.module.css";

const ProjectsPage = () => {
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
      <Row className="w-75">
        <h1 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          Portfolio
        </h1>
      </Row>
      <StarLine />
      <Row className="w-75">
        <h2 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          Frontend
        </h2>
        <Portfolio
          openModal={openModalHandler}
          setModalData={setModalData}
          category="frontend"
        />
      </Row>
      <Row className="w-75">
        <h2 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          Backend
        </h2>
        <Portfolio
          openModal={openModalHandler}
          setModalData={setModalData}
          category="backend"
        />
      </Row>
      <Row className="w-75">
        <h2 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          Full-Stack
        </h2>
        <Portfolio
          openModal={openModalHandler}
          setModalData={setModalData}
          category="fullstack"
        />
      </Row>
      <Row className="w-75">
        <h2 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          Data Visualization
        </h2>
        <Portfolio
          openModal={openModalHandler}
          setModalData={setModalData}
          category="data visualization"
        />
      </Row>
      <Row className="w-75">
        <h2 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          Machine Learning
        </h2>
        <Portfolio
          openModal={openModalHandler}
          setModalData={setModalData}
          category="machine learning"
        />
      </Row>
      <Row className="w-75">
        <h2 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          Personal Projects
        </h2>
        <Portfolio
          openModal={openModalHandler}
          setModalData={setModalData}
          category="personal"
        />
      </Row>
    </motion.div>
  );
};

export default ProjectsPage;
