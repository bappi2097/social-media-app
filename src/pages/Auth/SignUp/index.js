import { Fragment, useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./style.module.scss";
import Card from "../../../components/UI/Card";
import Input from "../../../components/Form/Input";
import { signUp } from "../../../services/api";
import useHttp from "../../../hooks/use-http";

const formReducer = (state, action) => {
    switch (action.type) {
        case "EMAIL_INPUT":
            return {
                ...state,
                email: action.value,
                emailIsValid: action.isValid,
                formIsValid:
                    action.isValid &&
                    state.passwordIsValid &&
                    state.fullNameIsValid,
            };
        case "FULLNAME_INPUT":
            return {
                ...state,
                fullName: action.value,
                fullNameIsValid: action.isValid,
                formIsValid:
                    state.emailIsValid &&
                    state.passwordIsValid &&
                    action.isValid,
            };
        case "PASSWORD_INPUT":
            return {
                ...state,
                password: action.value,
                passwordIsValid: action.isValid,
                formIsValid:
                    state.emailIsValid &&
                    action.isValid &&
                    state.fullNameIsValid,
            };
        default:
            return { ...state };
    }
};

const initialFormData = {
    email: "",
    fullName: "",
    password: "",
    emailIsValid: false,
    fullNameIsValid: false,
    passwordIsValid: false,
    formIsValid: false,
};

const SignUp = () => {
    const [formState, dispatchState] = useReducer(formReducer, initialFormData);
    const { sendRequest } = useHttp(signUp);
    const history = useHistory();
    const signupSubmitHandler = (event) => {
        event.preventDefault();
        sendRequest({
            email: formState.email,
            fullName: formState.fullName,
            password: formState.password,
        });
        history.push({
            pathname: "/login",
        });
    };

    const emailValues = (value, isValid = false) => {
        dispatchState({ type: "EMAIL_INPUT", value, isValid });
    };

    const fullNameValues = (value, isValid = false) => {
        dispatchState({ type: "FULLNAME_INPUT", value, isValid });
    };

    const passwordValues = (value, isValid = false) => {
        dispatchState({ type: "PASSWORD_INPUT", value, isValid });
    };
    return (
        <Fragment>
            <div className={classes.signup__div}>
                <div className={classes.right__div}>
                    <Card className={classes.signup_form}>
                        <form onSubmit={signupSubmitHandler}>
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
                                type="text"
                                id="fullname"
                                label="Full Name"
                                inputValues={fullNameValues}
                                validation={(value) => value.length > 2}
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
                                className={classes.signup}
                            >
                                Sign up{" "}
                            </button>
                            <p className={classes.no}>
                                Lorem ipsum dolor sit amet conse noen
                            </p>
                        </form>
                    </Card>
                    <Card className={classes.login__div}>
                        <p>
                            Already have an account?
                            <Link to="/login">Log In</Link>
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
                </div>
                <div className={classes.copyright}>
                    @2021 Instagram from facebook
                </div>
            </div>
        </Fragment>
    );
};

export default SignUp;
