import { Fragment } from "react";
import NavBar from "../../../components/NavBar";
import Container from "../../../components/UI/Container";
import classes from "./style.module.scss";
import MyDay from "./MyDay";
import Post from "./Post";
import MakePost from "./MakePost";
const Newsfeed = () => {
    return (
        <Fragment>
            <NavBar />
            <Container className={classes.container}>
                <div className={classes.left_div}>
                    <MakePost />
                    <MyDay />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className={classes.right_div}></div>
            </Container>
        </Fragment>
    );
};

export default Newsfeed;
