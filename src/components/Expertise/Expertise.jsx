import WorldIcon from "../../assets/icons/World-Icon";
import "./Expertise.css";
import PlugIcon from "../../assets/icons/Plug-Icon";
import BatteryIcon from "../../assets/icons/Battery-Icon";
import DataIcon from "../../assets/icons/Data-Icon";
import React from 'react';


export default function Expertise(){
  return (
    <div id="expertise">
      <h2 className="headline-h2">Our expertise:</h2>
      <p className="headline-subtext margin-y-2rem">Explore the depth of our professional capabilities, where our team's diverse expertise excels across various fields. <br/> We deliver innovative, tailored solutions, ensuring excellence and mastery in every project.</p>
      <div id="card-wrapper">
        <div className="card">
          <WorldIcon strokeColor="var(--blue)"></WorldIcon>
          <div className="general-information-wrapper">
            <h3>Frontend</h3>
            <div>
              <span className="headline-subtext">We expertise in:</span>
              <ul>
                <li>Cutting-edge Technologies</li>
                <li>Beautiful interfaces</li>
                <li>Device independence</li>
                <li>User friendlyness</li>
                <li>Optimal user experience</li>
              </ul>
            </div>
          </div>
          <div className="more-information-wrapper">
            <h3>Frontend</h3>
            <p>Our front-end development expertise includes cutting-edge technologies for beautiful, responsive, user-friendly interfaces that provide an optimal user experience on all devices.</p>
          </div>
        </div>
        <div className="card">
          <PlugIcon strokeColor="var(--blue)" strokeWidth={1.7}></PlugIcon>
          <div className="general-information-wrapper">
            <h3>Backend</h3>
            <div>
              <span className="headline-subtext">We have an eye on key values:</span>
              <ul>
                <li>Powerful Technologies</li>
                <li>Stable Architectures</li>
                <li>Scalability</li>
                <li>Security</li>
                <li>Reliability</li>
              </ul>
            </div>
          </div>
          <div className="more-information-wrapper">
            <h3>Backend</h3>
            <p>Our backend team masters powerful technologies for the creation of stable, scalable and secure server architectures that form the basis for reliable web applications.</p>
          </div>
        </div>
        <div className="card">
          <BatteryIcon strokeColor="var(--blue)"></BatteryIcon>
          <div className="general-information-wrapper">
            <h3>Infrastructure</h3>
            <div>
              <span className="headline-subtext">Our strengths include:</span>
              <ul>
                <li>Robust Server Architectures</li>
                <li>High Scalability</li>
                <li>Enhanced Security</li>
                <li>Reliable Performance</li>
                <li>Efficient Resource Management</li>
              </ul>
            </div>
          </div>
          <div className="more-information-wrapper">
            <h3>Infrastructure</h3>
            <p>Our expertise in cloud and infrastructure includes leading platforms, to offer scalable hosting solutions, reliable data processing and seamless integration to meet your business needs.</p>
          </div>
        </div>
        <div className="card">
          <DataIcon strokeColor="var(--blue)"></DataIcon>
          <div className="general-information-wrapper">
            <h3>Analytics</h3>
            <div>
              <span className="headline-subtext">Our strengths include:</span>
              <ul>
                <li>Data-Driven Insights</li>
                <li>Advanced Reporting</li>
                <li>Real-Time Analytics</li>
                <li>Predictive Modeling</li>
                <li>Comprehensive Data Visualization</li>
              </ul>
            </div>
          </div>
          <div className="more-information-wrapper">
            <h3>Analytics</h3>
            <p>Our expertise covers the entire data pipeline - from raw data preparation to detailed analysis - to enable you to make informed decisions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}