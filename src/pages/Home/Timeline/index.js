import { useEffect, useState } from "react";
import Container from "../../../components/UI/Container";
import classes from "./style.module.scss";
import Post from "../Timeline/Post";
import { getAllPosts } from "../../../services/api";
const Timeline = () => {
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
        <Container className={classes.container}>
            <div className={classes.left_div}>
                {posts.length > 0 &&
                    posts.map((post) => <Post key={post.id} data={post} />)}
            </div>
            <div className={classes.right_div}></div>
        </Container>
    );
};

export default Timeline;
