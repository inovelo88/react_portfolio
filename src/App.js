import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Projects from "./Components/Projects";
import Social from "./Components/Social";
import Footer from "./Components/Footer";


// import {BrowserRouer as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Navbar />
    <Container />
    <Projects />
    <Social />
    <Footer />
    </div>
  );
}

export default App;
