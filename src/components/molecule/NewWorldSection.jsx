import React from 'react'

const NewWorldSection = () => {

    const data = [
        {
            id: "01",
            title: "Designed by leading Functional Medicine Experts for your unique needs",
            content: "You are unique. Our experts consider your goals, lifestyle and diet to formulate your personalised plan",
            doctor: {
                image: "/images/newworld/01.svg",
                name: "Dr Menka Gupta",
                designation: "MD, IFMCP"
            }
        },
        {
            id: "02",
            title: "Backed by science to help you reach your health & wellness goals",
            content: "Our supplements are research driven and evidence based synergistic formulas to maximise absorption and bioavailability.",
            image: "/images/newworld/02.svg",
        },
        {
            id: "03",
            title: "Quality",
            content: "Our high quality vitamins and supplements are Manufactured in the USA & compliant with FDA GoodManufacturing Practices (GMP). They are made with purest, superior raw materials, free from heavy metals, pesticides and microbiological organisms. 100% gluten free and free of soy protein",
            image: "/images/newworld/03.svg",
        },
        {
            id: "04",
            title: "App Support",
            content: "Maximise and monitor your outcomes. Build healthier habits and never forget your daily dose",
            image: "/images/newworld/04.svg",
        },
    ]

    return (
        <section className='bg-newWorldSection pb-24'>
            <div className='flex justify-center'>
                <div className='text-58px font-bold md:w-1032 text-center mt-95px'>Welcome to a Whole New World of Personalised Health & Wellness</div>
            </div>
            <div className='mx-169px mt-30px w-1580'>
                <div className='flex mb-30px' style={{ background: "#CDD1E3" }}>
                    <div className='w-706 flex justify-center' style={{ background: "#C5CADE" }}>
                        <div>
                            <img className='rounded-full my-30px' src='/images/newworld/01.svg' alt='' />
                            <div className='text-30px font-bold text-center'>Dr Menka Gupta</div>
                            <div className='text-30px font-semibold text-healthText text-center'>MD, IFMCP</div>
                        </div>
                    </div>
                    <div className='w-874 mt-95px'>
                        <div className='w-690 mx-90px'>
                            <div className='text-40px font-medium'>01</div>
                            <div className='text-42px font-bold my-30px'>Designed by leading Functional Medicine Experts for your unique needs</div>
                            <div className='text-25px font-semibold'>You are unique. Our experts consider your goals, lifestyle and diet to formulate your personalised plan</div>
                        </div>
                    </div>
                </div>
                <div className='flex mb-30px' style={{ background: "#EFCEA3" }}>
                    <div className='w-874 mt-95px'>
                        <div className='w-690 mx-90px'>
                            <div className='text-40px font-medium'>02</div>
                            <div className='text-42px font-bold my-30px'>Backed by science to help you reach your health & wellness goals</div>
                            <div className='text-25px font-semibold'>Our supplements are research driven and evidence based synergistic formulas to maximise absorption and bioavailability.</div>
                        </div>
                    </div>
                    <div className='w-706 flex justify-center' style={{ background: "#F6DAB4" }}>
                        <img className='my-30px' src='/images/newworld/02.svg' alt='' />
                    </div>
                </div>
                <div className='flex mb-30px' style={{ background: "#F1E4DB" }}>
                    <div className='w-706 flex justify-center' style={{ background: "#EADBD1" }}>
                        <img className='rounded-full my-30px' src='/images/newworld/03.svg' alt='' />
                    </div>
                    <div className='w-874 mt-95px'>
                        <div className='w-690 mx-90px'>
                            <div className='text-40px font-medium'>03</div>
                            <div className='text-42px font-bold my-30px'>Quality</div>
                            <div className='text-25px font-medium'>
                                Our high quality vitamins and supplements are Manufactured in the USA & compliant with FDA GoodManufacturing Practices (GMP). They are made with purest, superior raw materials, free from  heavy metals, pesticides and microbiological organisms. 100% gluten free and free of soy protein</div>
                        </div>
                    </div>
                </div>
                <div className='flex mb-30px' style={{ background: "#E3E3E3" }}>
                    <div className='w-874 mt-95px'>
                        <div className='w-690 mx-90px'>
                            <div className='text-40px font-medium'>04</div>
                            <div className='text-42px font-bold my-30px'>App Support</div>
                            <div className='text-25px font-semibold'>Maximise and monitor your outcomes. Build healthier habits and never forget your daily dose</div>
                        </div>
                    </div>
                    <div className='w-706 flex justify-center' style={{ background: "#DDD9D9" }} >
                        <div className='w-443 h-443 rounded-full box-border flex justify-center mt-30px' style={{ background: "#E3E3E3" }} >
                            <img className='' src='/images/newworld/04.png' width={229} height={495} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default NewWorldSection