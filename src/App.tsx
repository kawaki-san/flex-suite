import React from 'react';
import './App.css';
import Footer from './resources/components/Footer';
import NavHeader from './resources/components/NavHeader';
import Home from './resources/pages/Home';

function App() {
  return (
    <div className="app">
      <NavHeader />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
