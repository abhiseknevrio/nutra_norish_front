import React from 'react';
import QualityCard from '../atom/QualityCard';

const PremiumQuality = () => {

    const quality = [
        {
            id: "01",
            image: "/images/quality/01.svg",
            text: "Quality Ingredients"
        },
        {
            id: "02",
            image: "/images/quality/02.svg",
            text: "No nasties"
        },
        {
            id: "03",
            image: "/images/quality/03.svg",
            text: "GMP certified Labs"
        },
        {
            id: "04",
            image: "/images/quality/04.svg",
            text: "Non GMO, Gluten Free"
        },
        {
            id: "05",
            image: "/images/quality/05.svg",
            text: "Bioavailable"
        },
    ]

    return (
        <section className='premiumSection'>
            <div className='premiumBg'>
                <div className='flex justify-center mb-11'>
                    <div className='title55'>Premium Quality</div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {quality.map((item) => (
                        <div key={item.id} className='flex justify-center'>
                            <QualityCard image={item.image} text={item.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PremiumQuality;