import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header className='headerNav'>
      <Nav />
    </Header>
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default App;
