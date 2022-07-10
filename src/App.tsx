import React from 'react'
import './App.css'

import { Outlet } from "react-router-dom";

import {MainPage} from './Pages/MainPage'
import {Header} from "./components/Header"
import {Menu} from "./components/Menu"
import {SinglePage} from './Pages/SinglePage'

function App() {
  return (
    <div className="App">

      <Menu/>

      <div>
        <Header/>
        <Outlet/>
        {/* <SinglePage/> */}
        {/* <MainPage/> */}
      </div>

    </div>
  );
}

export default App;
