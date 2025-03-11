import React, { useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { database } from "./Firebase";
import '../StyleSheets/Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleLogin = async () => {
        setError(null);
        const usersRef = ref(database, 'users');

        try {
            const snapshot = await get(usersRef);

            if (snapshot.exists()) {
                let validUser = false;

                snapshot.forEach((childSnapshot) => {
                    const userEmail = childSnapshot.key;
                    const userPassword = childSnapshot.val();

                    if (userEmail === email && userPassword === password) {
                        validUser = true;
                    }
                });

                if (validUser) {
                    setShowPopup(true);
                } else {
                    setError("Invalid credentials");
                }
            } else {
                setError("No users found in database");
            }
        } catch (error) {
            console.error("Error getting data: ", error);
            setError("Error while logging in");
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="login-container">
            <h2>Student Leader Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            {error && <p className="error">{error}</p>}

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Login Successful!</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
