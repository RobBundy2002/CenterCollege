import React from 'react';
import '../StyleSheets/Staff.css';

const StaffBio = ({ name, role, image, bio }) => {
    return (
        <div className="bio-container">
            <div className="bio-image">
                <img src={image} alt={name} />
            </div>
            <div className="bio-info">
                <h2 className="leaders-name">{name}</h2>
                <p className="leaders-role">{role}</p>
                <p className="leaders-bio">{bio}</p>
            </div>
        </div>
    );
};

export default StaffBio;
