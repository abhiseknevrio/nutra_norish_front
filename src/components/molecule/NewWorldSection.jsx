import React from 'react'
import NewWorldCard from '../atom/NewWorldCard'

const NewWorldSection = () => {

    const data = [
        {
            id: "01",
            title: "Designed by leading Functional Medicine Experts for your unique needs",
            content: "You are unique. Our experts consider your goals, lifestyle and diet to formulate your personalised plan",
            image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/newWorld01rr.svg",
            name: "Dr Menka Gupta",
            designation: "MD, IFMCP",
            bgLeftColor: "#C5CADE",
            bgRightColor: "#CDD1E3"
        },
        {
            id: "02",
            title: "Backed by science to help you reach your health & wellness goals",
            content: "Our supplements are research driven and evidence based synergistic formulas to maximise absorption and bioavailability.",
            image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/newWorld02rr.svg",
            bgLeftColor: "#F6DAB4",
            bgRightColor: "#EFCEA3"
        },
        {
            id: "03",
            title: "Quality",
            content: "Our high quality vitamins and supplements are Manufactured in the USA & compliant with FDA GoodManufacturing Practices (GMP). They are made with purest, superior raw materials, free from heavy metals, pesticides and microbiological organisms. 100% gluten free and free of soy protein",
            image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/newWorld03rr.svg",
            bgLeftColor: "#EADBD1",
            bgRightColor: "#F1E4DB"
        },
        {
            id: "04",
            title: "App Support",
            content: "Maximise and monitor your outcomes. Build healthier habits and never forget your daily dose",
            image: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/newWorld04rr.svg",
            bgLeftColor: "#DDD9D9",
            bgRightColor: "#E3E3E3"
        },
    ]

    return (
        <section className='newWorldSection'>
            <div className='flex justify-center'>
                <div className='title58 md:w-1032 text-center'>Welcome To A Whole New World Of Personalised Health & Wellness</div>
            </div>
            <div className='mt-14'>
                {
                    data.map((item, index) => (
                        <div key={item.id}>
                            <NewWorldCard item={item} index={index} />
                        </div>
                    ))
                }
            </div>
        </section >
    )
}

export default NewWorldSection