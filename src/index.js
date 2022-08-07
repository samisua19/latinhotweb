import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './database/firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { CardComponent, HomeComponent, ShowGirlPhotos } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/createGirl" element={<HomeComponent hideModal={false} routeButton={'/'} titleButton={'Inicio'}><CardComponent/></HomeComponent>}></Route>
      <Route path="/:id" element={<HomeComponent hideModal={false} routeButton={'/'} titleButton={'Inicio'}><ShowGirlPhotos/></HomeComponent>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
