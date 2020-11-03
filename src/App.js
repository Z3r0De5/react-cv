import React, { Component } from 'react';
import Content from './components/Content';
import Profile from './components/Profile';
import Education from './components/Education';
import About from './components/About';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
        <About />
        <br />
        <Profile />
        <br />
        <Education />
        <br />
        <Skill />
        <br />
        <Experience />
        <br />
        <Footer />
      </div>
    );
  }
}

// export default App;
