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
            <div className="background-image">
                <div className="overlay">
                    <div className="welcome-text">
                        <h1>Welcome to Center College</h1>
                        <p>Center College is a Christian Ministry at UVA.</p>
                        <button className="login-btn" onClick={toggleLoginForm}>
                            {showLogin ? 'Close Login' : 'Student Leader/Staff Login'}
                        </button>
                    </div>
                </div>
            </div>

            {showLogin && <Login />}
        </div>
    );
};

export default Home;
