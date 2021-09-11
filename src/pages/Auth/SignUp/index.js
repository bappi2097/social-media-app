import Card from "../../../components/UI/Card";
import classes from "./style.module.scss";
import { Fragment } from "react";
const SignUp = () => {
    return (
        <Fragment>
            <div className={classes.signup__div}>
                <div className={classes.right__div}>
                    <Card className={classes.signup_form}>
                        <form>
                            <div>
                                <h1>Instagram</h1>
                            </div>
                            <div className={classes.form__control}>
                                <label htmlFor="email">Email</label>
                                <input type="email" className={classes.email} />
                            </div>
                            <div className={classes.form__control}>
                                <label htmlFor="full_name">Full Name</label>
                                <input type="text" className={classes.email} />
                            </div>

                            <div className={classes.form__control}>
                                <label htmlFor="user_name">Username</label>
                                <input type="text" className={classes.email} />
                            </div>
                            <div
                                className={`${classes.form__control} ${classes.group}`}
                            >
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className={classes.password}
                                />
                                <button type="button" className={classes.btn}>
                                    Show
                                </button>
                            </div>
                            <button className={classes.signup}>Sign up </button>
                            <p className={classes.no}>
                                Lorem ipsum dolor sit amet conse noen
                            </p>
                        </form>
                    </Card>
                    <Card className={classes.login__div}>
                        <p>
                            Already have an account? <a href="/login">Log In</a>
                        </p>
                    </Card>
                    <div className={classes.get__app}>
                        <p>Get the app.</p>
                        <div>
                            <a href="/">App Store</a>
                            <a href="/">Google Play</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.links}>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                    <a href="/">About</a>
                </div>
                <div className={classes.copyright}>
                    @2021 Instagram from facebook
                </div>
            </div>
        </Fragment>
    );
};

export default SignUp;
