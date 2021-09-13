import Card from "../../../../components/UI/Card";
import classes from "./style.module.scss";
import userImg from "../../../../assets/images/user/user-1.jpg";
import React, { Fragment } from "react";
const MyDay = (props) => {
    return (
        <Fragment>
            <h5 className={classes.text}>See Daily Story</h5>
            <Card className={classes.myday_div}>
                <ul className={classes.items}>
                    <li className={classes.item}>
                        <Card className={classes.image_div}>
                            <img src={userImg} alt="John doe" />
                        </Card>
                        <div className={classes.name}>
                            <span>John doe</span>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <Card className={classes.image_div}>
                            <img src={userImg} alt="John doe" />
                        </Card>
                        <div className={classes.name}>
                            <span>John doe</span>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <Card className={classes.image_div}>
                            <img src={userImg} alt="John doe" />
                        </Card>
                        <div className={classes.name}>
                            <span>John doe</span>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <Card className={classes.image_div}>
                            <img src={userImg} alt="John doe" />
                        </Card>
                        <div className={classes.name}>
                            <span>John doe</span>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <Card className={classes.image_div}>
                            <img src={userImg} alt="John doe" />
                        </Card>
                        <div className={classes.name}>
                            <span>John doe</span>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <Card className={classes.image_div}>
                            <img src={userImg} alt="John doe" />
                        </Card>
                        <div className={classes.name}>
                            <span>John doe</span>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <Card className={classes.image_div}>
                            <img src={userImg} alt="John doe" />
                        </Card>
                        <div className={classes.name}>
                            <span>John doe</span>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <Card className={classes.image_div}>
                            <img src={userImg} alt="John doe" />
                        </Card>
                        <div className={classes.name}>
                            <span>John doe</span>
                        </div>
                    </li>
                    <li className={classes.item}>
                        <Card className={classes.image_div}>
                            <img src={userImg} alt="John doe" />
                        </Card>
                        <div className={classes.name}>
                            <span>John doe</span>
                        </div>
                    </li>
                </ul>
            </Card>
        </Fragment>
    );
};
export default React.memo(MyDay);
