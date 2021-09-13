import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./style.module.scss";
import {
    AiOutlineCompass,
    AiOutlineHome,
    AiOutlineSend,
    AiOutlineSearch,
    AiOutlineLogout,
} from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Container from "../UI/Container";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const authContext = useContext(AuthContext);
    return (
        <nav className={classes.navbar}>
            <Container>
                <div className={classes.nav}>
                    <div className={classes.logo}>
                        <div>Instagram</div>
                    </div>
                    <div className={classes.search__div}>
                        <button
                            type="button"
                            className={classes.search__button}
                        >
                            <AiOutlineSearch />
                            &nbsp; Search
                        </button>
                        {/* <input
                            className={classes.search__input}
                            type="text"
                            placeholder="Search"
                        /> */}
                    </div>
                    <div className={classes.burger_div}>
                        <span className={classes.burger}></span>
                    </div>
                    <div className={classes.nav__links}>
                        <ul className={classes.nav__items}>
                            <li className={classes.nav__item}>
                                <NavLink
                                    activeClassName={classes.active}
                                    to="/"
                                    exact
                                >
                                    <AiOutlineHome />
                                </NavLink>
                            </li>
                            <li className={classes.nav__item}>
                                <a className={classes.nav__link} href="/">
                                    <AiOutlineSend />
                                </a>
                            </li>
                            <li className={classes.nav__item}>
                                <a className={classes.nav__link} href="/">
                                    <AiOutlineCompass />
                                </a>
                            </li>
                            <li className={classes.nav__item}>
                                <NavLink
                                    activeClassName={classes.active}
                                    to="/timeline"
                                >
                                    <FaRegUserCircle />
                                </NavLink>
                            </li>
                            <li className={classes.nav__item}>
                                <a className={classes.nav__link} href="/">
                                    <AiOutlineLogout
                                        onClick={authContext.onLogout}
                                        title="Logout"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
