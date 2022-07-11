import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'

import { SinglePage } from './Pages/SinglePage'
import { MainPage } from './Pages/MainPage'
import { FavoritesPage } from './Pages/FavoritesPage'
import { SignInPage } from './Pages/SignInPage'
import { SignUpPage } from './Pages/SignUpPage'
import { VerifyPage } from './Pages/VerifyPage'
import { ResetPasswordPage } from './Pages/ResetPasswordPage'
import { NewPasswordPage } from './Pages/NewPasswordPage'
import { SeachPage } from './Pages/SeachPage'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>}>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/favorites' element={<FavoritesPage/>}/>
            <Route path='/signIn' element={<SignInPage/>}/>
            <Route path='/signUp' element={<SignUpPage/>}/>
            <Route path='/verify' element={<VerifyPage/>}/>
            <Route path='/resetPassword' element={<ResetPasswordPage/>}/>
            <Route path='/newPassword' element={<NewPasswordPage/>}/>
            <Route path='/seach' element={<SeachPage/>}/>
            <Route path='/posts/:id' element={<SinglePage/>}/>
            </Route>
            <Route
            path='*'
            element={
              <main style={{padding:'1em'}}>
                <p>404 Not Found</p>
              </main>
            }/>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
