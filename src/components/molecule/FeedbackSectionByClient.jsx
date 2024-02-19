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
            title: "Dr Menka Gupta is so approachable and understanding. A very very thorough doctor.",
            content: "I've been using the supplements from Dr Gupta now for my mum, dad and our own family. I've seen a huge difference in our health. We literally swear by Dr Menka Gupta. Her consultation for my father was en point and we were able to throw off a chronic condition in an 88 year old man. She is so approachable and understanding. A very very thorough doctor.",
            client: {
                name: "Gayatri Sriram",
                image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/feedbackclient1-rr.svg",
                link: "",
                // linkText: 'Microblading'
            },
            bgColor: "#CDD1E3"
        },
        {
            id: "02",
            title: "Big thanks to both Dr Menka and Dr Dipika for helping me 😊",
            content: "I have been buying supplements from Nutra Nourish for years for my family. There are so many types of supplements out there but I trust Menka's carefully selected choices, now all made easier with her e-shop.",
            client: {
                name: "Fiona Hee",
                image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/feedbackclient2-rr.svg",
                link: "",
                // linkText: 'Ombré'
            },
            bgColor: "#F6DAB4"
        },
        {
            id: "03",
            title: "Dr Menka Gupta completely fixed all my gut issues I went to see her as I was suffering",
            content: "I was advised for my nasal allergies, to start having probiotics and digestive enzymes as it helps. But how much it helps I suddenly realised after consuming nutranourishes probiotics !!! Instead of taking Zyrtec or other antihistaminics, it was simply enough to consume one of these supplements on late food nights!! It prevents for me the next day sneezing and further agony!! It helped my gut health so efficiently that my stomach size reduced in the mornings to a normal size!! And it significantly reduced gastric related symptoms!!! It s incredible as I didn’t find this much potency in any other store bought grades!! It definitely works! And I consume it everyday now after the initial phase, stomach, digestion, sleep all quite improved.That was one great prescription Dr Menka!! Good job both you and the little therbiotic caps",
            client: {
                name: "Sripriya Ganesh",
                image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/client1-rr.svg",
                link: "",
                // linkText: 'Microblading'
            },
            bgColor: "#CDD1E3"
        }
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
                            <div key={item.id} className='mb-20 mx-5'>
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