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
const Post = () => {
    return (
        <Card className={classes.post}>
            <div className={classes.post_nav}>
                <div className={classes.user}>
                    <img src={userImg} alt="john doe" />
                    <span>john_doe</span>
                </div>
                <span className={classes.dots}>
                    <AiOutlineEllipsis />
                </span>
            </div>
            <div className={classes.content}>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloremque necessitatibus labore mollitia ratione, magnam
                    dolorum! Accusantium asperiores soluta quos itaque a quasi,
                    perferendis perspiciatis alias temporibus inventore dolorum
                    suscipit mollitia?
                </p>
                <img src={userImg} alt="John Doe" />
            </div>
            <div className={classes.social_iteraction}>
                <div>
                    <AiOutlineHeart />
                    <BsChat />
                    <AiOutlineSend />
                </div>
                <FaRegBookmark />
            </div>
            <div className={classes.liked_by}>
                <img src={userImg} alt="john_doe" />
                <span>
                    Liked by <a href="/">fuad.kabir.1r8 </a> and
                    <a href="/">18 others</a>
                </span>
            </div>
            <div className={classes.public_comment}>
                <div className={classes.comment}>
                    <a href="/">john.doe</a>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis magnam, dignissimos cupiditate alias doloremque
                    deserunt praesentium incidunt rerum illum quod?
                </div>
                <span className={classes.comment_heart}>
                    <AiOutlineHeart />
                </span>
            </div>
            <p className={classes.post_date}>Auguest 9</p>
            <div className={classes.post_comment}>
                <form>
                    <input type="text" placeholder="Add a comment..." />
                    <button type="button">Post</button>
                </form>
            </div>
        </Card>
    );
};

export default Post;
