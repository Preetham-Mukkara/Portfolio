import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoP from '../../assets/images/logo-p.png';
import LogoSubtitle from '../../assets/images/logo-sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'; 
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'; 

const Sidebar = () => {
    
    return (
    <div className = 'nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoP} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/preethammu/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/Preetham-Mukkara">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)}

export default Sidebar