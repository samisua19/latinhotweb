import React from 'react'
import {default as NavbarComponent } from './navbarComponent'

export default (props) => {
  return (
    <>
        <NavbarComponent route={props.routeButton} titleButton={props.titleButton}></NavbarComponent>
        <div className="page-container">
          <div className="content-wrap">
            <div className="formRow">
                {props.children}
            </div>
          </div>
        </div>
    </>
  )
}
