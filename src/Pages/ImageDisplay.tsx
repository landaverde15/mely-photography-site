import React, { useEffect, useState } from 'react';
import '../App.css';

function ImageDisplay() {
    let [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetch("https://melysite.azurewebsites.net/api/MelyPhotos/GetImages")
        .then(response => response.json())
        .then(data => {
            const byteStrings:string[] = [];
            data.photos.forEach((image:any, index:number) => {
                byteStrings.push(image.photo);
            });
            setImages(byteStrings);});
        
    }, []);

    return (
        <div className="ImageDisplay">
            <div className="flexRow">
                {images.map(item =>
                <div className="flexItemImage">
                    <img src={"data:image/jpg;base64," + item} className="image" alt="portfolio"/>
                </div>)}
            </div>
        </div>
    );
}

export default ImageDisplay;
