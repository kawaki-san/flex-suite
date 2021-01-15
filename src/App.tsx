import React from 'react';
import './App.css';
import Footer from './resources/components/Footer';
import NavHeader from './resources/components/NavHeader';
import Home from './resources/pages/Home';
import ContactUs from './resources/pages/ContatUs';
import Products from './resources/pages/Products';

function App() {
  return (
    <div className="app">
      <NavHeader />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
