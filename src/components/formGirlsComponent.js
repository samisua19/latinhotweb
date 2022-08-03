import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export default (props) => {
  const newGirl = {
    name: '',
    direction: '',
    photos: [],
  }
  const [girl, setGirl] = useState(newGirl)
  const changeForm = (event) => {
    const {name, value} = event.target
    console.log(name, value);
    setGirl({...girl, [name]: value})
  }
  const handleFormGirl = (event) => {
    event.preventDefault()
    props.onSubmitForm(girl)
  }
  return (
    <Form onSubmit={handleFormGirl}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Nombre de la chica</Form.Label>
        <Form.Control name='name' type="text" placeholder="Nombre de la chica" onChange={changeForm} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Dirección</Form.Label>
        <Form.Control name='direction' type="text" placeholder="Dirección" onChange={changeForm} />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label className="text-muted">Añadir Imagenes</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="danger" type="submit">
          Guardar
        </Button>
      </div>
    </Form>
  )
}
