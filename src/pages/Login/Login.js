import { useState, useContext, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StarLine from "../../components/StarLine";
import { ProjectsContext } from "../../store/projects-context";

const Login = () => {
  const [error, setError] = useState(false);
  const loggedIn = useContext(ProjectsContext).isLoggedIn;
  const loginHandler = useContext(ProjectsContext).loginHandler;
  const navigate = useNavigate();

  if (loggedIn) {
    navigate("/admin/projects");
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const loginBody = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    const request = await fetch("https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginBody),
    });

    const response = await request.json();

    console.log(response);

    if (response.error) {
      setError(response.error);
      return;
    }

    localStorage.setItem("token", response.token);
    loginHandler(true);
    navigate("/admin/projects");
  };

  const tokenChecker = async() => {
    const token = localStorage.getItem('token');

    if (!token) {
      return
    }

    const dataBody = {token}

    try {
      const response = await fetch('https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/api/check-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
      });

      if (!response.ok) {
        throw new Error('An error has occured')
      }

      const responseData = await response.json();

      if (responseData.error) {
        setError('Invalid Token')
      };

      loginHandler(true);
      navigate("/admin/projects");
    } catch (error) {
      console.log(error);
      return
    }
  }

  useEffect(() => {
    tokenChecker();
  }, [])

  return (
    <Container
      className="d-flex flex-column text-center justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 style={{ fontWeight: "bold" }}>Login</h1>
      <StarLine />
      {error && <p>{error}</p>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group controlId="password" style={{ paddingBottom: 20 }}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
