import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import HowToApply from './HowToApply'
import OurBoard from './OurBoard'
import ContactUs from './ContactUs'
import Footer from './Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';



function App() {
  return (

    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Footer />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/howtoapply" component={HowToApply} />
          <Route path="/ourboard" component={OurBoard} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
