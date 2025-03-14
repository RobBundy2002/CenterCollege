import React from 'react';
import '../StyleSheets/Leaders.css';
import joseImage from '../Images/Jose Image.png';
import erinImage from '../Images/Erin Image.png';
import keatonImage from '../Images/Keaton Image.png';
import mikeImage from '../Images/Mike Image.png';
import livImage from '../Images/Liv Image.png';

const Leaders = () => {
    return (
        <div className="leaders-container">
            <h2 className="leaders-title">Our Staff Team</h2>
            <div className="leaders-list">
                <div className="leader-card">
                    <img
                        className="leader-image"
                        src={joseImage}
                        alt="Jose Concepcion"
                    />
                    <div className="leader-info">
                        <h3 className="leader-name">Jose Concepcion</h3>
                        <p className="leader-role">College Director</p>
                        <p className="leader-description">
                            Jose Concepcion is a person.
                        </p>
                    </div>
                </div>
                <div className="leader-card">
                    <img
                        className="leader-image"
                        src={erinImage}
                        alt="Erin Logan"
                    />
                    <div className="leader-info">
                        <h3 className="leader-name">Erin Logan</h3>
                        <p className="leader-role">Women's Director</p>
                        <p className="leader-description">
                            Erin Logan is a person.
                        </p>
                    </div>
                </div>
                <div className="leader-card">
                    <img
                        className="leader-image"
                        src={keatonImage}
                        alt="Keaton Daniel"
                    />
                    <div className="leader-info">
                        <h3 className="leader-name">Keaton Daniel</h3>
                        <p className="leader-role">College Staff</p>
                        <p className="leader-description">
                            Keaton Daniel is a person.
                        </p>
                    </div>
                </div>
                <div className="leader-card">
                    <img
                        className="leader-image"
                        src={mikeImage}
                        alt="Mike Matzeder"
                    />
                    <div className="leader-info">
                        <h3 className="leader-name">Mike Matzeder</h3>
                        <p className="leader-role">College Staff</p>
                        <p className="leader-description">
                            Mike Matzeder is a person.
                        </p>
                    </div>
                </div>
                <div className="leader-card">
                    <img
                        className="leader-image"
                        src={livImage}
                        alt="Liv Didat"
                    />
                    <div className="leader-info">
                        <h3 className="leader-name">Liv Didat</h3>
                        <p className="leader-role">College Staff</p>
                        <p className="leader-description">
                            Liv Didat is a person.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaders;
