import {default as Title} from './titleComponent';
import { Button, Container, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalComponent from './modalComponent';
import whatsapp from '../whatsapp.png';

export default (props) => {

  const redirectLinkWha = (url) => {
    window.open(url)
  }

  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Title title={'Latin hot web'}></Title>
          <div className='numbersWhatsapp'>
            <span><Image src={whatsapp} className='iconWhatsapp'></Image></span>
            <Button variant='link' onClick={e => redirectLinkWha('https://wa.link/gybwz3')}><p>+1 (408) 639-1277</p></Button>
            <Button variant='link' onClick={e => redirectLinkWha('https://wa.link/84tgqw')}><p>+1 (669) 499-0487</p></Button>
            <Button variant='link' onClick={e => redirectLinkWha('https://wa.link/4drpk0')}><p>+1 (209) 450-4558</p></Button>
          </div>
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
