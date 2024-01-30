import React from 'react';
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
            items: 2,
        }
    };

    return (
        <section className='mediaSec'>
            <div className='flex justify-center'>
                <h1 className='title55'>Media</h1>
            </div>
            <div className='mt-10'>
                <div>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        arrows={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                    >

                        {items.map((item, index) => (
                            <div key={item.name + index} className='mb-16'>
                                <img height={139} width={344} src={item.icon} alt={item.name} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section >
    )
}

export default MediaSection;