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
          {/* <div className="numbersWhatsapp">
            <Dropdown className="d-inline mx-2" autoClose="inside">
              <div className="divWhatsapp">
                <Dropdown.Toggle id="dropdown-autoclose-inside" variant="danger">
                      <span><Image src={whatsapp} className='iconWhatsapp'></Image>whatsapp</span>
                </Dropdown.Toggle>
              </div>
              <Dropdown.Menu>
                <Dropdown.Item href="https://wa.link/gybwz3">+1 (408) 639-1277</Dropdown.Item>
                <Dropdown.Item href="https://wa.link/84tgqw">+1 (669) 499-0487</Dropdown.Item>
                <Dropdown.Item href="https://wa.link/4drpk0">+1 (209) 450-4558</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
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
