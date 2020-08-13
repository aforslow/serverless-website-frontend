import React from "react"
import Carousel from "react-bootstrap/Carousel"

function CustomCarousel() {
    return (
        <Carousel className="d-none d-md-block">
            {/* <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/IMG_1172+(1).jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/food5.jpg"
                alt="Food blog"
                />

                <Carousel.Caption>
                <h3>Food blog</h3>
                <p>Accelerating my cooking skills to next level!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/pjimage+(3).jpg"
                alt="Code blog"
                />

                <Carousel.Caption>
                <h3>Code blog</h3>
                <p>Sharing coding examples and projects.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/IMG_20171118_140518-PANO+(1).jpg"
                alt="Travel blog"
                />

                <Carousel.Caption>
                <h3>Travel blog</h3>
                <p>Sharing travel experiences and tips.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CustomCarousel