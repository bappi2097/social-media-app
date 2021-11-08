import { useCallback, useEffect, useMemo, useState } from "react";
import Container from "../../../components/UI/Container";
import classes from "./style.module.scss";
import MyDay from "../../../components/MyDay";
import Post from "../../../components/Post";
import CreatePost from "../../../components/CreatePost";
import { getAllPosts } from "../../../services/api";
const Home = () => {
    const [posts, setPosts] = useState([]);
    const [myDays, setMyDays] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            await getAllPosts()
                .then((response) => setPosts(response))
                .catch((error) => console.log(error));
        };
        fetchPosts();
    }, []);
    const newPostCreate = (post) => {
        setPosts([...posts, post]);
    };

    const scrollHandler = useCallback(() => {
        setMyDays([...myDays, {}]);
    }, [setMyDays, myDays]);

    return (
        <Container className={classes.container}>
            <div className={classes.left_div}>
                <CreatePost onCreate={newPostCreate} />
                <MyDay
                    arrayItem={useMemo(() => [1, 2, 3, 4], [])}
                    data={myDays}
                    onScroll={scrollHandler}
                />
                {posts.length > 0 &&
                    posts.map((post) => (
                        <Post key={post.id} isLiked={false} data={post} />
                    ))}
            </div>
            <div className={classes.right_div}></div>
        </Container>
    );
};

export default Home;
