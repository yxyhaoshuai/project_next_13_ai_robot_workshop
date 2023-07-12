import React, { useState, useEffect } from "react";
import axios from "axios";

function ImageComponent(props) {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchImageData = async () => {
            const response = await axios.get(props.imageUrl, { responseType: "arraybuffer" });
            const binaryImageData = Buffer.from(response.data, "binary");
            const base64ImageData = btoa(String.fromCharCode(...new Uint8Array(binaryImageData)));
            setImageData(base64ImageData);
        };
        fetchImageData();
    }, [props.imageUrl]);

    return (
        <div>
            {imageData ? (
                <img src={`data:image/png;base64,${imageData}`} alt="图片" />
            ) : (
                <p>正在加载图片...</p>
            )}
        </div>
    );
}

export default ImageComponent;