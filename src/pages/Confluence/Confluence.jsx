import React from 'react';
import "./Confluence.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import confluence1 from "./../../assets/img/confluence1.png";
import confluence2 from "./../../assets/img/confluence2.png";
import confluence3 from "./../../assets/img/confluence3.png";
import confluence4 from "./../../assets/img/confluence4.png";
import confluence5 from "./../../assets/img/confluence5.png";
import confluence6 from "./../../assets/img/confluence6.png";
import Footer from '../../components/Footer/Footer';

const Confluence = () => {
    return (
        <>
            <div id="confluence">
                <Sidebar></Sidebar>
                <div className="headline-wrapper">
                    <h1 className="headline-h1">Welcome to Our Team's Confluence Page</h1>
                    <p className="headline-subtext">
                        This page offers an overview of our team's current and past projects, highlighting key milestones and successes.
                        <br/>
                        It's a central resource for team members and stakeholders to stay updated on our work. 
                        Explore our achievements and ongoing projects here.
                    </p>
                </div>
                <div className="meta-information">
                    <a href="https://wiki.telekom.de/display/DATAAIRPA/02.+Priority+use+cases" target="_blank">Visit our original confluence page</a>
                    <span>last udpated: 13/08/2024</span>
                </div>
                <div id="image-wrapper">
                    <img src={confluence1}></img>
                    <img src={confluence2}></img>
                    <img src={confluence3}></img>
                    <img src={confluence4}></img>
                    <img src={confluence5}></img>
                    <img src={confluence6}></img>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Confluence;
