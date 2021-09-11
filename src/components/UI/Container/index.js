import classes from "./style.module.scss";
const Container = (props) => {
    const class_name = `${classes.container} ${props.className}`;
    return <div className={class_name}>{props.children}</div>;
};

export default Container;
