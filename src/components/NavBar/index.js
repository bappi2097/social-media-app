import classes from "./style.module.scss";
import {
    AiOutlineCompass,
    AiOutlineHome,
    AiOutlineHeart,
    AiOutlineSend,
    AiOutlineSearch,
} from "react-icons/ai";
import Container from "../UI/Container";

const NavBar = () => {
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
                                <a
                                    className={`${classes.nav__link} ${classes.nav__link}`}
                                    href="/"
                                >
                                    <AiOutlineHome />
                                </a>
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
                                <a className={classes.nav__link} href="/">
                                    <AiOutlineHeart />
                                </a>
                            </li>
                            <li className={classes.nav__item}>
                                <a className={classes.nav__link} href="/">
                                    <div></div>
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
