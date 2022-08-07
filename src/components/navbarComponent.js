import {default as Title} from './titleComponent';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalComponent from './modalComponent';

export default (props) => {
  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Title title={'Latin hot web'}></Title>
          <div hidden={!props.hideModal}>
            <ModalComponent/>
          </div>
          <div hidden={props.hideModal}>
            <Link to={props.route}><Button variant="danger" >{props.titleButton}</Button></Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
