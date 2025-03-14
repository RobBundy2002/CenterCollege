import React from 'react';
import StaffBio from './StaffBio';
import livImage from '../Images/Liv Image.png';

const Liv = () => {
    return (
        <div>
            <StaffBio
                name="Liv Didat"
                role="College Staff"
                image={livImage}
                bio="Liv has been serving at Center College for several years. She is passionate about building strong relationships with students and helping them grow spiritually and personally."
            />
        </div>
    );
};

export default Liv;
