import React from 'react';
import StaffBio from './StaffBio';
import mikeImage from '../Images/Mike Image.png';
const Mike = () => {
    return (
        <div>
            <StaffBio
                name="Mike Matzeder"
                role="College Staff"
                image={mikeImage}
                bio="Mike has a heart for mentoring students and helping them grow in their academic and personal lives. He loves working closely with Center College's community."
            />
        </div>
    );
};

export default Mike;
