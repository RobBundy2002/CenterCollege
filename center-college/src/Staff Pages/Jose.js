import React from 'react';
import StaffBio from './StaffBio';
import joseImage from '../Images/Jose Image.png';

const Jose = () => {
    return (
        <div>
            <StaffBio
                name="Jose Concepcion"
                role="College Director"
                image={joseImage}
                bio="Jose is passionate about leadership and community building at Center College. He enjoys connecting with students and helping them grow in their faith."
            />
        </div>
    );
};

export default Jose;
