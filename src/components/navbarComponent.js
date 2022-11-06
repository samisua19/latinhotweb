import { default as Title } from "./titleComponent";
import { Button, Container, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalComponent from "./modalComponent";
import whatsapp from "../whatsapp.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default (props) => {
  const redirectLinkWha = (url) => {
    window.open(url);
  };

  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Title title={"Latin hot web"}></Title>
          <div>
              <Image src={process.env.PUBLIC_URL + whatsapp} height={20} style={{marginRight:'5px'}}></Image>
              <a href="https://walink.co/5a9621" style={{textDecoration: 'none'}}>(408) 639-1277</a>
          </div>
          <div hidden={!props.hideModal}>
            <ModalComponent />
          </div>
          <div hidden={props.hideModal}>
            
            <Link to={props.route}>
              <Button variant="danger">{props.titleButton}</Button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
