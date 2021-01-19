import React, { useEffect } from 'react';
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
import Register from './resources/pages/Register';
import Login from './resources/pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import NavHeaderAdmin from './resources/components/NavHeaderAdmin';
import { auth } from './firebaseConfig';
import Manage from './resources/pages/Manage';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName
        }))
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  })
  return (

    <div className="app">
      {!user ? <NavHeader /> : (
        <NavHeaderAdmin />
      )}

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route path='/products/:id' component={ProductDetails} />
        <Route exact path='/bookdemo' component={BookDemo} />
        <Route path='/bookdemo/:id' component={BookDemo} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/about' component={AboutUs} />
        <Route path='/admin/register' component={Register} />
        <Route path='/admin/login' component={Login} />
        <Route path='/admin/manage' component={Manage} />
      </Switch>

      <Footer />
    </div>


  );
}

export default App;
