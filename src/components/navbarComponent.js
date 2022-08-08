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
