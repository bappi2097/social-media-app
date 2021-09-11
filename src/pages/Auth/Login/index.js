import Card from "../../../components/UI/Card";
import classes from "./style.module.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { Fragment } from "react";
const Login = () => {
    return (
        <Fragment>
            <div className={classes.login__div}>
                <div className={classes.left__div}></div>
                <div className={classes.right__div}>
                    <Card className={classes.login_form}>
                        <form>
                            <div>
                                <h1>Instagram</h1>
                            </div>
                            <div className={classes.form__control}>
                                <label htmlFor="email">Email</label>
                                <input type="email" className={classes.email} />
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
                            <button className={classes.login}>Log In </button>
                            <p className={classes.or}>OR</p>
                            <a href="/" className={classes.facebook__login}>
                                <FaFacebookSquare /> &nbsp;
                                <span>Log in with Facebook</span>
                            </a>
                            <a href="/" className={classes.forget__password}>
                                Forget Password?
                            </a>
                        </form>
                    </Card>
                    <Card className={classes.signup__div}>
                        <p>
                            Don't have an account? <a href="/signup">Sign Up</a>
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

export default Login;
