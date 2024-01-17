import React from 'react'

const NewWorldSection = () => {

    const data = [
        {
            id: "01",
            title: "Designed by leading Functional Medicine Experts for your unique needs",
            content: "You are unique. Our experts consider your goals, lifestyle and diet to formulate your personalised plan",
            image: "/images/newworld/01.svg",
            name: "Dr Menka Gupta",
            designation: "MD, IFMCP",
            bgLeftColor: "#C5CADE",
            bgRightColor: "#CDD1E3"
        },
        {
            id: "02",
            title: "Backed by science to help you reach your health & wellness goals",
            content: "Our supplements are research driven and evidence based synergistic formulas to maximise absorption and bioavailability.",
            image: "/images/newworld/02.svg",
            bgLeftColor: "#F6DAB4",
            bgRightColor: "#EFCEA3"
        },
        {
            id: "03",
            title: "Quality",
            content: "Our high quality vitamins and supplements are Manufactured in the USA & compliant with FDA GoodManufacturing Practices (GMP). They are made with purest, superior raw materials, free from heavy metals, pesticides and microbiological organisms. 100% gluten free and free of soy protein",
            image: "/images/newworld/03.svg",
            bgLeftColor: "#EADBD1",
            bgRightColor: "#F1E4DB"
        },
        {
            id: "04",
            title: "App Support",
            content: "Maximise and monitor your outcomes. Build healthier habits and never forget your daily dose",
            image: "/images/newworld/04.svg",
            bgLeftColor: "#DDD9D9",
            bgRightColor: "#E3E3E3"
        },
    ]

    return (
        <section className='newWorldSection'>
            <div className='flex justify-center'>
                <div className='text-58px font-bold md:w-1032 text-center'>Welcome to a Whole New World of Personalised Health & Wellness</div>
            </div>
            <div className='mt-14 w-1580'>
                {
                    data.map((item, index) => (
                        <div key={item.id} className={`mt-16 flex ${(index % 2 !== 0) ? 'flex-row-reverse' : ''}`} style={{ background: item.bgRightColor }}>
                            <div className='w-706 flex justify-center items-center' style={{ background: item.bgLeftColor }}>
                                <div>
                                    <img className='rounded-full' src={item.image} alt='' />
                                    {item.name &&
                                        <div className='text-30px font-bold text-center'>Dr Menka Gupta</div>
                                    }
                                    {item.designation &&
                                        <div className='text-30px font-semibold text-healthText text-center'>MD, IFMCP</div>
                                    }
                                </div>
                            </div>
                            <div className='w-874 my-24'>
                                <div className='w-690 mx-auto'>
                                    <div className='text-40px font-medium'>{item.id}</div>
                                    <div className='text-42px font-bold mt-30'>{item.title}</div>
                                    <div className='text-25px font-semibold mt-30'>{item.content}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}

export default NewWorldSection