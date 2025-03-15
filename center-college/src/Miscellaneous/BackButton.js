import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../StyleSheets/Leaders.css';

const BackButton = ({ customClass }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <button className={`nav-button ${customClass}`} onClick={handleBackClick}>
            Back
        </button>
    );
};

export default BackButton;
