import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Container, Button, Image } from 'react-bootstrap'
import { collection, doc, getDocs } from "firebase/firestore";
import { db, storage } from '../database/firebase'
import { getDownloadURL, ref } from 'firebase/storage'
import direction from '../direction.png';

export default () => {
  
  const [girls, setGirls] = useState([])

  const getGirls = async () => {
    getDocs(collection(db, "girls")).then(async (querySnapshot) => {
      const newArrGirls = await addParseObjet(querySnapshot)
      setTimeout(()=> {
        console.log(newArrGirls)
        setGirls(newArrGirls)
      }, 1000)
    })
    
  }

  const addParseObjet = async (querySnapshot) => {
    const arrGirls = []
    querySnapshot.forEach(async (doc) => {
      const sortPhotos = doc.data().photos.sort((a$, b$) => b$.lastModified - a$.lastModified)
      const pathPhoto = doc.data().name + '/' + sortPhotos[0].path
      const urlPrincipalPhoto = await getPrincipalPhoto(pathPhoto)
      arrGirls.push({...doc.data(), id: doc.id, principalPhoto: urlPrincipalPhoto})
    })
    return arrGirls
  }

  const getPrincipalPhoto = async (url) => {
    return await getDownloadURL(ref(storage, url))
  }

  useEffect(()=> {
    getGirls()
  },[])

  return (
    <Container>
    <Row xs={1} md={4} className="g-2">
      {Object.values(girls).map((_, idx) => {
        return (<Col key={_.id}>
          <Card className="cardGirl">
            <Card.Header>
              <div className='titleDirection'>
                <div className='iconDirection'>
                  <Card.Title className="cardHeader">{_.name}</Card.Title>
                </div>
                <div className='divPhotos'>
                  <h5 className='numPhotos'>{_.photos.length}</h5>
                </div>
              </div>
              
              <div className='direction'>
                <div className='iconDirection'>
                  <span><Image src={direction}></Image></span>
                </div>
                <div>
                  <h5 className='textDirection'>{_.direction}</h5>
                </div>
              </div>
            </Card.Header>
            <Card.Img
              className='images'
              variant="top"
              src={_.principalPhoto}
            />
            <div className="d-grid gap-2">
              <Button variant="danger" type="button">Ver</Button>
            </div>
          </Card>
        </Col>)}
      )}
    </Row>
  </Container>
  )
}
