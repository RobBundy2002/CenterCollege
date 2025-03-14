import React from 'react';
import StaffBio from './StaffBio';
import keatonImage from '../Images/Keaton Image.png';

const Keaton = () => {
    return (
        <div>
            <StaffBio
                name="Keaton Daniel"
                role="College Staff"
                image={keatonImage}
                bio="Keaton is passionate about student development and providing mentorship. He works closely with students to help them grow in their leadership and faith journeys."
            />
        </div>
    );
};

export default Keaton;
