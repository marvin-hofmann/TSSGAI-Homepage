import './Sidebar.css'
import logo from "./../../assets/icons/logo-t-systems-white.svg";
import ConfluenceIcon from './../../assets/icons/Confluence-Icon';
import SettingsIcon from './../../assets/icons/Settings-Icon';
import ArchitectureIcon from './../../assets/icons/Architecture-Icon';
import RessourcesIcon from './../../assets/icons/Ressources';
import ExpertiseIcon from './../../assets/icons/Expertise-Icon';
import ContactIcon from './../../assets/icons/Contact-Icon';

export default function Sidebar(){

  return (
    <>
      <div id="sidebar">
        <a href="#" id="logo-wrapper">
          <img
            id="logo"
            src={logo}
            alt="Logo"
          />
          <span>AI-HUB</span>
        </a>
        <div id="nav-item-wrapper">
          <p className="info-text">Navigation</p>
          <a href="#" className="nav-item">
            <ConfluenceIcon></ConfluenceIcon>
            <span>Confluence portal</span>
          </a>
          <a href="/#use-cases" className="nav-item">
            <SettingsIcon fillColor='white' strokeColor='var(--magenta)'></SettingsIcon>
            <span>Use cases</span>
          </a>
          <a href="#" className="nav-item">
            <ArchitectureIcon></ArchitectureIcon>
            <span>Architecture</span>
          </a>
          <a href="/#ressources" className="nav-item">
            <RessourcesIcon></RessourcesIcon>
            <span>Ressources</span>
          </a>
          <a href="/#expertise" className="nav-item">
            <ExpertiseIcon></ExpertiseIcon>
            <span>Our expertise</span>
          </a>
          <a href="/#contact" className="nav-item">
            <ContactIcon></ContactIcon>
            <span>Contact</span>
          </a>
        </div>
        <p className="bottom-text">Located in Singapore</p>
      </div>
    </>
  )
}