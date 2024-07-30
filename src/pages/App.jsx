import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { data } from '../utils/data';
import * as THREE from 'three';
import gsap from 'gsap';
import Tubes from '../components/Tubes/Tubes';
import Particles from '../components/Particles/Particles';
import Sidebar from '../components/Sidebar/Sidebar';
import Slider from "../components/Slider/Slider"
import arrow from "./../assets/icons/arrow-right.svg";
import share from "./../assets/icons/share.svg";
import './App.css';

const PATHS = data.economics[0].paths;
const brainCurves = [];
PATHS.forEach((path) => {
  const points = [];
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  brainCurves.push(new THREE.CatmullRomCurve3(points));
});

function App() {
  const subtextRef = useRef(0);
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".headline-h1",
      { y: 20, opacity: 0 },
      { duration: 1, y: 0, opacity: 1 }
    );
    timeline.fromTo(
      ".headline-text",
      { y: 30, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, delay: .3 }
    );
    timeline.fromTo(
      subtextRef.current,
      { y: 30, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, delay: .3 }
    );

    const items = document.querySelectorAll('.chip');
    items.forEach((item, index) => {
      timeline.fromTo(item, 
        { y: 10, opacity: 0 },
        { duration: 1, y: 0, opacity: 1, delay: .1, ease: 'power2.out'}
      );
    });

  }, []);

  return (
    <>
      <Sidebar />
      <div className="introduction-wrapper">
        <div className="headline-wrapper">
          <h1 className="headline-h1">Let's power higher performance...</h1>
          <p className="headline-text">through the use of artificial intelligence.</p>
          <p className="headline-subtext" ref={subtextRef}>Our AI team specializes in large language models, automating email sorting, enhancing enterprise search, and forecasting demand. We develop advanced AI solutions using cutting-edge techniques:</p>
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
            <a href="#contact" className="secondary-button">
              <span>See our use cases</span>
            </a>
            <span>or</span>
            <a href="#contact" className="primary-button-icon primary-button">
              <span>Reach out to us</span>
              <img src={arrow}/>
            </a>
          </div>
        </div>
        <div className="shape-wrapper">
          {/* <svg id="shape" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="200%" height="100%" rx="29" fill="var(--dark-300)" />
          </svg> */}
          <svg id="shape" width="1513" height="1507" viewBox="0 0 1513 1507" xmlns="http://www.w3.org/2000/svg">
            <rect width="1513" height="1507" rx="92" fill="var(--dark-300)"/>
          </svg>
          <div className="canvas-container">
            <Canvas
              style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}
              pixelratio={window.devicePixelRatio}
              camera={{ position: [0, 0, 0.4] }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Tubes curves={brainCurves} />
              <Particles curves={brainCurves} />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
      <div id="client-wrapper">
        <h2 className="headline-h2">Our clients & partners:</h2>
        <p className="headline-subtext">We proudly showcase the diverse organizations and individuals we have had the privilege of partnering with.</p>
        <Slider></Slider>
      </div>
      <div id="contact">
        <h2 className="headline-h2">Location & Contact:</h2>
        <p className="headline-subtext">Visit our office and get in touch with us for any inquiries or support. Our location is easy to reach, and our team is ready to assist you. We look forward to connecting with you!</p>
        <div id="contact-options-wrapper">
          <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.731571335806!2d103.96593511064954!3d1.3373206616101367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17ed1088fda1%3A0xb246460edac107b6!2sT-Systems%20Singapore!5e0!3m2!1sde!2ssg!4v1722232258201!5m2!1sde!2ssg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div id="contact-details">
            <div className="single-details">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path style={{fill: "white", stroke: "var(--dark-500)"}} d="M20.19,13a10,10,0,0,1-3.43-.91,2,2,0,0,0-2.56.83l-.51.85a12.69,12.69,0,0,1-3.44-3.45l.86-.49a2,2,0,0,0,.83-2.56A10,10,0,0,1,11,3.81,2,2,0,0,0,9,2H5.13A3,3,0,0,0,2.86,3a3.13,3.13,0,0,0-.71,2.43A19,19,0,0,0,18.58,21.85a3,3,0,0,0,.42,0,3,3,0,0,0,2-.73,3,3,0,0,0,1-2.26V15A2,2,0,0,0,20.19,13Z"></path></svg>              
              <h3 className="single-details-title">Phone:</h3>
              <p>+65 6510 6000</p>
            </div>
            <div className="single-details">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><polygon style={{fill: "var(--dark-950)", stroke: "var(--dark-950)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5"}} points="19 10 19 21 14 21 14 14 10 14 10 21 5 21 5 10 12 3 19 10"></polygon></svg>
              <h3 className="single-details-title">Address:</h3>
              <p>T-Systems Singapore <br/> 15 Changi Business Park Cres, <br/>#06-01 Haite Building <br/>Singapore 486006</p>
              <p>Please register at the reception desk in the building or take the elevator directly to the 6th floor.</p>
            </div>
            <div className="single-details">
              <img style={{height: "20px", width: "20px"}} src={share}/>
              <h3 className="single-details-title">Or connect to us via:</h3>
              <div className="social-media-contact-option margin-top-auto">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_17_74)">
                    <path d="M23.9996 19.6363V28.9309H36.916C36.3488 31.9199 34.6468 34.4509 32.0941 36.1527L39.8831 42.1964C44.4213 38.0075 47.0395 31.8547 47.0395 24.5456C47.0395 22.8438 46.8868 21.2073 46.6031 19.6366L23.9996 19.6363Z" fill="white"/>
                    <path d="M10.5494 28.5681L8.79263 29.9128L2.57434 34.7564C6.52342 42.589 14.6174 48 23.9991 48C30.4789 48 35.9116 45.8618 39.8826 42.1965L32.0936 36.1528C29.9554 37.5928 27.2281 38.4656 23.9991 38.4656C17.7591 38.4656 12.4575 34.2547 10.5592 28.5819L10.5494 28.5681Z" fill="white"/>
                    <path d="M2.57436 13.2437C0.938084 16.4726 0 20.1163 0 23.9999C0 27.8834 0.938084 31.5271 2.57436 34.7561C2.57436 34.7778 10.5599 28.5597 10.5599 28.5597C10.08 27.1197 9.79624 25.5926 9.79624 23.9996C9.79624 22.4067 10.08 20.8795 10.5599 19.4395L2.57436 13.2437Z" fill="white"/>
                    <path d="M23.9996 9.55636C27.5342 9.55636 30.676 10.7781 33.1851 13.1345L40.0577 6.2619C35.8904 2.37833 30.4797 0 23.9996 0C14.6179 0 6.52342 5.38908 2.57434 13.2437L10.5597 19.44C12.4578 13.7672 17.7596 9.55636 23.9996 9.55636Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_17_74">
                      <rect width="48" height="48" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <p>Google</p>
                <p>www.t-systems.com/sg/en</p>
              </div>
              <div className="social-media-contact-option">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_17_68)">
                  <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_17_68">
                    <rect width="48" height="48" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <p>Linkedin</p>
                <p>@T-Systems Singapore</p>
              </div>
              <div className="social-media-contact-option">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="white"/>
                </svg>
                <p>Facebook</p>
                <p>@TSystemsSG</p>
              </div>
              <div className="social-media-contact-option">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_17_63)">
                    <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white"/>
                    <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white"/>
                    <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_17_63">
                      <rect width="48" height="48" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <p>Instagram</p>
                <p>@tsystems.sg</p>
              </div>
              <div className="social-media-contact-option margin-bottom-auto">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z" fill="white"/>
                </svg>
                <p>X (former Twitter)</p>
                <p>@tsystemssg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <span>T-Systems © {new Date().getFullYear().toString()} - All Rights Reserved.</span>
      </div>
    </>
  );
}

export default App;
