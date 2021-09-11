import { Image, CloudinaryContext } from "cloudinary-react";
const Cloudinary = () => {
    return (
        <CloudinaryContext cloudName="social-media-f8e9f">
            <div>
                <Image publicId="sample" width="50" />
            </div>
            <Image publicId="sample" width="0.5" />
        </CloudinaryContext>
    );
};

export default Cloudinary;
