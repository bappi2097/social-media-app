import React, { useState } from "react";
import {
    AiOutlineEllipsis,
    AiOutlineHeart,
    AiFillHeart,
    AiOutlineSend,
} from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import Card from "../UI/Card";
import classes from "./style.module.scss";
import userImg from "../../assets/images/user/user-1.jpg";
import PostComment from "../PostComment";
import Likes from "../Likes";
import { likePost } from "../../services/api";

const Post = (props) => {
    const [isLiked, setIsLiked] = useState(props.isLiked);
    const userId = localStorage.getItem("id");
    const userFullName = localStorage.getItem("fullname");
    const postId = props.data.id;
    const likeClickHandler = () => {
        likePost(userId, postId, {
            status: !isLiked,
            userId: userId,
            userName: userFullName,
            likes: [],
        });
        setIsLiked(!isLiked);
    };
    return (
        <Card className={classes.post}>
            <div className={classes.post_nav}>
                <div className={classes.user}>
                    <img src={userImg} alt="john doe" />
                    <span>{props.data.userName}</span>
                </div>
                <span className={classes.dots}>
                    <AiOutlineEllipsis />
                </span>
            </div>
            <div className={classes.content}>
                <p>{props.data.content}</p>
                <img src={props.data.image} alt="John Doe" />
            </div>
            <div className={classes.social_iteraction}>
                <div>
                    {!isLiked && <AiOutlineHeart onClick={likeClickHandler} />}
                    {isLiked && (
                        <AiFillHeart
                            className={classes.heart}
                            onClick={likeClickHandler}
                        />
                    )}
                    <BsChat />
                    <AiOutlineSend />
                </div>
                <FaRegBookmark />
            </div>
            <Likes />
            <PostComment postId={props.data.id} />
        </Card>
    );
};

export default Post;
