import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
import { getDoc, doc } from "firebase/firestore";
import { db, storage } from "../database/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import direction from '../direction.png';

const ShowPhotosByGirl = () => {
  let { id } = useParams();

  const [girl, setGirl] = useState({});
  const [photosUrl, setPhotosUrl] = useState([]);
  const [showPhoto, setShowPhoto] = useState()

  useEffect(() => {
    const getGirl = async () => {
      const girl = await getDoc(doc(db, "girls", id));
      setGirl(girl.data());
      getPhotos(girl.data().photos, girl.data().name);
    };

    const getPhotos = async (photos, nameGirl) => {
      const arrUrlsPhotos = [];
      for (const photo of photos) {
        const pathPhoto = nameGirl + "/" + photo.path;
        const url = await getDownloadURL(ref(storage, pathPhoto));
        arrUrlsPhotos.push({url, createdAt: photo.createdAt});
      }
      setPhotosUrl(arrUrlsPhotos)
      if( arrUrlsPhotos && arrUrlsPhotos[0] && arrUrlsPhotos[0].url ) setShowPhoto(photosUrl[0].url)
    };

    getGirl();
  }, [id]);

  return (
    <Container>
      <div className="perfil">
        <div className="cardPerfil">
          <Image
            roundedCircle={true}
            className="imagesPerfil"
            variant="top"
            src={photosUrl && photosUrl[0] && photosUrl[0].url ? photosUrl[0].url : ""}
          />
        </div>
        <div>
          <h3 className="cardHeader">{girl.name}</h3>
          <div className="direction">
            <div className="iconDirection">
              <span>
                <Image src={direction}></Image>
              </span>
            </div>
            <div>
              <h5 className="textDirection">{girl.direction}</h5>
            </div>
          </div>
          <div className="direction">
            <div>
              <h6 className="comments">{girl.comments ? girl.comments : 'Sin comentarios'}</h6>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowX: 'auto', marginBottom: '10px', width: '100%', overflowY: 'hidden'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          {Object.values(photosUrl).sort(($a, $b) => $b.createdAt - $a.createdAt).map((_, idx) => (
            <div key={idx}>
              <Card className="cardGirl2">
                <Image variant="top" src={_.url} height={100} width={100} rounded={true} onClick={()=> setShowPhoto(_.url)}/>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', scrollX: 'auto'}}>
        <Image src={showPhoto ? showPhoto : ""} rounded={true} style={{width: '100%'}}></Image>
      </div>
    </Container>
  );
};

export default ShowPhotosByGirl
