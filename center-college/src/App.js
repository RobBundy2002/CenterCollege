import './StyleSheets/App.css';
import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Miscellaneous/ScrollToTop";
import Footer from "./Miscellaneous/Footer";
import Home from "./Tabs/Home";

function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
