import React from 'react'
import {Card} from 'react-bootstrap'
import {default as Title} from './titleComponent';
import FormGirlsComponent from './formGirlsComponent';
export default() => {
  return (
    <Card border="danger" style={{ width: '30rem' }} className='cardForm'>
        <Card.Header>
            <Title title={'Añadir Chica'}></Title>
        </Card.Header>
        <Card.Body>
            <FormGirlsComponent/>
        </Card.Body>
    </Card>
  )
}

