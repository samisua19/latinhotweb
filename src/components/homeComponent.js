import React, {useEffect} from 'react'
import {default as NavbarComponent } from './navbarComponent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default (props) => {
  return (
    <>
        <NavbarComponent hideModal={props.hideModal} route={props.routeButton} titleButton={props.titleButton}></NavbarComponent>
        <div className="page-container">
          <div className="content-wrap">
            <div className="formRow">
                {props.children}
            </div>
          </div>
        </div>
      <ToastContainer></ToastContainer>
    </>
  )
}
