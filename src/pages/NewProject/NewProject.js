import { Fragment, useState, useContext, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StarLine from "../../components/StarLine";
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation";
import { ProjectsContext } from "../../store/projects-context";

const NewProject = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [techUsed, setTechUsed] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [imgFile, setImgFile] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = useContext(ProjectsContext).isLoggedIn;

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

    const formData = new FormData();
    formData.append("image", imgFile);
    formData.append("category", event.target.category.value);
    formData.append("name", event.target.name.value);
    formData.append("description", event.target.description.value);
    formData.append("techUsed", event.target.techUsed.value);
    formData.append("link", event.target.link.value);

    try {
      const responseData = await fetch(
        "https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/api/new-project",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!responseData.ok) {
        throw new Error('Failed to create new project')
      }

      const response = await responseData.json();

      if (response.error) {
        throw new Error('failed to save new project')
      }

      setError(false);
      setMessage(response.message);

      setCategory("");
      setDescription("");
      setName("");
      setTechUsed("");
      setProjectLink("");
    } catch (error) {
      setError('Failed to save new project');
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, []);

  return (
    <Fragment>
      <AdminNavigation />

      <Container
        fluid
        style={{ padding: 0, minHeight: "100vh" }}
        className="d-flex flex-column text-center justify-content-center align-items-center"
      >
        <h1>Add New Project</h1>
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
              type="file"
              required
              onChange={e => setImgFile(e.target.files[0])}
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

export default NewProject;
