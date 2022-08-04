import {default as Title} from './titleComponent';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Title title={'Latin hot web'}></Title>
          <Link to={props.route}><Button variant="danger">{props.titleButton}</Button></Link>
        </Container>
      </Navbar>
    </>
  );
}
