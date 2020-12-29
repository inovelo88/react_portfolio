import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Projects from "./Components/Projects";
import Box1 from "./Components/Box1";
import Box2 from "./Components/Box2";
import Box3 from "./Components/Box";
import Social from "./Components/Social";
import Footer from "./Components/Footer";
// import {BrowserRouer as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Navbar />
    <Container />
    <Projects />
    <Box1 />
    <Box2 />
    <Box3 />
    <Social />
    <Footer />
    </div>
  );
}

export default App;
