import React from 'react';
import './GalleryCarousel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Avatar1 from './Avatar1.svg';
import Avatar2 from './Avatar2.svg';
import Avatar3 from './Avatar3.svg';

function GalleryCarousel() {
    return (
        <Carousel
            showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={3000}>
            <>
                <img src={Avatar1} alt="John Doe 1" />
                <div className="myCarousel">
                    <h3>John Doe 1</h3>
                    <p>This is a paragraph from the John Doe 1 </p>
                </div>
            </>

            <>
                <img src={Avatar2} alt="Jane Doe" />
                <div className="myCarousel">
                    <h3>Jane Doe</h3>
                    <p>This is a paragraph from the Jane Doe</p>
                </div>
            </>

            <>
                <img src={Avatar3} alt="John Doe 2" />
                <div className="myCarousel">
                    <h3>John Doe 2</h3>
                    <p>This is a paragraph from the John Doe 2 </p>
                </div>
            </>
        </Carousel>
    )
}

export default GalleryCarousel
