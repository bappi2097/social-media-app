import classes from "./style.module.scss";
const Card = (props) => {
    const class_name = `${classes.card} ${props.className}`;
    return <div className={class_name}>{props.children}</div>;
};

export default Card;
