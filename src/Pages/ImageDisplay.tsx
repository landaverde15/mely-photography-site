import React, { useEffect, useState } from 'react';
import '../App.css';
import { BarLoader, HashLoader } from 'react-spinners';

function ImageDisplay() {
    let [images, setImages] = useState<string[]>([]);
    let [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://melysite.azurewebsites.net/api/MelyPhotos/GetImages")
        .then(response => response.json())
        .then(data => {
            const byteStrings:string[] = [];
            data.photos.slice().reverse().forEach((image:any, index:number) => {
                byteStrings.push(image.photo);
            });
            setImages(byteStrings);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="ImageDisplay">
            <div className="flexRow">
                {isLoading ? <div className="HashLoaderDiv"><HashLoader color="#9436d6" /></div> : ""}
                {images.map(item =>
                <div className="flexItemImage">
                    <img src={"data:image/jpg;base64," + item} className="image" alt="portfolio"/>
                </div>)}
            </div>
        </div>
    );
}

export default ImageDisplay;

{/* <div className="flexRow">
                    {images.map(item =>
                    <div className="flexItemImage">
                        <img src={"data:image/jpg;base64," + item} className="image" alt="portfolio"/>
                    </div>)}
                </div> */}