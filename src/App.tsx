import React from 'react';
import './App.css';
import Footer from './resources/components/Footer';
import NavHeader from './resources/components/NavHeader';
import Home from './resources/pages/Home';
import ContactUs from './resources/pages/ContatUs';
import Products from './resources/pages/Products';
import { Switch, Route } from 'react-router-dom'
import BookDemo from './resources/pages/BookDemo';
import ProductDetails from './resources/pages/ProductDetails';
import AboutUs from './resources/pages/AboutUs';

function App() {
  return (

    <div className="app">
      <NavHeader />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route path='/products/:id' component={ProductDetails} />
        <Route exact path='/bookdemo' component={BookDemo} />
        <Route path='/bookdemo/:id' component={BookDemo} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/about' component={AboutUs} />
      </Switch>

      <Footer />
    </div>


  );
}

export default App;
