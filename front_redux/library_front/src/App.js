import React from 'react';
import Header from './features/header/Header';
import Footer from './features/footer/Footer';
import Rightside from './features/right_side/Rightside';
import Leftside from './features/left_side/Leftside'
import Authentication from './features/authentication/Authentication';
import Register from './features/authentication/Register';
import { Route, Routes } from 'react-router-dom'
import MainShop from './features/main_shop/MainShop';
import Cart from './features/main_shop/Cart';


function App() {
  return (
    <div >
      <Header />
      <Authentication />
      <div className='main-site'>
          <Leftside />
          <Routes>
            <Route path='/' element={<Rightside></Rightside>}>
              <Route path='/' element={<MainShop />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/register' element={<Register></Register>} />
            </Route>
          </Routes>
      </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
