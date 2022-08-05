import React from 'react'
import { Card } from 'react-bootstrap'
import { default as Title } from './titleComponent'
import FormGirlsComponent from './formGirlsComponent'
import { db, storage } from '../database/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { uploadBytes, ref } from 'firebase/storage'
export default () => {
  const createGirl = async (girl) => {
    try {
      girl.photos = await handleGirlsPhotos(girl.photos, girl.name)
      const docRef = await addDoc(collection(db, "girls"), girl);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const handleGirlsPhotos = async (photosGirls, nameGirl) => {
    let arrPhotos = []
    for (const photoGirls of photosGirls) {
      const date = new Date().valueOf()
      const blob = await uploadPhotos(photoGirls, nameGirl, date)
      arrPhotos.push({path: blob.metadata.name, createAt: date, lastModified: date})
    }
    return arrPhotos
  }

  const uploadPhotos = async (photo, nameGirl, date) => {
    const ext = photo.name.split('.')[1]
    const storageRef = ref(storage, nameGirl + '/' + date + '.' + ext)
    return await uploadBytes(storageRef, photo)
  }

  return (
    <>
      <Card border="danger" style={{ width: '30rem' }} className="cardForm">
        <Card.Header>
          <Title title={'Añadir Chica'}></Title>
        </Card.Header>
        <Card.Body>
          <FormGirlsComponent
            onSubmitForm={createGirl}
            uploadPhotos={uploadPhotos}
          />
        </Card.Body>
      </Card>
    </>
  )
}
