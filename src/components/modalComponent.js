import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default () => {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();

  const changeForm = (event) => {
    setPass(event.target.value);
  };

  const handleFormGirl = (event) => {
    event.preventDefault();
    localStorage.setItem("pass", pass);
    const url = window.location.href
    return navigate("/createGirl")
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Crear Chica
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Autorización para crear</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormGirl} id="formGirls">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                required={true}
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={changeForm}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="danger" type="submit">
                Entrar
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
