import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {title as Title} from './titleComponent';


function NavbarComponent() {
  return (
    <>
      <NavbarCollapse className='navbar'>
        <Title>Latin hot web</Title>
      </NavbarCollapse>
    </>
  );
}

export default NavbarComponent;