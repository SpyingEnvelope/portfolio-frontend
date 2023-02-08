import { Row, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./ContactPage.module.css";
import StarLine from "../../components/StarLine";

const ContactPage = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [sentSuccesfully, setSentSuccesfully] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    setSending(true);

    const contactBody = {
      name: event.currentTarget.name.value,
      phone: event.currentTarget.phone.value,
      email: event.currentTarget.email.value,
      message: event.currentTarget.message.value,
    };

    try {
      const response = await fetch("https://portfolio-backend-nodejs-tfmxr.ondigitalocean.app/api/contact-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactBody),
      });

      if (!response.ok) {
        throw new Error("failed to send email");
      }

      const responseData = await response.json();

      if (responseData.error) {
        throw new Error("Failed to send email");
      }

      setSending(false);
      if (error) {
        setError(false);
      }
      setSentSuccesfully(true);
    } catch (error) {
      setSending(false);
      setError("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (sentSuccesfully) {
      navigate('/contact-me/successful')
    }
  },[sentSuccesfully])
  
  return (
    <motion.div
      className={`${classes["no-padding"]} d-flex flex-column text-center`}
      style={{ minHeight: "100vh" }}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.5 } }}
    >
      <Row>
        <h1 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          Contact Me
        </h1>
      </Row>
      <StarLine />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Row className="w-75">
        <p>
          Please fill out this form to get in touch with me. If you prefer a
          more direct way to contact me, please feel free to email me:
        </p>
        <p>
          <strong>Email:</strong> gad.cooper@shaw.ca
        </p>
      </Row>
      <Row
        className="justify-content-center w-75"
        style={{ paddingBottom: 20 }}
      >
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" className="text-center" required />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" className="text-center" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" className="text-center" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              type="textarea"
              className="text-center"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            style={{ width: "100px" }}
            disabled={sending}
          >
            {!sending && <>Submit</>}
            {sending && <>Sending...</>}
          </Button>
        </Form>
      </Row>
    </motion.div>
  );
};

export default ContactPage;
