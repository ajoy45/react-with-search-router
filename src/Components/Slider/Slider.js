import React from 'react';
import { Carousel } from 'react-bootstrap';
import'./Slider.css'
const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-size"
                    src="https://i.postimg.cc/pLcMtrbS/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-black'>First slide label</h3>
                    <p className='text-black'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-size"
                    src="https://i.postimg.cc/sDKtpxX2/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-black'>Second slide label</h3>
                    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-size"
                    src="https://i.postimg.cc/SNQPN4rb/delicious-fried-chicken-plate.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-black'>Third slide label</h3>
                    <p className='text-black'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;