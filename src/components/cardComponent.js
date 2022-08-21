import React, {useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { default as Title } from './titleComponent'
import FormGirlsComponent from './formGirlsComponent'
import { db, storage } from '../database/firebase'
import { collection, addDoc, query, where, getDocs, setDoc, doc, onSnapshot } from 'firebase/firestore'
import { uploadBytes, ref } from 'firebase/storage'
import { toast } from 'react-toastify'
import TableGirlComponent from './tableGirlComponent'

const CardComponent = () => {

  const createGirl = async (girl) => {
    try {
      const q = query(collection(db, "girls"), where("name", "==", girl.name), where("direction", "==", girl.direction))
      await getDocs(q).then(async (rsp) => {
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
      await updateGirlInBD(oldGirl.docs[0].id, {...newGirl, photos: newPhotos, lastModified: new Date().valueOf()})
    })
  }

  const updateGirlInBD = async (id, girl) => {
    await setDoc(doc(db, "girls", id), {...girl})
    toast('Chica actualizada',{
      type: 'success',
      autoClose: 2000
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

  const [girls, setGirls] = useState([]);

  const addParseObjet = async (querySnapshot) => {
    const arrGirls = [];
    querySnapshot.forEach(async (doc) => {
      arrGirls.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return arrGirls;
  };

  const getGirls = async () => {
    onSnapshot(collection(db, "girls"), async (querySnapshot) => {
      const newArrGirls = await addParseObjet(querySnapshot);
      setTimeout(() => {
        setGirls(
          newArrGirls
            .sort((a$, b$) => b$.lastModified - a$.lastModified)
        );
      }, 1000);
    });
  };

  return (
    <Container>
      <Row lg={12}>
      <Col lg={4} md={12} xs={12} className="divCardForm">
        <Card border="danger" style={{ width: '17rem' }} className="cardForm">
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
      </Col>
      <Col lg={8} md={12} xs={12}>
        <Container>
          <TableGirlComponent
                girls={girls}
                getGirls={getGirls}
                updateGirlInBD={updateGirlInBD}>
          </TableGirlComponent>
        </Container>
      </Col>
    </Row>
    </Container>
  )
}

export default CardComponent
