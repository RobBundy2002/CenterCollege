import React from 'react';
import '../StyleSheets/CommunityGroups.css';
import GrantAndFouchy from '../Images/GrantAndFouchy.png';
import SarahAndJackie from '../Images/SarahandJackie.png';
import AshleyAndGracie from '../Images/AshleyAndGracie.png';
import AdamaryAndAnikaAndPeyton from '../Images/AdamaryAndAnikaAndPeyton.png';
import StokeyAndMicaiah from '../Images/StokeyAndMicaiah.png';
import KaylynAndJulia from '../Images/KaylynAndJulia.png';
import BackButton from "../Miscellaneous/BackButton";
import Footer from "../Miscellaneous/Footer";
const CommunityGroups = () => {
    const groups = [
        {
            name: "Group 1: 1st Year Guys",
            leaders: ["Rob Bundy, Austin Chappell, and Micah Shelton"],
            image: "https://via.placeholder.com/150",
            time: "Tuesdays at 8:00 PM",
            phone: "(276) 791-5068"
        },
        {
            name: "Group 2: 1st Year Guys ",
            leaders: ["Ethan Stokey and Micaiah Lee"],
            image: StokeyAndMicaiah,
            time: "Tuesdays at 8:00 PM",
            phone: "(512) 808-3603"
        },
        {
            name: "Group 3: 2nd and 3rd Year Guys",
            leaders: ["Grant Costello and Ethan Fouch"],
            image: GrantAndFouchy,
            time: "Mondays at 8:00 PM",
            phone: "(804) 629-3160"
        },
        {
            name: "Group 4: 2nd and 3rd Year Girls",
            leaders: ["Sarah Lambert and Jackie Harkins"],
            image: SarahAndJackie,
            time: "Tuesdays at 8:00 PM",
            phone: "(804) 514-0139"
        },
        {
            name: "Group 5: 1st Year Girls",
            leaders: ["Adamary Maldonaldo, Anika Singh, and Peyton Gergen"],
            image: AdamaryAndAnikaAndPeyton,
            time: "Mondays at 8:00 PM",
            phone: "(678) 927-3920"
        },
        {
            name: "Group 6: 1st Year Girls",
            leaders: ["Ashley Rommel and Gracie Williams"],
            image: AshleyAndGracie,
            time: "Wednesdays at 8:00 PM",
            phone: "(301) 278-2443"
        },
        {
            name: "Group 7: 1st Year Girls",
            leaders: ["Kaylyn Johnson and Julia Stiltner"],
            image: KaylynAndJulia,
            time: "Tuesdays at 7:15 PM",
            phone: "(434) 282-8606"
        }
    ];

    return (
        <div className="community-groups-container">
            <h1>Interested in a Community Group?</h1>
            <div className="group-list">
                {groups.map((group, index) => (
                    <div key={index} className="group-card">
                        <div className="group-header">
                            <img src={group.image} alt={group.name} className="cg-leader-image"/>
                            <div className="leaders">
                                <h2>{group.name}</h2>
                                <p>Leaders: {group.leaders.map((leader, idx) => (
                                    idx === group.leaders.length - 1
                                        ? leader
                                        : `${leader} & `
                                )).join('')}</p>
                            </div>
                        </div>
                        <div className="group-details">
                            <p><strong>Meeting Time:</strong> {group.time}</p>
                            <p><strong>Contact:</strong> {group.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
            <BackButton customClass="cg-back-button"/>
            <div className="community-group-description">
                <h2>What is a Community Group?</h2>
                <p>
                    Community groups are small, informal gatherings of people where you can grow together, study, pray,
                    and support one another.
                </p>
            </div>
            <div className="footer-container-cg">
                <Footer/>
            </div>
        </div>
    );
};

export default CommunityGroups;
