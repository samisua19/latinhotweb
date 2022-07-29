import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Nombre de la chica</Form.Label>
        <Form.Control type="email" placeholder="Nombre de la chica" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Dirección</Form.Label>
        <Form.Control type="email" placeholder="Dirección" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label className="text-muted">Añadir Imagenes</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Button variant="danger" type="submit">
        Guardar
      </Button>
    </Form>
  )
}
