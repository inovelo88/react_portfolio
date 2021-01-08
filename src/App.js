import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" render={() => {
            return (
             <>
               <Container /> 
            <Projects />
            </>)
          }} />
        </Switch>
      </Router>
      <Social />
      <Footer />
    </div>

  );
}

export default App;
