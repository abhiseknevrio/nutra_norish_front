import React from 'react'
import ClientFeeedbackCard from '../atom/ClientFeeedbackCard';
import Carousel from 'react-multi-carousel';

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
    }
};

const FeedbackSectionByClient = () => {

    const feedbackData = [
        {
            id: "01",
            title: "Dr Menka Gupta completely fixed all my gut issues I went to see her as I was suffering",
            content: "Dr Menka Gupta completely fixed all my gut issues.  I went to see her as I was suffering from anxiety and chronic tiredness for a long time. Rather than trying to find a quick fix for my symptoms, she patiently tried to understand the root cause of my health",
            client: {
                name: "Monika Marques",
                image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client1rr.svg",
                link: "",
                linkText: 'Microblading'
            },
            bgColor: "#CDD1E3"
        },
        {
            id: "02",
            title: "Big thanks to both Dr Menka and Dr Dipika for helping me 😊",
            content: "I have worked very successfully with Dr Menka in lowering my cholesterol and understanding more about the best foods for me. I appreciate her dept of knowledge from both a medical and functional stance.",
            client: {
                name: "Veronica Rosetta",
                image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client2rr.svg",
                link: "",
                linkText: 'Ombré'
            },
            bgColor: "#F6DAB4"
        },
        {
            id: "03",
            title: "Dr Menka Gupta completely fixed all my gut issues I went to see her as I was suffering",
            content: "Dr Menka Gupta completely fixed all my gut issues.  I went to see her as I was suffering from anxiety and chronic tiredness for a long time. Rather than trying to find a quick fix for my symptoms, she patiently tried to understand the root cause of my health",
            client: {
                name: "Monika Marques",
                image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client1rr.svg",
                link: "",
                linkText: 'Microblading'
            },
            bgColor: "#CDD1E3"
        },
        {
            id: "04",
            title: "Big thanks to both Dr Menka and Dr Dipika for helping me 😊",
            content: "I have worked very successfully with Dr Menka in lowering my cholesterol and understanding more about the best foods for me. I appreciate her dept of knowledge from both a medical and functional stance.",
            client: {
                name: "Veronica Rosetta",
                image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client2rr.svg",
                link: "",
                linkText: 'Ombré'
            },
            bgColor: "#F6DAB4"
        },
    ]

    return (
        <section className='feedbackSec'>
            <div className='title55 mx-auto text-center w-822px'>Satisfied Supplement By Nutra Nourish Clients</div>
            <div className='mt-16 md:mt-50'>
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
                    {
                        feedbackData.map(item => (
                            <div key={item.id} className='mb-20 lg:ml-10'>
                                <ClientFeeedbackCard item={item} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className='mt-50 flex justify-center'>
                <div className='px-10 py-5 text-18px font-bold border inline-block rounded-full hover:bg-btnBg hover:text-nutraWhite transition-all duration-300 ease-in-out'>READ ALL REVIEW</div>
            </div>
        </section>
    )
}

export default FeedbackSectionByClient;