import './StyleSheets/App.css';
import React from "react";
import { Link } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Miscellaneous/ScrollToTop";
import Footer from "./Miscellaneous/Footer";
import Home from "./Tabs/Home";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


function App() {


    const LabelBottomNavigation = () => {
        const [value, setValue] = React.useState('recents');


        const handleChange = (event: React.SyntheticEvent, newValue: string) => {
            setValue(newValue);
        };


        return (
            <BottomNavigation
                sx={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    background: 'black ',
                    color: 'white',
                    zIndex: 1000,
                    height: '64px',
                }}
                value={value}
                onChange={handleChange}
                showLabels
            >


                <BottomNavigationAction
                    label="Home"
                    value=""
                    component={Link}
                    to="/"
                    sx={{
                        color: 'white', // Set text color to white
                        fontSize: '3 rem', // Set font size
                        fontWeight: 'bold', // Set font weight to bold
                    }}
                />
                <BottomNavigationAction
                    label="Connect Four"
                    value="connect-four"
                    component={Link}
                    to="/connect-four"
                    sx={{
                        color: 'white',
                        fontSize: '3 rem',
                        fontWeight: 'bold',
                    }}
                />
                <BottomNavigationAction
                    label="Tic Tac Toe"
                    value="tic-tac-toe"
                    component={Link}
                    to="/tic-tac-toe"
                    sx={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}
                />
                <BottomNavigationAction
                    label="Whack A Mole"
                    value="whack-a-mole"
                    component={Link}
                    to="/whack-a-mole"
                    sx={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}
                />
                <BottomNavigationAction
                    label="Rock Paper Scissors"
                    value="rock-paper-scissors"
                    component={Link}
                    to="/rock-paper-scissors"
                    sx={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}
                />
                <BottomNavigationAction
                    label="Memory Match"
                    value="memory-match"
                    component={Link}
                    to="/memory-match"
                    sx={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}
                />
                <BottomNavigationAction
                    label="Hangman"
                    value="hangman"
                    component={Link}
                    to="/hangman"
                    sx={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}
                />
                <BottomNavigationAction
                    label="About"
                    value="about"
                    component={Link}
                    to="/about"
                    sx={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}
                />
            </BottomNavigation>
        );
    };

    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <LabelBottomNavigation />
            <Footer />
        </HashRouter>
    );
}

export default App;
