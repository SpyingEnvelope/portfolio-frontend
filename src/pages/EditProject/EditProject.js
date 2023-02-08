import { Fragment, useState, useContext, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import StarLine from "../../components/StarLine";
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation";
import { ProjectsContext } from "../../store/projects-context";

const EditProject = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [techUsed, setTechUsed] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [projectLink, setProjectLink] = useState("");

  const navigate = useNavigate();
  const isLoggedIn = useContext(ProjectsContext).isLoggedIn;

  const { id } = useParams();

  const onChangeHandler = (event) => {
    if (event.target.id == "category") {
      setCategory(event.target.value);
      return;
    }
    if (event.target.id == "name") {
      setName(event.target.value);
      return;
    }
    if (event.target.id == "description") {
      setDescription(event.target.value);
      return;
    }
    if (event.target.id == "techUsed") {
      setTechUsed(event.target.value);
      return;
    }
    if (event.target.id == "image") {
      setImgLink(event.target.value);
      return;
    }
    if (event.target.id == "link") {
      setProjectLink(event.target.value);
      return;
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (event.target.category.value.length === 0) {
      setError("Category cannot be left empty");
      return;
    }
    if (event.target.name.value.length === 0) {
      setError("Name cannot be left empty");
      return;
    }
    if (event.target.description.value.length === 0) {
      setError("Description cannot be left empty");
      return;
    }
    if (event.target.techUsed.value.length === 0) {
      setError("Tech used cannot be left empty");
      return;
    }
    if (event.target.image.value.length === 0) {
      setError("Image cannot be left empty");
      return;
    }
    if (event.target.link.value.length === 0) {
      setError("Link cannot be left empty");
      return;
    }

    const requestBody = {
      category: event.target.category.value,
      name: event.target.name.value,
      description: event.target.description.value,
      techUsed: event.target.techUsed.value,
      image: event.target.image.value,
      link: event.target.link.value,
      id: id
    };

    try {
      const response = await fetch(
        "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/api/project/update-project",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error('request failed')
      }
      const responseData = await response.json();

      if (responseData.message) {
        navigate('/admin/projects');
      }

      if (responseData.error) {
        throw new Error(responseData.error)
      }
    } catch (error) {
        setError('Failed to retrieve project data. Are you sure ID is correct?');
    }
  };

  const retrieveProjectData = async () => {
    try {
      const response = await fetch("https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/api/project/" + id);
      const responseData = await response.json();
      if (responseData.error) {
        throw new Error(responseData.error);
      }
      setCategory(responseData.category);
      setName(responseData.name);
      setDescription(responseData.description);
      setTechUsed(responseData.techUsed);
      setImgLink(responseData.image);
      setProjectLink(responseData.link);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
    retrieveProjectData();
  }, []);

  if (category == "") {
    return <h1>Retrieving Data</h1>;
  }

  return (
    <Fragment>
      <AdminNavigation />

      <Container
        fluid
        style={{ padding: 0, minHeight: "100vh" }}
        className="d-flex flex-column text-center justify-content-center align-items-center"
      >
        <h1>Edit Existing Project</h1>
        <StarLine />
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              required
              value={category}
              onChange={onChangeHandler}
            />
            <Form.Text className="text-muted">
              Category options are: frontend, backend, fullstack, machine
              learning, data visualization, and personal
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              required
              value={name}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              type="text"
              required
              value={description}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group controlId="techUsed">
            <Form.Label>Tech Used</Form.Label>
            <Form.Control
              type="text"
              required
              value={techUsed}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image Name</Form.Label>
            <Form.Control
              type="text"
              required
              value={imgLink}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group controlId="link">
            <Form.Label>Link to project</Form.Label>
            <Form.Control
              type="text"
              required
              value={projectLink}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default EditProject;
