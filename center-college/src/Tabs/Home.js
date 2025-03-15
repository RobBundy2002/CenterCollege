import React, { useState } from 'react';
import Login from '../Miscellaneous/Login';
import '../StyleSheets/Home.css';
import logoImage from './Logo.png';
import { useNavigate } from 'react-router-dom';
import Footer from "../Miscellaneous/Footer";

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLoginForm = () => {
        setShowLogin(!showLogin);
    };

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            <div className="background-image">
                <img src={logoImage} alt="Home Background" className="logo-image"/>
                <div className="overlay">
                    <div className="welcome-text">
                        <h1>Welcome to Center College</h1>
                        <p>Center College is a Christian Ministry at UVA.</p>
                        <button className="nav-button" onClick={toggleLoginForm}>
                            {showLogin ? 'Close Login' : 'SL/Staff Login'}
                        </button>
                        <button className="nav-button" onClick={() => handleNavigation('/')}>Home</button>
                        <button className="nav-button" onClick={() => handleNavigation('/upcoming-events')}>Upcoming
                            Events
                        </button>
                        <button className="nav-button" onClick={() => handleNavigation('/sl-info')}>Student Leader
                            Info
                        </button>
                        <button className="nav-button" onClick={() => handleNavigation('/reading-plan')}>Reading Plan
                        </button>
                        <button className="nav-button" onClick={() => handleNavigation('/community-group')}>Community
                            Group
                        </button>
                        <button className="nav-button" onClick={() => handleNavigation('/about')}>About Us</button>
                        <button className="nav-button" onClick={() => handleNavigation('/leaders')}>Staff Team</button>
                    </div>
                </div>
            </div>

            {showLogin && <Login/>}
            <div className="footer-container-home">
                <Footer/>
                </div>
            </div>
    );
};
 export default Home;
