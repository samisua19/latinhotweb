import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ImageComponent = (props) => {
  return (
    <div style={{ }}>
      <img src={props.photo} style={{ height: "300px", width:"316px", borderRadius: "10px" }}>
        
      </img>
      <div
        style={{
          zIndex: "3",
          marginTop:"-50px",
          paddingLeft: '7px',
          paddingRight: '7px'
        }}
      >
        <Link to={"/" + props.id} className="buttonShow">
          <div className="d-grid gap-2">
            <Button variant="danger" type="button">
              Ver
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImageComponent;
