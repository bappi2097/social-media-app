import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "./pages/Auth/Login";
import "./App.css";
import SignUp from "./pages/Auth/SignUp";
import Newsfeed from "./pages/Home/NewsFeed";
import AuthContext from "./store/auth-context";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    {!auth.isLoggedIn && <Redirect to="/login"></Redirect>}
                    {auth.isLoggedIn && <Redirect to="/newsfeed"></Redirect>}
                </Route>
                <Route path="/signup" exact>
                    {auth.isLoggedIn && <Redirect to="/newsfeed"></Redirect>}
                    <SignUp />
                </Route>
                <Route path="/login">
                    {auth.isLoggedIn && <Redirect to="/newsfeed"></Redirect>}
                    <Login />
                </Route>
                <Route path="/newsfeed">
                    {!auth.isLoggedIn && <Redirect to="/login"></Redirect>}
                    {auth.isLoggedIn && <Newsfeed />}
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
