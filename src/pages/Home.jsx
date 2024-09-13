import React from 'react';

import './Home.css';

import Sidebar from '../components/Sidebar/Sidebar';
import Arrow from "./../assets/icons/arrow-right.svg";
import Contact from '../components/Contact/Contact';
import Expertise from '../components/Expertise/Expertise';
import Usecases from '../components/Usecases/Usecases';

import Clients from '../components/Clients/Clients';
import Footer from '../components/Footer/Footer';
import Ressources from '../components/Ressources/Ressources';

function App() {
  return (
    <>
      <Sidebar />
      <div id="introduction-wrapper">
        <div className="headline-wrapper">
          <h1 className="headline-h1">Let's power higher performance...</h1>
          <p className="headline-text">through the use of artificial intelligence.</p>
          <p className="headline-subtext">Our AI team specializes in large language models, automating email sorting, enhancing enterprise search, and forecasting demand utilizing cutting-edge technologies:</p>
          <div id="chip-wrapper">
            <p className="chip">generative AI</p>
            <p className="chip">computer vision</p>
            <p className="chip">sentiment analysis</p>
            <p className="chip">video analytics</p>
          </div>
          <div id="box-wrapper">
            <div className="box">
              <p>14+</p>
              <p>Partners</p>
            </div>
            <div className="box">
              <p>55+</p>
              <p>Projects</p>
            </div>
            <div className="box">
              <p>89+</p>
              <p>Happy clients</p>
            </div>
            <div className="box">
              <p>273+</p>
              <p>Meetings</p>
            </div>
          </div>
          <div className="button-wrapper">
            <a href="#use-cases" className="secondary-button">
              <span>See our use cases</span>
            </a>
            <span>or</span>
            <a href="#contact" className="primary-button-icon primary-button">
              <span>Reach out to us</span>
              <img src={Arrow}/>
            </a>
          </div>
        </div>
        <div id="shape-wrapper">
          <svg id="shape" width="1513" height="1507" viewBox="0 0 1513 1507" xmlns="http://www.w3.org/2000/svg">
            <rect width="1513" height="1507" rx="92"/>
          </svg>
          <div className="canvas-container">
          </div>
        </div>
      </div>
      <Clients></Clients>
      <Expertise></Expertise>
      <Usecases></Usecases>
      <Ressources></Ressources>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
