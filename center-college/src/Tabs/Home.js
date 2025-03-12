import React, { useState } from 'react';
import Login from '../Miscellaneous/Login';
import '../StyleSheets/Home.css';

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLoginForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="home-container">
            <div className="welcome-text">
                <h1>Welcome to Center College</h1>
            </div>
            <button className="login-btn" onClick={toggleLoginForm}>
                {showLogin ? 'Close Login' : 'Student Leader/Staff Login'}
            </button>
            {showLogin && <Login />}
        </div>
    );
};

export default Home;
