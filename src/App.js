import React from 'react';
import Header from './components/Header';
import Conocenos from './components/Conocenos';
import Calidad from './components/Calidad';
import Productos from './components/Productos';
import QuienesSomos from './components/QuienesSomos';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <div>
      <Header />
      <Conocenos />
      <Calidad />
      <Productos />
      <QuienesSomos />
      <Footer />
    </div>
  );
};

export default App;
