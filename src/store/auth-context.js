import React, {useState, useEffect} from 'react';
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { },
    publicKey: "_Mn8JTtQnSz-c-PEVMvlexWE5BUl6L8WfNyrqqBYoHM",
    privateKey: "lLBh2mn5dF0PPV021iJGziIdVtHFnsFSo-8UY6h-yZM"
});

export const AuthContextProvider = (props) => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  

    useEffect(() => {
        if (storedUserLoggedInInfo === '1') {
            setIsLoggedIn(true);
        }
    }, [storedUserLoggedInInfo]);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
                publicKey: "_Mn8JTtQnSz-c-PEVMvlexWE5BUl6L8WfNyrqqBYoHM",
                privateKey: "lLBh2mn5dF0PPV021iJGziIdVtHFnsFSo-8UY6h-yZM"
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
