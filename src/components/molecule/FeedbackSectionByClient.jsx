import React from "react";
import ClientFeeedbackCard from "../atom/ClientFeeedbackCard";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const feedbackData = [
  {
    id: "01",
    title: "Perfect Supplements for my ailments",
    content:
      "Dr Menka is a cool, calm and patient person.  She knows exactly what I need to boost my health, explaining to me in detail the various ailments I have been having.   After listening to her advice, I am very well on the road to recovery.   I know better in terms of food allergies, what I should avoid and what I should be consuming.   The stool test with explanations given and the supplements which can be taken were very informative and much appreciated.  Take care and GOD bless, Dr Menka!",
    client: {
      name: "Sharon G Kaur",
      image:
        "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/feedbackclient1-rr.svg",
      link: "",
      // linkText: 'Microblading'
    },
    bgColor: "#CDD1E3",
  },
  {
    id: "02",
    title: "High-Quality Supplements",
    content:
      "It has been an overall good experience! From health benefits to high-quality supplements, it all makes you feel better. My parents and children are also taking a few of the supplements and feeling better. It’s a one-time cost for longer benefits and lesser spending with fewer future doc trips. The program made me feel brighter and lighter. Would recommend NutraNourish to anyone looking for wellness - in a patient manner!",
    client: {
      name: "Shivani Malhotra",
      image:
        "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/feedbackclient2-rr.svg",
      link: "",
      // linkText: 'Ombré'
    },
    bgColor: "#F6DAB4",
  },
  {
    id: "03",
    title: "Supplements give the desired effect",
    content:
      "Dr. Menka Gupta is a very good doctor. She works on the main cause of the problems and solves them. The supplements she gives are good and useful. The supplements give the desired effect and reaction. I must say, she is a very good and amazing doctor!Thank you!",
    client: {
      name: "Tripta Jaisalmeria",
      image:
        "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client1-rr.svg",
      link: "",
      // linkText: 'Microblading'
    },
    bgColor: "#CDD1E3",
  },
  {
    id: "04",
    title:
      "Excellent results because of the high-quality standards of probiotics",
    content:
      "Tried the probiotic supplements provided by Nutra Nourish after a dose of antibiotics nuked my gut bacteria. Excellent results, because of the high quality standards of the supplements. Highly recommended.",
    client: {
      name: "Rey D",
      image:
        "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client1-rr.svg",
      link: "",
      // linkText: 'Microblading'
    },
    bgColor: "#F6DAB4",
  },
  //   {
  //     id: "05",
  //     title: "Pro Supplements plans",
  //     content: `I had a couple of health problems, and the past few years were hard. I have gone through multiple treatments and tried various doctors and medications, but nothing worked or solved my actual problem. Finally, I decided to meet Dr.Menka, and to put it simply, she is incredible!
  //           She has taken great care of my health by developing a practical strategy step-by-step by identifying the root of my health issues and addressing them individually with pro supplements and diet plans.I especially loved how Dr Menka took her time to solve my health conditions, and It's rare to find a doctor who combines such personal touches and care for a patient with outstanding quality medical care.
  //           I highly recommend it to anyone struggling with skin, gut, and other health issues and who needs to fix it from the inside out!
  //           So far, I have had great visits and treatments, and the Doctor's demeanor has put me at ease and brought back my health with confidence :)
  //           `,
  //     client: {
  //       name: "Subhash N",
  //       image:
  //         "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client1-rr.svg",
  //       link: "",
  //       // linkText: 'Microblading'
  //     },
  //     bgColor: "#CDD1E3",
  //   },
  {
    id: "06",
    title: "Suitable supplement plan for my gut issues",
    content:
      "I was seeing Dr Menka for my gut issues and reflux. She is very professional and adopts a step-by-step approach to addressing my health concerns. She puts in place a suitable supplement plan,  diet, as well as recipes suitable for my health issues. I am seeing improvement in my gut problems and have learned to eat healthily as well. Thanks, Dr Menka.",
    client: {
      name: "Josephine Rita",
      image:
        "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client1-rr.svg",
      link: "",
      // linkText: 'Microblading'
    },
    bgColor: "#CDD1E3",
  },
  {
    id: "07",
    title: "Supplements helped my daughter’s allergies",
    content:
      "Dr Menka has helped me tremendously with my daughter who had allergic rhinitis. She works on going to the core of the issue, identifies the deficiencies and works through diet and supplements. Her programs are non-invasive and totally natural. Highly recommend her work!",
    client: {
      name: "Puja Kumar ",
      image:
        "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client1-rr.svg",
      link: "",
      // linkText: 'Microblading'
    },
    bgColor: "#F6DAB4",
  },
];
const FeedbackSectionByClient = () => {
  return (
    <section className="feedbackSec">
      <div className="title55 mx-auto text-center w-full capitalize">
        What our satisfied customers say
      </div>
      <div className="mt-16 md:mt-50 ">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          arrows={false}
          responsive={responsive}
          ssr={false}
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {feedbackData.map((item, index) => (
            <div key={index} className="mb-20 mx-5">
              <ClientFeeedbackCard item={item} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* <div className='mt-50 flex justify-center'>
                <div className='px-10 py-5 text-18px font-bold border inline-block rounded-full hover:bg-btnBg hover:text-nutraWhite transition-all duration-300 ease-in-out'>READ ALL REVIEW</div>
            </div> */}
    </section>
  );
};

export default FeedbackSectionByClient;
