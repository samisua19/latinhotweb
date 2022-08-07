import './App.css'
import React from 'react';
import { HomeComponent, TableGirlsComponent } from './components'

function App() {
  return (
    <>
      <HomeComponent hideModal={true} routeButton={'/createGirl'} titleButton={'Crear Chica'}>
        <TableGirlsComponent></TableGirlsComponent>
      </HomeComponent>
    </>
  )
}

export default App
