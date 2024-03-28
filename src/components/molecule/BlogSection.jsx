import React from "react";
import BlogCard from "../atom/BlogCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideosCard from "../atom/VideosCard";

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
  },
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
  },
};

const BlogSection = () => {
  const blogs = [
    {
      id: "01",
      date: "February 10, 2024",
      by: "Dr Menka Gupta",
      title: "TOP 8 REASONS TO USE THE DUTCH TEST",
      image:
        "https://nutranourish.com/wp-content/uploads/2024/02/Top-8-Reasons-to-Use-The-DUTCH-Test-min-2048x1152.png",
      bgColor: "#F1E4DB",
      redirectTo:
        "https://nutranourish.com/blog/top-8-reasons-to-use-the-dutch-test",
    },
    {
      id: "02",
      date: "February 6, 2024",
      by: "Dr Menka Gupta",
      title: "SAUERKRAUT: YOUR TANGY GUARDIAN OF GUT HEALTH",
      image:
        "https://nutranourish.com/wp-content/uploads/2024/02/Unlocking-the-Kraut-When-to-Feast-for-Optimal-Gut-Health-featured-image-1-min-2048x1152.png",
      bgColor: "#E3E3E3",
      redirectTo:
        "https://nutranourish.com/blog/sauerkraut-your-tangy-guardian-of-gut-health",
    },
    // {
    //     id: "03",
    //     date: "February 2, 2024",
    //     by: "Dr Menka Gupta",
    //     title: "SAUERKRAUT FOR GUT HEALTH AND THE BEST TIME TO CONSUME SAUERKRAUT",
    //     image: "https://nutranourish.com/wp-content/uploads/2024/02/Unlocking-the-Kraut-When-to-Feast-for-Optimal-Gut-Health-featured-image-min-2048x1152.png",
    //     bgColor: "#F1E4DB",
    //     redirectTo: "https://nutranourish.com/blog/unlocking-the-kraut-the-best-time-to-eat-sauerkraut-for-gut-health"
    // },
    {
      id: "04",
      date: "December 19, 2023",
      by: "Dr Menka Gupta",
      title: "WHAT IS FIBER? IS FIBER SUITABLE FOR DIABETICS?",
      image:
        "https://nutranourish.com/wp-content/uploads/2023/12/Does_Fiber_Intake_Affect_Blood_Sugar.jpg",
      bgColor: "#F1E4DB",
      redirectTo: "https://nutranourish.com/blog/what-is-fiber",
    },
    {
      id: "05",
      date: "November 30, 2023",
      by: "Dr Menka Gupta",
      title: "9 BEST SUPPLEMENTS FOR PCOS: KEY TO HORMONAL BALANCE",
      image:
        "https://nutranourish.com/wp-content/uploads/2023/11/Best_Supplements_for_Pcos.jpg",
      bgColor: "#E3E3E3",
      redirectTo: "https://nutranourish.com/blog/best-supplements-for-pcos",
    },
    {
      id: "06",
      date: "September 1, 2023",
      by: "Dr Menka Gupta",
      title: "WHICH HORMONES CAUSE ANXIETY? THE HIDDEN CONNECTION",
      image:
        "https://nutranourish.com/wp-content/uploads/2023/09/Which_Hormones_Cause_Anxiety.jpg",
      // image: "https://nutranourish.com/wp-content/uploads/2023/07/Embrace-Gut-Friendly-Food-1-scaled.jpg",
      bgColor: "#F1E4DB",
      redirectTo: "https://nutranourish.com/blog/which-hormones-cause-anxiety",
    },
    {
      id: "07",
      date: "July 23, 2023",
      by: "Dr Menka Gupta",
      title: "HEALING A LEAKY GUT: A STEP-BY-STEP GUIDE",
      image:
        "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/Embrace-Gut-Friendly-Food-1-scaled.jpg?v=1710501170",
      // image: "https://nutranourish.com/wp-content/uploads/2023/07/Embrace-Gut-Friendly-Food-1-scaled.jpg",
      bgColor: "#E3E3E3",
      redirectTo:
        "https://nutranourish.com/blog/healing-a-leaky-gut-a-step-by-step-guide-functional-medicine",
    },
  ];

  const videos = [
    {
      id: "01",
      title: "“Food Sensitivity Webinar”",
      image:
        "https://nutranourish.com/wp-content/uploads/2024/01/flyer_food-sensitivity-webinar-1024x576.jpeg",
      redirectTo:
        "https://nutranourish.com/health-videos/food-sensitivity-webinar/",
    },
    {
      id: "02",
      title: "“Gut Health Webinar”",
      image:
        "https://nutranourish.com/wp-content/uploads/2024/01/guts-to-be-healthy-thumbnail-2048x1101.png",
      redirectTo: "https://nutranourish.com/health-videos/gut-health-webinar/",
    },
    {
      id: "03",
      title: "“Mental Health Webinar”",
      image:
        "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/video01-rr.jpg",
      redirectTo:
        "https://nutranourish.com/health-videos/mental-health-webinar/",
    },
    {
      id: "04",
      title: "“What Is Functional Medicine?”",
      image:
        "https://nutranourish.com/wp-content/uploads/2016/03/image_what-is-functional-medicine.jpg",
      redirectTo:
        "https://nutranourish.com/health-videos/what-is-functional-medicine/",
    },
  ];

  return (
    <section className="blogSec">
      <div>
        <div className="title55 text-center">Practical Guidance</div>
        <div className="mt-50">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            arrows={false}
            responsive={responsive}
            ssr={true}
            autoPlay={true}
            autoPlaySpeed={0}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1500}
            containerClass="carousel-container"
          >
            {blogs.map((item) => (
              <div key={item.id} className="mb-16">
                <BlogCard
                  title={item.title}
                  img={item.image}
                  link={item.redirectTo}
                  date={item.date}
                  by={item.by}
                  bg={item.bgColor}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="mt-24">
        <div className="title55 text-center"> Nutra Nourish Videos</div>
        <div className="mt-50">
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
            {videos.map((item) => (
              <div key={item.id} className="mb-24 lg:mb-16">
                <VideosCard
                  title={item.title}
                  img={item.image}
                  link={item.redirectTo}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
