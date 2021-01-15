import React from 'react';
import './App.css';
import Footer from './resources/components/Footer';
import NavHeader from './resources/components/NavHeader';
import Home from './resources/pages/Home';
import ContactUs from './resources/pages/ContatUs';
import Products from './resources/pages/Products';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (

    <div className="app">
      <NavHeader />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/contact' component={ContactUs} />
      </Switch>

      <Footer />
    </div>


  );
}

export default App;
