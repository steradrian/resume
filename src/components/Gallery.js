import React from 'react';
import './Gallery.css';
import GalleryCarousel from './GalleryCarousel';

function Gallery() {
    return (
        <div className="gallery">
            <h1>This is my gallery</h1>
            <div className="container">
                <div className="gallery-content">

                    <GalleryCarousel/>

                </div>
            </div>
            
        </div>
    )
}

export default Gallery
