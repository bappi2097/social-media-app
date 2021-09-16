import { Fragment, useEffect, useState } from "react";
import classes from "./style.module.scss";
import Comment from "../Comment";
import { addComment, getPostComments } from "../../services/api";
const PostComment = (props) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const userId = localStorage.getItem("id");
    const userFullName = localStorage.getItem("fullname");
    const postId = props.postId;

    const commentChangeHandler = (event) => {
        setComment(event.target.value);
    };

    useEffect(() => {
        getPostComments(userId, postId).then((response) =>
            setComments([...response])
        );
    }, [postId, userId]);

    const commentSubmitHandler = (event) => {
        event.preventDefault();
        const commentData = {
            comment: comment,
            userName: userFullName,
        };
        addComment(userId, postId, commentData)
            .then((response) => {
                setComments([
                    ...comments,
                    { ...commentData, id: response.data.name },
                ]);
                setComment("");
            })
            .catch((error) => console.error(error));
    };

    return (
        <Fragment>
            {comments.length > 0 &&
                comments.map((item) => <Comment key={item.id} data={item} />)}
            <div className={classes.post_comment}>
                <form onSubmit={commentSubmitHandler}>
                    <input
                        value={comment}
                        type="text"
                        placeholder="Add a comment..."
                        onChange={commentChangeHandler}
                    />
                    <button>Post</button>
                </form>
            </div>
        </Fragment>
    );
};

export default PostComment;
