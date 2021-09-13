import Card from "../../../components/UI/Card";
import classes from "./style.module.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { Fragment, useReducer, useContext } from "react";
import Input from "../../../components/Form/Input";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from "../../../services/api";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../store/auth-context";

const formReducer = (state, action) => {
    switch (action.type) {
        case "EMAIL_INPUT":
            return {
                ...state,
                email: action.value,
                emailIsValid: action.isValid,
                formIsValid: action.isValid && state.passwordIsValid,
            };
        case "PASSWORD_INPUT":
            return {
                ...state,
                password: action.value,
                passwordIsValid: action.isValid,
                formIsValid: state.emailIsValid && action.isValid,
            };
        default:
            return { ...state };
    }
};
const initialFormData = {
    email: "",
    password: "",
    emailIsValid: false,
    passwordIsValid: false,
    formIsValid: false,
};

const Login = () => {
    const { sendRequest, data: userData } = useHttp(getAllUsers, true);

    const authContext = useContext(AuthContext);
    const [formState, dispatchState] = useReducer(formReducer, initialFormData);
    const history = useHistory();

    const loginSubmitHandler = async (event) => {
        event.preventDefault();
        const getRequest = () => {
            sendRequest().then((response) => {
                console.log(response);
                userData.forEach((item) => {
                    if (
                        item.email === formState.email &&
                        item.password === formState.password
                    ) {
                        authContext.onLogin(item.id, item.email, item.fullName);
                        history.push({
                            pathname: "/home",
                        });
                    }
                });
            });
        };
        getRequest();
    };

    const emailValues = (value, isValid = false) => {
        dispatchState({ type: "EMAIL_INPUT", value, isValid });
    };

    const passwordValues = (value, isValid = false) => {
        dispatchState({ type: "PASSWORD_INPUT", value, isValid });
    };
    return (
        <Fragment>
            <div className={classes.login__div}>
                <div className={classes.left__div}></div>
                <div className={classes.right__div}>
                    <Card className={classes.login_form}>
                        <form onSubmit={loginSubmitHandler}>
                            <div>
                                <h1>Instagram</h1>
                            </div>
                            <Input
                                type="email"
                                id="email"
                                label="Email"
                                inputValues={emailValues}
                                validation={(value) => value.includes("@")}
                            />

                            <Input
                                type="password"
                                id="password"
                                label="Password"
                                inputValues={passwordValues}
                                validation={(value) => value.length > 7}
                            />
                            <button
                                disabled={!formState.formIsValid}
                                className={classes.login_btn}
                            >
                                Log In
                            </button>
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
                            Don't have an account?
                            <Link to="/signup">Sign Up</Link>
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
