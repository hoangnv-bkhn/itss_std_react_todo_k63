import React, { useState } from 'react'

import { uploadImage } from "../lib/firebase";

function Upload({ userImage, onSelectedImage }) {
    const [isModal, setIsModal] = useState(false);
    const active = isModal ? "is-active" : "";
    const [imageUrl, setImageUrl] = useState(userImage);

    const handleImage = async event => {
        const image = event.target.files[0];
        const imageUrl = await uploadImage(image);
        onSelectedImage(imageUrl);
        setImageUrl(imageUrl);
    };
    // console.log(imageUrl)

    const handleClick = () => {
        setIsModal(!isModal);
    };

    const ImageViewer = () => {
        if (!imageUrl) {
            return <i className="fas fa-user"></i>
        } else {
            return (
                <div>
                    <img alt="avatar" src={imageUrl} />
                </div>
            )
        }
    }

    return (
        <div className="App">
            <div className={`modal ${active}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="file is-boxed" >
                        <label className="file-label">
                            <input className="file-input" type="file" name="resume" onChange={handleImage} />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">Please select an image</span>
                            </span>
                        </label>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={handleClick}></button>
                </div>
            </div>
            <button onClick={handleClick} className="button is-primary is-inverted">
                <span className="icon">
                    <ImageViewer />
                </span>
            </button>
        </div >
    );
}

export default Upload


