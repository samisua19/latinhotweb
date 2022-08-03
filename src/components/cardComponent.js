import React from 'react'
import {Card} from 'react-bootstrap'
import {default as Title} from './titleComponent';
import FormGirlsComponent from './formGirlsComponent';
import { db } from '../database/firebase'
import { collection, addDoc } from "firebase/firestore";
export default() => {

  const createGirl = async (girl) => {
    try {
      const docRef = await addDoc(collection(db, "girls"), girl);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Card border="danger" style={{ width: '30rem' }} className='cardForm'>
        <Card.Header>
            <Title title={'Añadir Chica'}></Title>
        </Card.Header>
        <Card.Body>
            <FormGirlsComponent onSubmitForm={createGirl} />
        </Card.Body>
    </Card>
  )
}

