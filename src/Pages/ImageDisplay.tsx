import React, { useEffect, useState } from 'react';
import '../App.css';

function ImageDisplay() {
    let [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetch("https://elandave-001-site1.dtempurl.com/api/MelyPhotos/GetImages")
        .then(response => response.json())
        .then(data => {
            const updatedUrls:string[] = [];
            data.photos.forEach((photo:any, index:number) => {
                updatedUrls.push(photo.replace(`h:\\root\\home\\elandave-001\\www\\MelyAPI\\wwwroot\\Uploads/`, `http://elandave-001-site1.dtempurl.com/Uploads/`));
            });
            setImages(updatedUrls);});
        
    }, []);

    return (
        <div className="ImageDisplay">
            <div className="flexRow">
                {images.map(item =>
                <div className="flexItemImage">
                    <img src={item} className="image" alt="portfolio"/>
                </div>)}
            </div>
        </div>
    );
}

export default ImageDisplay;
