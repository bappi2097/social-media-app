import React, { useContext, useRef, useState } from "react";
import placeholder from "../../../../assets/images/placeholder.svg";
import Card from "../../../../components/UI/Card";
import classes from "./style.module.scss";
import { addPost } from "../../../../services/api";
const MakePost = () => {
    const [content, setContent] = useState("");
    const [imageState, setImageState] = useState("");
    const image = useRef();
    const input_img = useRef();
    const imageInputHandler = (e) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            image.current.src = e.target.result;
            setImageState(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    };
    const formSubmitHandler = (event) => {
        event.preventDefault();
        addPost(localStorage.getItem("id"), {
            content: content,
            image: imageState,
        })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };
    return (
        <Card className={classes.make_post}>
            <form onSubmit={formSubmitHandler}>
                <textarea onChange={contentChangeHandler}></textarea>
                <div className={classes.footer}>
                    <div className={classes.img_div}>
                        <button type="button" className={classes.img_btn}>
                            <img
                                ref={image}
                                className={classes.show_img}
                                src={placeholder}
                                alt="Dummy"
                            />
                        </button>
                        <input
                            onInput={imageInputHandler}
                            ref={input_img}
                            className={classes.img_input}
                            type="file"
                            accept="image/*"
                        />
                    </div>
                    <button className={classes.post_btn}>Post</button>
                </div>
            </form>
        </Card>
    );
};

export default MakePost;
