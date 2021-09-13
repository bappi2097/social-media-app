import React from "react";
import {
    AiOutlineEllipsis,
    AiOutlineHeart,
    AiOutlineSend,
} from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import Card from "../../../../components/UI/Card";
import classes from "./style.module.scss";
import userImg from "../../../../assets/images/user/user-1.jpg";
import PostComment from "./PostComment";
import Likes from "./Likes";
const Post = (props) => {
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
                    <AiOutlineHeart />
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
