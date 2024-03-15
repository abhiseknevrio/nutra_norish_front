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
        breakpoint: { max: 1900, min: 1441 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1440, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
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
        breakpoint: { max: 1024, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
    }
};

const BlogSection = () => {

    const blogs = [
        {
            id: "01",
            date: "November 30, 2023",
            by: "Dr Menka Gupta",
            title: "9 BEST SUPPLEMENTS FOR PCOS: KEY TO HORMONAL BALANCE",
            image: "https://nutranourish.com/wp-content/uploads/2023/11/Best_Supplements_for_Pcos.jpg",
            bgColor: "#F1E4DB",
            redirectTo: "https://nutranourish.com/blog/best-supplements-for-pcos"
        },
        {
            id: "02",
            date: "September 30, 2023",
            by: "Dr Menka Gupta",
            title: "WHAT IS FIBER? IS FIBER SUITABLE FOR DIABETICS?",
            image: "https://nutranourish.com/wp-content/uploads/2023/12/Does_Fiber_Intake_Affect_Blood_Sugar.jpg",
            bgColor: "#CDD1E3",
            redirectTo: "https://nutranourish.com/blog/what-is-fiber"
        },
        {
            id: "03",
            date: "July 23, 2023",
            by: "Dr Menka Gupta",
            title: "HEALING A LEAKY GUT: A STEP-BY-STEP GUIDE",
            image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/Embrace-Gut-Friendly-Food-1-scaled.jpg?v=1710501170",
            // image: "https://nutranourish.com/wp-content/uploads/2023/07/Embrace-Gut-Friendly-Food-1-scaled.jpg",
            bgColor: "#E3E3E3",
            redirectTo: "https://nutranourish.com/blog/healing-a-leaky-gut-a-step-by-step-guide-functional-medicine"
        },
    ]

    const videos = [
        {
            id: "01",
            title: "“Food Sensitivity Webinar”",
            image: "https://nutranourish.com/wp-content/uploads/2024/01/flyer_food-sensitivity-webinar-1024x576.jpeg",
            redirectTo: "https://nutranourish.com/health-videos/food-sensitivity-webinar/"
        },
        {
            id: "02",
            title: "“Gut Health Webinar”",
            image: "https://scontent.fixc1-3.fna.fbcdn.net/v/t15.5256-10/294930645_3099021943687167_2183607538998614586_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-7&_nc_sid=869369&_nc_ohc=r49o8HqqZJwAX-E1GPo&_nc_ht=scontent.fixc1-3.fna&edm=AGo2L-IEAAAA&oh=00_AfAKJTWUsBRp68Rya_e-abiOyS2LnJE0WV3wI8sgNt4yDQ&oe=65D81502",
            redirectTo: "https://nutranourish.com/health-videos/gut-health-webinar/"
        },
        {
            id: "03",
            title: "“Mental Health Webinar”",
            image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/video01-rr.jpg",
            redirectTo: "https://nutranourish.com/health-videos/mental-health-webinar/"
        },

    ]

    return (
        <section className='blogSec'>
            <div>
                <div className='title55 text-center'>Recent blog Posts</div>
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
                <div className='title55 text-center'> Nutra Nourish Videos</div>
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
                                <div key={item.id} className='mb-24 lg:mb-16'>
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