import { Fragment, useEffect, useState } from "react";
import NavBar from "../../../components/NavBar";
import Container from "../../../components/UI/Container";
import classes from "./style.module.scss";
import MyDay from "./MyDay";
import Post from "./Post";
import MakePost from "./MakePost";
import { getAllPosts } from "../../../services/api";
const Newsfeed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            await getAllPosts()
                .then((response) => setPosts(response))
                .catch((error) => console.log(error));
        };
        fetchPosts();
    }, []);
    return (
        <Fragment>
            <NavBar />
            <Container className={classes.container}>
                <div className={classes.left_div}>
                    <MakePost />
                    <MyDay />
                    {posts.length > 0 &&
                        posts.map((post) => <Post key={post.id} data={post} />)}
                </div>
                <div className={classes.right_div}></div>
            </Container>
        </Fragment>
    );
};

export default Newsfeed;
