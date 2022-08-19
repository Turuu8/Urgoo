import './App.css'
import { Header } from "./Header";
import { Movies } from "./Movies";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";

import { TopGunHome } from './TopGun/Home';
import { DataMap } from './data/dataMap';

function App() {
  return (
    <div className='urgoo'>
      <Header />
      <Movies />
      <DataMap />
    </div>
  );
}

function MyApp() {
  return (
    <Router>
        <Routes>
          <Route path="" element={<App />} >
          </Route>
          <Route path="/TopGun" element={<TopGunHome/>} >
          </Route>
        </Routes>
    </Router>
  );
}



export default MyApp;


