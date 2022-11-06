import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
import { collection, onSnapshot } from "firebase/firestore";
import { db, storage } from "../database/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import direction from "../direction.png";
import ImageComponent from "./imageComponent";

const TableGirlsComponent = () => {
  const [girls, setGirls] = useState([]);

  const getPrincipalPhoto = async (url) => {
    return await getDownloadURL(ref(storage, url));
  };

  useEffect(() => {
    const addParseObjet = async (querySnapshot) => {
      const arrGirls = [];
      querySnapshot.forEach(async (doc) => {
        const sortPhotos = doc
          .data()
          .photos.sort((a$, b$) => b$.lastModified - a$.lastModified);
        if (sortPhotos && sortPhotos[0]) {
          const pathPhoto = doc.data().name + "/" + sortPhotos[0].path;
          const urlPrincipalPhoto = await getPrincipalPhoto(pathPhoto);
          arrGirls.push({
            ...doc.data(),
            id: doc.id,
            principalPhoto: urlPrincipalPhoto,
          });
        }
      });
      return arrGirls;
    };
    const getGirls = async () => {
      onSnapshot(collection(db, "girls"), async (querySnapshot) => {
        const newArrGirls = await addParseObjet(querySnapshot);
        setTimeout(() => {
          setGirls(newArrGirls.filter((rsp) => rsp.active));
        }, 1000);
      });
    };
    getGirls();
  }, []);

  return (
    <Container>
      <Row xs={1} md={3}>
        {Object.values(girls)
          .sort(($a, $b) => $b.lastModified - $a.lastModified)
          .map((_, idx) => {
            return (
              <Col key={_.id}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Card className="cardGirl">
                    <Card.Header>
                      <div className="titleDirection">
                        <div className="iconDirection" style={{display: 'flex', flexDirection: 'row'}}>
                          <Card.Title className="cardHeader">
                            {_.name}
                          </Card.Title>
                          <span>
                            <Image src={direction}></Image>
                          </span>
                          <h5 className="textDirection">{_.direction}</h5>
                        </div>
                        <div className="divPhotos">
                          <h5 className="numPhotos">{_.photos.length}</h5>
                        </div>
                      </div>
                      <div className="direction">
                        <div>
                          <h6 className="comments">
                            {_.comments ? _.comments : "Sin comentarios"}
                          </h6>
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body style={{padding:{}}}>
                      <div>
                        <ImageComponent photo={_.principalPhoto} id={_.id} />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default TableGirlsComponent;
