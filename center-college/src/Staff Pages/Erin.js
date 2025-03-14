import React from 'react';
import StaffBio from './StaffBio';
import erinImage from '../Images/Erin Image.png';

const Erin = () => {
    return (
        <div>
            <StaffBio
                name="Erin Logan"
                role="Women's Director"
                image={erinImage}
                bio="Erin has a heart for women's ministry and has been serving with Center College for many years. She enjoys empowering women to lead and grow in their faith."
            />
        </div>
    );
};

export default Erin;
