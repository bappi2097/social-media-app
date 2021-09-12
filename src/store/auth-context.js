import React, { useState, useEffect } from "react";
const AuthContext = React.createContext({
    id: "",
    email: "",
    fullName: "",
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (id, email, fullName) => {},
});

export const AuthContextProvider = (props) => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user_id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");

    useEffect(() => {
        if (storedUserLoggedInInfo === "1") {
            setIsLoggedIn(true);
        }
    }, [storedUserLoggedInInfo]);

    const loginHandler = (id, email, fullName) => {
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("id", id);
        localStorage.setItem("email", email);
        localStorage.setItem("fullname", fullName);
        setId(id);
        setEmail(email);
        setFullName(fullName);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("id");
        localStorage.removeItem("fullname");
        setId("");
        setEmail("");
        setFullName("");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                id: user_id,
                email: email,
                fullName: fullName,
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
