import React, { useState } from 'react';
import '../StyleSheets/Carousel.css';
import CarouselImage from '../Images/CarouselImage.jpg'
import BackgroundImage from '../Images/background.jpg'
import CookoutImage from '../Images/Cookout.jpeg'
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            title: "Featured Verse of the Month",
            content: "Matthew 28:19-Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
            image: BackgroundImage
        },
        {
            title: "Center College United",
            content: "Join us for CCU each Thursday Evening, 8pm at the UVA Chapel.",
            image: CarouselImage
        },
        {
            title: "CG's: Community Groups",
            content: "Check out our community groups this week on the CG tab!",
            image: CookoutImage
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
    };

    return (
        <div className="carousel-container">
            <div className="carousel-slide">
                <img
                    src={items[currentIndex].image}
                    alt={items[currentIndex].title}
                    className="carousel-image"
                />
                <div className="carousel-content">
                    <h2>{items[currentIndex].title}</h2>
                    <p>{items[currentIndex].content}</p>
                </div>
            </div>
            <button className="prev-button" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next-button" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;