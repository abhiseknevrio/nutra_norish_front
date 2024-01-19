import React from 'react'
import BlogCard from '../atom/BlogCard';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import VideosCard from '../atom/VideosCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1900 },
        items: 3,
    },
    laptop: {
        breakpoint: { max: 1900, min: 1024 },
        items: 3,
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

const responsiveForVideos = {
    desktop: {
        breakpoint: { max: 3000, min: 1900 },
        items: 2,
    },
    laptop: {
        breakpoint: { max: 1900, min: 1024 },
        items: 2,
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

const BlogSection = () => {

    const blogs = [
        {
            id: "01",
            date: "October 5, 2023",
            by: "Dr Menka Gupta",
            title: "Understanding Female Hormones: Types and Functions",
            image: "/images/blogs/01.svg",
            bgColor: "#F1E4DB",
            redirectTo: ""
        },
        {
            id: "02",
            date: "September 30, 2023",
            by: "Dr Menka Gupta",
            title: "Benefits Of Yoga For Digestion",
            image: "/images/blogs/02.svg",
            bgColor: "#CDD1E3",
            redirectTo: ""
        },
        {
            id: "03",
            date: "October 5, 2023",
            by: "Dr Menka Gupta",
            title: "How to Flush Out Excess Estrogen from the Body?",
            image: "/images/blogs/03.svg",
            bgColor: "#E3E3E3",
            redirectTo: "https://nutranourish.com/blog/how-to-flush-out-excess-estrogen"
        },
    ]

    const videos = [
        {
            id: "01",
            title: "“Dr Brent Dorval PhD, our CSO, talking about the Food Sensitivity Testing at the recent A4M Gastroenterology Conference” - Dr Brent Dorval",
            image: "/images/videos/01.svg",
            redirectTo: "https://www.youtube.com/watch?v=ApuWHhya2Uk"
        },
        {
            id: "02",
            title: "Dr. Joel Evans, recently spoke abroad regarding food sensitivity testing, inflammation, and leaky gut. -Dr. Joel Evans",
            image: "/images/videos/02.svg",
            redirectTo: "https://www.youtube.com/watch?v=ApuWHhya2Uk"
        },
        {
            id: "03",
            title: "“Dr Brent Dorval PhD, our CSO, talking about the Food Sensitivity Testing at the recent A4M Gastroenterology Conference” - Dr Brent Dorval",
            image: "/images/videos/01.svg",
            redirectTo: "https://www.youtube.com/watch?v=ApuWHhya2Uk"
        },
        {
            id: "04",
            title: "Dr. Joel Evans, recently spoke abroad regarding food sensitivity testing, inflammation, and leaky gut. -Dr. Joel Evans",
            image: "/images/videos/02.svg",
            redirectTo: "https://www.youtube.com/watch?v=ApuWHhya2Uk"
        },
    ]

    return (
        <section className='blogSec'>
            <div>
                <div className='text-30px md:text-55px font-bold text-center'>Recent blog Posts</div>
                <div className='mt-50'>
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
                        {blogs.map(item => (
                            <div key={item.id} className='mb-16'>
                                <BlogCard title={item.title} img={item.image} link={item.redirectTo} date={item.date} by={item.by} bg={item.bgColor} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className='mt-24'>
                <div className='text-30px md:text-55px font-bold text-center'> Nutra Nourish Videos</div>
                <div className='mt-50'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        arrows={false}
                        responsive={responsiveForVideos}
                        ssr={true}
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                    >
                        {
                            videos.map(item => (
                                <div key={item.id} className='mb-24 md:mb-16'>
                                    <VideosCard title={item.title} img={item.image} link={item.redirectTo} />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;