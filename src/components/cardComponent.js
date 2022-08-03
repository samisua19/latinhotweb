import React from 'react'
import {Card} from 'react-bootstrap'
import {default as Title} from './titleComponent';
import FormGirlsComponent from './formGirlsComponent';
import { db, storage } from '../database/firebase'
import { ref } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes } from "firebase/storage";
export default() => {
  const createGirl = async (girl) => {
    console.log(girl)
    /* try {
      const docRef = await addDoc(collection(db, "girls"), girl);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } */
  }

  const uploadPhotos = async (photos) =>{
    const storageRef = ref(storage,'photosGirls/' + photos.name);
    uploadBytes(storageRef, photos).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    });
  }

  return (
    <Card border="danger" style={{ width: '30rem' }} className='cardForm'>
        <Card.Header>
            <Title title={'Añadir Chica'}></Title>
        </Card.Header>
        <Card.Body>
            <FormGirlsComponent onSubmitForm={createGirl} uploadPhotos={uploadPhotos} />
        </Card.Body>
    </Card>
  )
}

