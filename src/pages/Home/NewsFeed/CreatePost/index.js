import React, { useState } from "react";
import Card from "../../../../components/UI/Card";
import classes from "./style.module.scss";
import { addPost } from "../../../../services/api";
import ImageInput from "../../../../components/Form/ImageInput";
const CreatePost = (props) => {
    const [content, setContent] = useState("");
    const [imageState, setImageState] = useState("");

    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    };
    const formSubmitHandler = (event) => {
        event.preventDefault();
        addPost(localStorage.getItem("id"), {
            content: content,
            image: imageState,
        })
            .then((response) => {
                props.onCreate({
                    id: response.name,
                    content: content,
                    image: imageState,
                    userName: localStorage.getItem("fullname"),
                });
                setContent("");
            })
            .catch((error) => console.error(error));
    };

    const imageChangeHandler = (value) => {
        setImageState(value);
    };

    return (
        <Card className={classes.make_post}>
            <form onSubmit={formSubmitHandler}>
                <textarea
                    value={content}
                    onChange={contentChangeHandler}
                ></textarea>
                <div className={classes.footer}>
                    <ImageInput onImageChange={imageChangeHandler} />
                    <button className={classes.post_btn}>Post</button>
                </div>
            </form>
        </Card>
    );
};

export default CreatePost;
