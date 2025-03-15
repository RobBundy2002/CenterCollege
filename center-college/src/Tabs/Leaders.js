import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../StyleSheets/Leaders.css';
import joseImage from '../Images/Jose Image.png';
import erinImage from '../Images/Erin Image.png';
import keatonImage from '../Images/Keaton Image.png';
import mikeImage from '../Images/Mike Image.png';
import livImage from '../Images/Liv Image.png';
import Footer from "../Miscellaneous/Footer";
import BackButton from "../Miscellaneous/BackButton";

const Leaders = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="leaders-container">
            <h2 className="leaders-title">Our Staff Team</h2>
            <div className="leaders-list">
                <div className="leader-card">
                    <button
                        className=""
                        onClick={() => handleNavigation('/jose')}
                    >
                        <img
                            className="leader-image"
                            src={joseImage}
                            alt="Jose Concepcion"
                        />
                        <div className="leader-info">
                            <h3 className="leader-name">Jose Concepcion</h3>
                            <p className="leader-role">College Director</p>
                        </div>
                    </button>
                </div>

                <div className="leader-card">
                    <button
                        className=""
                        onClick={() => handleNavigation('/erin')}
                    >
                        <img
                            className="leader-image"
                            src={erinImage}
                            alt="Erin Logan"
                        />
                        <div className="leader-info">
                            <h3 className="leader-name">Erin Logan</h3>
                            <p className="leader-role">Women's Director</p>
                        </div>
                    </button>
                </div>

                <div className="leader-card">
                    <button
                        className=""
                        onClick={() => handleNavigation('/keaton')}
                    >
                        <img
                            className="leader-image"
                            src={keatonImage}
                            alt="Keaton Daniel"
                        />
                        <div className="leader-info">
                            <h3 className="leader-name">Keaton Daniel</h3>
                            <p className="leader-role">College Staff</p>
                        </div>
                    </button>
                </div>

                <div className="leader-card">
                    <button
                        className=""
                        onClick={() => handleNavigation('/mike')}
                    >
                        <img
                            className="leader-image"
                            src={mikeImage}
                            alt="Mike Matzeder"
                        />
                        <div className="leader-info">
                            <h3 className="leader-name">Mike Matzeder</h3>
                            <p className="leader-role">College Staff</p>
                        </div>
                    </button>
                </div>

                <div className="leader-card">
                    <button
                        className=""
                        onClick={() => handleNavigation('/liv')}
                    >
                        <img
                            className="leader-image"
                            src={livImage}
                            alt="Liv Didat"
                        />
                        <div className="leader-info">
                            <h3 className="leader-name">Liv Didat</h3>
                            <p className="leader-role">College Staff</p>
                        </div>
                    </button>
                </div>
            </div>
            <BackButton customClass="l-back-button"/>
            <div className="footer-container-l">
                <Footer/>
            </div>
        </div>
    );
};

export default Leaders;
