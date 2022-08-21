import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, Button, Image } from "react-bootstrap";
import { collection, onSnapshot } from "firebase/firestore";
import { db, storage } from "../database/firebase";
import { getDownloadURL, ref } from "firebase/storage";

function TableGirlComponent(props) {

  const activeOrInactiveGirl = async (girl) => {
    const lastModified = new Date().valueOf()
    await props.updateGirlInBD(girl.id, { ...girl, lastModified, active: !girl.active })
    props.getGirls()
  }

  useEffect(() => {
    props.getGirls();
  }, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Comentarios</th>
          <th>Número de fotos</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(props.girls)
          .map((_, idx) => {
            return (
              <tr key={_.id}>
                <td>{_.name}</td>
                <td>{_.direction}</td>
                <td>{_.comments}</td>
                <td>{_.photos.length}</td>
                <td><Button onClick={async () => await activeOrInactiveGirl(_)}>{_.active ? 'Activa' : 'Inactiva'}</Button></td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default TableGirlComponent;
