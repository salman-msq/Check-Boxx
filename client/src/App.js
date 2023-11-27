import logo from './logo.svg';
import Header from './components/partials/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { useState } from 'react';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header />*/}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
