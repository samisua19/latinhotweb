import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export default (props) => {
  const newGirl = {
    name: '',
    direction: '',
    photos: [],
  }
  const formGirls = document.getElementById('formGirls');
  const [girl, setGirl] = useState(newGirl)
  const changeForm = (event) => {
    let {name, value} = event.target
    value = handleGirlsPhotos(event.target, name, value)
    setGirl({...girl, [name]: value})
  }

  const handleGirlsPhotos = (target, nameField, valueField) => {
    return (nameField == 'photos' && 
      Object.values(target.files) && 
      Object.values(target.files).length && 
      Object.values(target.files).length != 0) ? 
      Object.values(target.files) : valueField
  }

  const handleFormGirl = (event) => {
    event.preventDefault()
    const date = new Date().valueOf()
    props.onSubmitForm({...girl, createAt: date, lastModified: date })
    formGirls.reset()
  }

  return (
    <Form onSubmit={handleFormGirl} id="formGirls">
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
        <Form.Control name='photos' type="file" multiple onChange={changeForm}/>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="danger" type="submit">
          Guardar
        </Button>
      </div>
    </Form>
  )
}
