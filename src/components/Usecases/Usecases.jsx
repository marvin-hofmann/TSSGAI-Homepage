import React from 'react';

import Mic from "./../../assets/icons/mic.svg";
import Orion from './../../assets/img/orion.png';
import Speakpeak from './../../assets/img/speakpeak.png';
import Dentascan from './../../assets/img/dentascan.png';
import "./Usecases.css";

function Usecases() {
  
  return (
    <>
      <div id="use-cases" className="use-case background-dark">
        <div>
          <h2 className="headline-h2">Our use cases and products</h2>
          <p className="headline-subtext margin-y-2rem">In this section, we introduce you our use cases for artificial intelligence in healthcare, insurance and manufacturing.</p>
        </div>
        <div id="healthcare">
          <div className="canvas-container">
          </div>
          <div id="dentascan">
            <h4 className="branch-text">Healthcare</h4>
            <div className="card-container">
              <h3 className="headline-h3 uppercase">DentaScan</h3>
              <p className="card-headline margin-top-2rem">Business Problem:</p>
              <p className="card-text margin-top-1rem">Dental imaging and diagnosis often face challenges in accurately segmenting and analyzing complex dental structures from DICOM scans, leading to inefficient workflows and potential inaccuracies in treatment planning.</p>
            </div>
            <div className="card-container">
              <div className="use-case-image" data-imagetext="oral x-ray">
                <img src={Dentascan}/>
              </div>
            </div>
            <div className="card-container">
              <p className="card-headline">Solution:</p>
              <p className="card-text margin-top-1rem">DentaScan utilizes MONAI-powered algorithms to provide advanced image segmentation of dental structures from DICOM scans, offering precise identification and delineation of teeth, roots, and surrounding tissues.</p>
            </div>
            <div className="card-container">
              <p className="card-headline">Benefits:</p>
              <p className="card-text margin-top-1rem">DentaScan enhances diagnostic accuracy and treatment planning, streamlines dental workflows, and improves patient care and outcomes through its cutting-edge segmentation technology.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="use-case background-light">
        <img id="mic-icon" src={Mic}></img>
        <div id="orion">
          <h4 className="branch-text"></h4>
          <div className="card-container">
            <h3 className="headline-h3 uppercase">Orion</h3>
            <p className='headline-subtext blue'>Speech-to-Text Assistant</p>
            <p className="card-headline margin-top-2rem">Business Problem:</p>
            <p className="card-text margin-top-1rem">Many people have no access to written content due to visual impairments or reading difficulties. This barrier prevents them from benefiting from information and knowledge that is easily accessible to others.</p>
          </div>
          <div className="card-container">
            <div className="use-case-image" data-imagetext="orion dashboard">
              <img src={Orion}/>
            </div>
          </div>
          <div className="card-container">
            <p className="card-headline">Solution:</p>
            <p className="card-text margin-top-1rem">Orion offers a solution through advanced speech synthesis technology that converts written text into natural-sounding speech. This technology enables people who have difficulty reading or are visually impaired to easily access written content.</p>
          </div>
          <div className="card-container">
            <p className="card-headline">Benefits:</p>
            <p className="card-text margin-top-1rem">Orion ensures inclusivity by making written content accessible to all users, regardless of abilities. The technology enhances accessibility and provides a user-friendly experience, demonstrating T-Systems' expertise in AI solutions.</p>
          </div>
        </div>
      </div>
      <div className="use-case background-light">
        <div id="icon-wrapper">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            fill="none"
          >
            <path
              d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"
              style={{ strokeWidth:'0.2', stroke: 'var(--blue)' }}
            />
          </svg>
          <div id="minus"></div>
        </div>
        <div id="speakpeak">
          <div className="card-container">
            <h3 className="headline-h3 uppercase">SpeakPeak</h3>
            <p className='headline-subtext blue'>Sentiment Analysis</p>
            <p className="card-headline margin-top-2rem">Business Problem:</p>
            <p className="card-text margin-top-1rem">Traditional data analysis often misses the emotional context of customer feedback, reviews, and support calls, limiting insights into how users perceive products and services.</p>
          </div>
          <div className="card-container">
            <div className="use-case-image" data-imagetext="speakpeak dashboard">
              <img src={Speakpeak}/>
            </div>
          </div>
          <div className="card-container">
            <p className="card-headline">Solution:</p>
            <p className="card-text margin-top-1rem">SpeakPeak uses sentiment analysis to enrich feedback data with emotional insights. This allows companies to better understand the needs, concerns, and preferences of their customers and to respond appropriately.</p>
          </div>
          <div className="card-container">
            <p className="card-headline">Benefits:</p>
            <p className="card-text margin-top-1rem">SpeakPeak enables more accurate and effective customer interactions, improves user experience, and supports customer retention through targeted and emotion-based responses.</p>
          </div>
        </div>
      </div>
      <div className="use-case background-light">
        <svg
          id="mariana-background-icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M5.44,4.15l14.65,7a1,1,0,0,1,0,1.8l-14.65,7A1,1,0,0,1,4.1,18.54l2.72-6.13a1.06,1.06,0,0,0,0-.82L4.1,5.46A1,1,0,0,1,5.44,4.15ZM7,12h4"
            fill="none"
            stroke="var(--blue)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".18"
          />
        </svg>
        <div id="mariana">
          <div className="header">
            <h1>Mariana</h1>
            <span>An AI-powered enterprise level search engine</span>
          </div>
          <div className="body">
            <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 28 28"><path fill="var(--blue)" d="M10.06 18.701a1.628 1.628 0 0 0 2.43-.676l.77-2.34a3.82 3.82 0 0 1 2.416-2.418l2.238-.727a1.6 1.6 0 0 0 .786-.595a1.62 1.62 0 0 0-.849-2.489l-2.215-.72a3.82 3.82 0 0 1-2.42-2.414l-.727-2.237a1.62 1.62 0 0 0-.594-.785a1.655 1.655 0 0 0-1.879 0a1.63 1.63 0 0 0-.6.8L8.68 6.365a3.82 3.82 0 0 1-2.359 2.37l-2.24.726a1.626 1.626 0 0 0 .02 3.073l2.216.72a3.86 3.86 0 0 1 1.816 1.286c.266.343.471.728.606 1.14l.728 2.234c.112.318.32.593.595.787m9.744 6.08a1.2 1.2 0 0 0 .696.22a1.2 1.2 0 0 0 .692-.217a1.2 1.2 0 0 0 .446-.6l.372-1.143a1.61 1.61 0 0 1 1.017-1.02l1.166-.378A1.21 1.21 0 0 0 25 20.505a1.2 1.2 0 0 0-.844-1.146l-1.144-.37a1.61 1.61 0 0 1-1.02-1.018l-.38-1.163a1.2 1.2 0 0 0-2.274.016l-.374 1.146a1.61 1.61 0 0 1-.993 1.017l-1.166.378a1.21 1.21 0 0 0-.807 1.139a1.2 1.2 0 0 0 .823 1.138l1.144.372a1.6 1.6 0 0 1 1.02 1.023l.379 1.163a1.2 1.2 0 0 0 .44.582"></path></svg>
            <h1>Chat with your own data</h1>
            <h2>Ask anything or try an example</h2>
            <div className="card-wrapper">
              <div className='card'>
                <h3>Business Problem</h3>
                <p>Finding the right information quickly is challenging in enterprises due to overwhelming amounts of data. Traditional search solutions often fail to provide the necessary context, leading to wasted time and reduced productivity.</p>
              </div>
              <div className='card'>
                <h3>Solution</h3>
                <p>Mariana enhances enterprise search by using large language models like GPT. It not only retrieves relevant documents but also generates summaries, highlights, and insights, providing employees with the exact context and answers they need.</p>
              </div>
              <div className='card'>
                <h3>Benefits</h3>
                <p>Mariana saves employees time by delivering context-rich search results, enabling faster decision-making and boosting productivity. It optimizes the use of enterprise knowledge, enhancing overall efficiency.</p>
              </div>
            </div>
          </div>
          <div className="chatbox">
            <span>Type a new question ...</span>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M5.44,4.15l14.65,7a1,1,0,0,1,0,1.8l-14.65,7A1,1,0,0,1,4.1,18.54l2.72-6.13a1.06,1.06,0,0,0,0-.82L4.1,5.46A1,1,0,0,1,5.44,4.15ZM7,12h4"
                fill="var(--blue)"
                stroke="var(--dark-950)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="use-case background-dark">
        <div id="soleMetrics">
          <div className="card-container">
            <h3 className="headline-h3 uppercase">SoleMetrics</h3>
            <p className='headline-subtext blue'>Video Analysis</p>
            <svg style={{transform: "translate(-30px,15px)"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="150" height="150"><path style={{fill: "none", stroke: "var(--dark-600)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: ".1"}} d="M17,12,5,21V3Z"></path></svg>
          </div>
          <div className="card-container">
            <p className="card-headline">Business Problem:</p>
            <p className="card-text margin-top-1rem">Businesses struggle to extract actionable insights from vast amounts of video data using traditional methods. This inefficiency can lead to missed security threats, operational issues, and delays in decision-making.</p>
          </div>
          <div className="card-container">
            <p className="card-headline">Solution:</p>
            <p className="card-text margin-top-1rem">SoleMetrics offers advanced video analytics that uses machine learning to quickly and accurately analyze video data. This automated process enhances security, optimizes operations, and supports better decision-making.</p>
          </div>
          <div className="card-container">
            <p className="card-headline">Benefits:</p>
            <p className="card-text margin-top-1rem">SoleMetrics' video analytics improve security with real-time threat detection, boost operational efficiency by automating video processing, and support informed decisions with actionable insights. This results in cost savings and better resource allocation.</p>
          </div>
        </div>
        <div id="emailMaven">
          <svg id="email-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20,19H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H20a1,1,0,0,1,1,1V18A1,1,0,0,1,20,19ZM3.68,5.45l7.7,6.06a1,1,0,0,0,1.24,0l7.7-6.06"
              style={{ fill: "none", stroke: "var(--dark-600)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: ".05" }}
            />
          </svg>
          <div id="content-wrapper">
            {/* <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="key-icon"
              width="24"
              height="24"
              style={{
                fill: "none",
                stroke: "var(--dark-600)"
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth=".05"
            >
              <path d="M9 12H21m-1 0V10m-4 2V10M6 9a3 3 0 1 0 3 3A3 3 0 0 0 6 9Z" />
            </svg> */}
            <div className="card-container">
              <h3 className="headline-h3 uppercase">EmailMaven</h3>
              <p className='headline-subtext blue'>Email Triaging</p>
            </div>
            <div className="email-body">
              <div className="card-container border-top-grey">
                <p className="card-headline">Business Problem:</p>
                <p className="card-text margin-top-1rem">Managing high volumes of emails can overwhelm individuals and teams, leading to missed important messages, delayed responses, and reduced productivity.</p>
              </div>
              <div className="card-container border-top-grey">
                <p className="card-headline">Solution:</p>
                <p className="card-text margin-top-1rem">EmailMaven offers intelligent email triaging that automates the sorting and prioritization of incoming emails. It quickly categorizes emails by relevance, urgency, and importance, enabling users to efficiently manage their inboxes.</p>
              </div>
              <div className="card-container border-top-grey">
                <p className="card-headline">Benefits:</p>
                <p className="card-text margin-top-1rem">EmailMaven enhances productivity by ensuring that critical emails are addressed promptly, reduces the risk of overlooking important communications, and minimizes time spent on less urgent emails, leading to better inbox management and reduced email overload.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usecases;
