import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "./pages/Auth/Login";
import "./App.css";
import SignUp from "./pages/Auth/SignUp";
import Newsfeed from "./pages/Home/NewsFeed";

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/newsfeed"></Redirect>
                </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/newsfeed">
                    <Newsfeed />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
