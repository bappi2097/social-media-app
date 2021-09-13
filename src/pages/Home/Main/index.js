import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Navbar from "../../../components/NavBar";
import NotFoundPage from "../../NotFoundPage";
import Home from "../NewsFeed";
import Timeline from "../Timeline";
const Main = () => {
    return (
        <Fragment>
            <Switch>
                <Route to="/" exact>
                    <Home />
                </Route>

                <Route to="/timeline">
                    <Timeline />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </Fragment>
    );
};

export default Main;
