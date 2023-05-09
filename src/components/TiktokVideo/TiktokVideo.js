import React from "react";
import './TiktokVideo.css';
import Video from '../../video/file_example_MP4_640_3MG.mp4';
const TiktokVideo = () => {
    return (
        <>
            <div className="d-flex tik-tok flex-column align-items-center mt-5 pt-5">
                <h3>Watch Our Latest Tik Tok!</h3>
                <video className="mt-3" src={Video} autoPlay controls />
                <div className="footer mt-5">
                    <p>2023 Copyright of Ten Engineering & Service Pte Ltd</p>
                </div>
            </div>
        </>
    );
}
export default TiktokVideo