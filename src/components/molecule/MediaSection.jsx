import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
    {
        icon: 'https://cdn.shopify.com/s/files/1/0606/0703/7648/files/peak-rr.svg',
        name: 'peak'
    },
    {
        icon: 'https://cdn.shopify.com/s/files/1/0606/0703/7648/files/cnbc-rr.svg',
        name: 'cnbc'
    },
    {
        icon: 'https://cdn.shopify.com/s/files/1/0606/0703/7648/files/tatler-asia-rr.svg',
        name: 'tatler-asia'
    },
    {
        icon: 'https://cdn.shopify.com/s/files/1/0606/0703/7648/files/the-straits-times-rr.svg',
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
                <div className='title55'>Media</div>
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