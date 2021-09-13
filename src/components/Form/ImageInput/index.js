import React, { useRef } from "react";
import classes from "./style.module.scss";

import placeholder from "../../../assets/images/placeholder.svg";
const ImageInput = (props) => {
    const image = useRef();
    const input_img = useRef();
    const imageInputHandler = (e) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            image.current.src = e.target.result;
            props.onImageChange(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
        image.current.src = placeholder;
    };
    return (
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
    );
};

export default ImageInput;
