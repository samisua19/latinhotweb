import './App.css'
import React, { Suspense, lazy } from 'react';
import { HomeComponent } from './components'
import { Button, Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <HomeComponent routeButton={'/createGirl'} titleButton={'Crear Chica'}/>
  )
}

export default App
