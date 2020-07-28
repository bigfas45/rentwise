import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>



        <Header/>
          <switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/about' component={About} /> 
          <Route exact path='/services' component={Services} /> 
          <Route exact path='/contact' component={Contact} /> 
          <Route exact path='/register' component={Register} /> 
          <Route exact path='/login' component={Login} /> 
          
          </switch>
          <Footer/>

       
        
        

        </Router>
    </div>
    
  )
}

export default App;
