import logo from './logo.svg';
import './App.css';
import {Footer, NavbarComponent, CardComponent} from './components'

function App() {
  return (
    <> 
      <NavbarComponent></NavbarComponent>
      <div className="page-container">
        <div className="content-wrap">
          <div className='formRow'>
            <CardComponent>
            </CardComponent>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
