import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ImageComponent = (props) => {
  return (
    <div style={{ }}>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <img src={props.photo} className="imageCardMod" style={{ borderRadius: "10px" }}>        
        </img>
      </div>
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
