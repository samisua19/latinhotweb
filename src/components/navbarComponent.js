import {default as Title} from './titleComponent';
import { Container, Navbar } from 'react-bootstrap';

export default () => {
  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Title title={'Latin hot web'}></Title>
        </Container>
      </Navbar>
    </>
  );
}
