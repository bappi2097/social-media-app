import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "./pages/Auth/Login";
import "./App.css";
import SignUp from "./pages/Auth/SignUp";
import Main from "./pages/Home/Main";
import AuthContext from "./store/auth-context";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";

function App() {
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            <Switch>
                <Route path="/signup" exact>
                    {auth.isLoggedIn && <Redirect to="/"></Redirect>}
                    <SignUp />
                </Route>
                <Route path="/login">
                    {auth.isLoggedIn && <Redirect to="/"></Redirect>}
                    <Login />
                </Route>
                <Route path="/">
                    {!auth.isLoggedIn && <Redirect to="/login"></Redirect>}
                    {auth.isLoggedIn && <NavBar />}
                    {auth.isLoggedIn && <Main />}
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
