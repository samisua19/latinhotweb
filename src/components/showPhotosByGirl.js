import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Container } from "react-bootstrap";
import { getDoc, doc } from "firebase/firestore";
import { db, storage } from '../database/firebase'
import { getDownloadURL, ref } from 'firebase/storage'

export default () => {
  let { id } = useParams();

  const [photosUrl, setPhotosUrl] = useState([])

  useEffect(() => {
    getGirl()
  }, [])

  const getGirl = async () => {
    const girl = await getDoc(doc(db, "girls", id))
    getPhotos(girl.data().photos, girl.data().name)
  }

  const getPhotos = async (photos, nameGirl) => {
    const arrUrlsPhotos = []
    for(const photo of photos){
        const pathPhoto = nameGirl + '/' + photo.path
        const url = await getDownloadURL(ref(storage, pathPhoto))
        arrUrlsPhotos.push(url)
    }
    setPhotosUrl(arrUrlsPhotos);
  }

  return (
    <Container>
      <Row xs={1} md={3} className="g-2">
        {Object.values(photosUrl).map((_, idx) => (
          <Col key={idx}>
            <Card className="cardGirl">
                <Card.Img className="images" variant="top" src={_} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
