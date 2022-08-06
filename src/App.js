import './App.css'
import React, { Suspense, lazy } from 'react';
import { HomeComponent, TableGirlsComponent } from './components'

function App() {
  return (
    <>
      <HomeComponent routeButton={'/latinhotweb/createGirl'} titleButton={'Crear Chica'}>
        <TableGirlsComponent></TableGirlsComponent>
      </HomeComponent>
    </>
  )
}

export default App