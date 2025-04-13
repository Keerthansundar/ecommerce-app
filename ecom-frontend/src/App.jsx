import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home';
import Navbar from './Components/Shared/Navbar';
import Products from './Components/Products/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/cart/Cart';
import LogIn from './Components/auth/Login';
import Register from './Components/auth/Register';
import { Toaster } from "react-hot-toast";
import PrivateRoute from './Components/PrivateRoute';


function App() {
  return (

    <React.Fragment>
      <Navbar/>
      <Toaster position="top-center" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={ <Products  />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/cart' element={ <Cart />}/>

        <Route path='/' element={<PrivateRoute publicPage />}>
            <Route path='/login' element={ <LogIn />}/>
            <Route path='/register' element={ <Register />}/>
          </Route>
      </Routes>

    </React.Fragment>
  );
}

export default App;
