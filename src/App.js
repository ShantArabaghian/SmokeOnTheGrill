import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Reserve from './components/pages/Reserve'
import Contact from './components/pages/Contact'
import Menu from './components/pages/Menu'
import './components/Footer.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
     
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}        />
        <Route path='/reserve' exact component={Reserve}/>
        <Route path='/menu' exact component={Menu}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
      <Footer/>

      </Router>

     
    </>
  );
}

export default App;
