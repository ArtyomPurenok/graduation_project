import React from 'react';
import './App.css';

import {MainPage} from './Pages/MainPage'
import {Header} from "./components/Header"
import {Menu} from "./components/Menu"
import {FilmDescriptionPage} from './Pages/FilmDescriptionPage'

function App() {
  return (
    <div className="App">

      <Menu/>

      <div>
        <Header/>
        {/* <FilmDescriptionPage/> */}
        <MainPage/>
      </div>

    </div>
  );
}

export default App;
