import React, { useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
    {
        icon: '/images/media/peak.svg',
        name: 'peak'
    },
    {
        icon: '/images/media/cnbc.svg',
        name: 'cnbc'
    },
    {
        icon: '/images/media/tatler-asia.svg',
        name: 'tatler-asia'
    },
    {
        icon: '/images/media/the-straits-times.svg',
        name: 'the-straits-times'
    }
];

const MediaSection = () => {

    const carouselRef = useRef(null)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next(1);
        }
    };

    const handlePrevious = () => {
        if (carouselRef.current) {
            carouselRef.current.previous(1);
        }
    }

    return (
        <section className='mx-common'>
            <div className='flex justify-center mt-60px'>
                <h1 className='text-55px font-bold'>Media</h1>
            </div>
            <div className=''>
                <img src='/images/leftArrow.svg' alt='' onClick={handlePrevious} />
                <div>
                    <Carousel
                        ref={carouselRef}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        arrows={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        itemClass="carousel-item-padding-40-px"
                    >

                        {items.map((item, index) => (
                            <div key={item.name + index} className='item'>
                                <img src={item.icon} alt={item.name} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <img src='/images/rightArrow.svg' alt='' onClick={handleNext} />
            </div>
        </section >
    )
}

export default MediaSection;