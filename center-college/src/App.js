import './StyleSheets/App.css';
import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Miscellaneous/ScrollToTop";
import Footer from "./Miscellaneous/Footer";
import Home from "./Tabs/Home";
import CommunityGroups from "./Tabs/Community Groups";
import UpcomingEvents from "./Tabs/UpcomingEvents";
import Leaders from "./Tabs/Leaders";
import Jose from "./Staff Pages/Jose";
import Mike from "./Staff Pages/Mike";
import Erin from "./Staff Pages/Erin";
import Keaton from "./Staff Pages/Keaton";
import Liv from "./Staff Pages/Liv";

function App() {

    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/community-group" element={<CommunityGroups />} />
                <Route path="/upcoming-events" element={<UpcomingEvents />} />
                <Route path="/leaders" element={<Leaders />} />
                <Route path="/jose" element={<Jose/>} />
                <Route path="/erin" element={<Erin/>} />
                <Route path="/keaton" element={<Keaton/>} />
                <Route path="/mike" element={<Mike/>} />
                <Route path="/liv" element={<Liv/>} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
