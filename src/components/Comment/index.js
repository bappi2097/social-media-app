import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import classes from "./style.module.scss";
const Comment = (props) => {
    return (
        <div className={classes.public_comment}>
            <div className={classes.comment}>
                <a href="/">{props.data.userName}</a>
                {props.data.comment}
            </div>
            <span className={classes.comment_heart}>
                <AiOutlineHeart />
            </span>
        </div>
    );
};

export default Comment;
