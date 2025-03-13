import './StyleSheets/App.css';
import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Miscellaneous/ScrollToTop";
import Footer from "./Miscellaneous/Footer";
import Home from "./Tabs/Home";
import LabelBottomNavigation from "./Miscellaneous/LabelBottomNavigation";
import CommunityGroups from "./Tabs/Community Groups";
import UpcomingEvents from "./Tabs/UpcomingEvents";
import Leaders from "./Tabs/Leaders";

function App() {

    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/community-group" element={<CommunityGroups />} />
                <Route path="/upcoming-events" element={<UpcomingEvents />} />
                <Route path="/leaders" element={<Leaders />} />
            </Routes>
            <LabelBottomNavigation />
            <Footer />
        </HashRouter>
    );
}

export default App;
