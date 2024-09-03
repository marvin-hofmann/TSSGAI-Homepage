import React from 'react';
import "./Architecture.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

import emailtriage_arc from "./../../assets/img/emailtriage_arc.png"
import footfall_arc from "./../../assets/img/footfall_arc.png"
import mariana_arc from "./../../assets/img/mariana_arc.png"
import demandforecasting_arc from "./../../assets/img/demandforecasting_arc.png"

const Architecture = () => {
    return (
        <>
            <div id="architecture">
                <Sidebar></Sidebar>
                <div className="headline-wrapper">
                    <h1 className="headline-h1">Explore the Architecture of Our Projects</h1>
                    <p className="headline-subtext">
                        Discover the design and structure behind our projects. This section highlights our architectural frameworks, technologies, 
                        and methodologies, offering insights into how we build and organize our systems for scalability and efficiency.
                    </p>
                </div>
                <div className="meta-information">
                
                </div>
                <div id="architecture-wrapper">
                    <div className="use-case-wrapper">
                        <h2 className='headline-h2'>Behind the scenes of Email Maven:</h2>
                        <p className="headline-subtext additional-information-wrapper">Email triaging involves efficiently sorting and prioritizing incoming emails based on relevance, urgency, and importance. It includes quickly scanning emails, categorizing them, and deciding whether to respond immediately, delegate, schedule for later, or archive. This process helps manage inboxes more effectively, ensuring important messages are addressed promptly and reducing time spent on less critical ones. By organizing and prioritizing, email triaging boosts productivity, reduces overload, and ensures key communications are not missed.</p>
                        <img src={emailtriage_arc}></img>
                    </div>
                    <div className="use-case-wrapper">
                        <h2 className='headline-h2'>Architecture of Mariana:</h2>
                        <p className="headline-subtext additional-information-wrapper">Enterprise search solutions are integrating capabilities of large language models like GPT to not just retrieve relevant documents, but also generate useful summaries, highlights, and insights to enhance search results. Instead of just links to files, employees get the context and answers they need saving time and boosting productivity.</p>
                        <img src={mariana_arc}></img>
                    </div>
                    <div className="use-case-wrapper">
                        <h2 className='headline-h2'>Footfall Architecture:</h2>
                        {/* <p className="headline-subtext">Enterprise search solutions are integrating capabilities of large language models like GPT to not just retrieve relevant documents, but also generate useful summaries, highlights, and insights to enhance search results. Instead of just links to files, employees get the context and answers they need saving time and boosting productivity.</p> */}
                        <img src={footfall_arc}></img>
                    </div>
                    <div className="use-case-wrapper">
                        <h2 className='headline-h2'>Demandforecasting Architecture:</h2>
                        {/* <p className="headline-subtext">Enterprise search solutions are integrating capabilities of large language models like GPT to not just retrieve relevant documents, but also generate useful summaries, highlights, and insights to enhance search results. Instead of just links to files, employees get the context and answers they need saving time and boosting productivity.</p> */}
                        <img src={demandforecasting_arc}></img>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Architecture;
