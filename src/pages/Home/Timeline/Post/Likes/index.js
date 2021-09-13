import classes from "./style.module.scss";

import userImg from "../../../../../assets/images/user/user-1.jpg";
const Likes = (props) => {
    return (
        <div className={classes.liked_by}>
            <img src={userImg} alt="john_doe" />
            <span>
                Liked by <a href="/">fuad.kabir.1r8 </a> and
                <a href="/">18 others</a>
            </span>
        </div>
    );
};

export default Likes;
