import React from "react";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const items = [
  {
    icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/logo_womens-health1.png?v=1711427499",
    name: "Women-health",
    shadow: true,
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/logo_huffpost.webp?v=1711431257",
    name: "huff-post",
    shadow: true,
  },

  //   {
  //     icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/logo_eating-well.webp?v=1711431256",
  //     name: "Eating-well",
  //   },
  {
    icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/the-straits-times-rr.svg",
    name: "the-straits-times",
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/newsweek9.jpg?v=1711598816",
    name: "news-week",
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/peak-rr.svg",
    name: "peak",
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/cnbc-rr.svg",
    name: "cnbc",
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/medical9.jpg?v=1711598814",
    name: "medical-news-today",
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/tatler-asia-rr.svg",
    name: "tatler-asia",
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/logo_the-economic-times-press.png?v=1711431257",
    name: "economic-times",
  },
];

const MediaSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="mediaSec">
      <div className="flex justify-center">
        <div className="title55">Featured In</div>
      </div>
      <div className="sm:mt-10 mt-5 mx-2">
        <div className="relative">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div
                key={item.name + index}
                className="w-fit flex  justify-center items-center sm:mb-6 mb-3"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className=" sm:w-[326px]  w-[180px] h-[136px] object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
