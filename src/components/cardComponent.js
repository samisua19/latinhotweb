import React, {useState} from 'react'
import { Card, ToastContainer } from 'react-bootstrap'
import { default as Title } from './titleComponent'
import FormGirlsComponent from './formGirlsComponent'
import { db, storage } from '../database/firebase'
import { collection, addDoc, query, where, getDocs, setDoc, doc } from 'firebase/firestore'
import { uploadBytes, ref } from 'firebase/storage'
import { toast } from 'react-toastify'
export default () => {

  const createGirl = async (girl) => {
    try {
      const q = query(collection(db, "girls"), where("name", "==", girl.name), where("direction", "==", girl.direction))
      const querySnapshot = await getDocs(q).then(async (rsp) => {
        (rsp && rsp.empty) ? await saveGirl(girl) : updateGirl(rsp,girl)
      })      
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const saveGirl = async (girl) => {
    girl.photos = await handleGirlsPhotos(girl.photos, girl.name)
    await addDoc(collection(db, "girls"), girl)
    toast('Chica creada',{
      type: 'success',
      autoClose: 2000
    })
  }

  const updateGirl = async (oldGirl,newGirl) => {
    oldGirl.forEach(async (rsp) => {
      const newPhotos = await handleGirlsPhotos(newGirl.photos, rsp.data().name)
      rsp.data().photos.forEach((photo) => {
        newPhotos.push(photo)
      })
      await setDoc(doc(db, "girls", oldGirl.docs[0].id), {...newGirl, photos: newPhotos, lastModified: new Date().valueOf()})
      toast('Chica actualizada',{
        type: 'success',
        autoClose: 2000
      }) 
    })
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
