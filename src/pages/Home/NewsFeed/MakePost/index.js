import placeholder from "../../../../assets/images/placeholder.svg";
import Card from "../../../../components/UI/Card";
import classes from "./style.module.scss";
const MakePost = () => {
    // const image = document.querySelector("#image");
    // const input_img = document.querySelector("#input-img");
    // input_img.addEventListener("input", (e) => {
    //     let reader = new FileReader();
    //     reader.onload = (e) => {
    //         image.src = e.target.result;
    //     };
    //     reader.readAsDataURL(e.target.files[0]);
    // });
    return (
        <Card className={classes.make_post}>
            <form>
                <textarea></textarea>
                <div className={classes.footer}>
                    <div className={classes.img_div}>
                        <button type="button" className={classes.img_btn}>
                            <img
                                className={classes.show_img}
                                src={placeholder}
                                alt="Dummy"
                            />
                        </button>
                        <input
                            className={classes.img_input}
                            type="file"
                            accept="image/*"
                        />
                    </div>
                    <button className={classes.post_btn}>Post</button>
                </div>
            </form>
        </Card>
    );
};

export default MakePost;
