import { Fragment, useEffect, useState, useContext } from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StarLine from "../../components/StarLine";
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation";
import { ProjectsContext } from "../../store/projects-context";

import "./AdminProject.css";

const AdminProjects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = useContext(ProjectsContext).isLoggedIn;

  const getProjects = async () => {
    const response = await fetch(
      "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/api/portfolio-projects"
    );
    const data = await response.json();
    setProjectsList(data);
  };

  const deleteHandler = async (id) => {
    console.log(id);

    const deleteBody = { id: id };

    console.log(deleteBody);

    const response = await fetch("https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/api/delete-project", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteBody),
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);
    getProjects();
  };

  const editHandler = (id) => {
    navigate("/admin/projects/" + id);
  };

  const projectItems = projectsList.map((item) => (
    <li
      key={item["_id"]}
      className="w-75"
      style={{ border: "1px solid gray", paddingBottom: 40 }}
    >
      <h2>Name</h2>
      <p>{item.name}</p>
      <Image src={item.image} fluid style={{ padding: 10 }} />
      <h3>Category</h3>
      <p>{item.category}</p>
      <h3>Description</h3>
      <p>{item.description}</p>
      <h3>Tech Used</h3>
      <p>{item.techUsed}</p>
      <h3>Link to project</h3>
      <a href={item.link} target="_blank">
        Link
      </a>
      <br />

      <Button
        variant="primary"
        onClick={() => {
          editHandler(item["_id"]);
        }}
      >
        Edit Project
      </Button>
      <div style={{ padding: 10 }} />
      <Button
        variant="danger"
        onClick={() => {
          deleteHandler(item["_id"]);
        }}
      >
        Delete Project
      </Button>
    </li>
  ));

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
    getProjects();
  }, []);

  return (
    <Fragment>
      <AdminNavigation />
      <Container
        fluid
        style={{ padding: 0, minHeight: "100vh", width: "90%" }}
        className="d-flex flex-column text-center justify-content-center align-items-center"
      >
        <Row>
          <h1>Edit Projects</h1>
        </Row>
        <StarLine />
        <Row className="d-flex justify-content-center">
          <ul className="d-flex flex-column align-items-center remove-bullets">
            {projectItems}
          </ul>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AdminProjects;
