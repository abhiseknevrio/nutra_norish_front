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

    const containerBg = {
        backgroundImage: `url(${"/images/quality/bg.svg"})`,
        // backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '313px',
        marginBottom: "150px"
    };

    return (
        <section className='premiumSection'>

            {/* For Desktop */}
            <div className='hidden md:block'>
                <div style={containerBg}>
                    <div className='flex justify-center pt-16'>
                        <div className='text-55px font-bold'>Premium Quality</div>
                    </div>
                    <div className='grid grid-cols-5 mt-11'>
                        {quality.map((item) => (
                            <div key={item.id}>
                                <QualityCard image={item.image} text={item.text} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* For Mobile */}
            <div className='block md:hidden'>
                <div className='flex justify-center'>
                    <div className='text-40px font-bold'>Premium Quality</div>
                </div>
                <div className='grid grid-cols-2 gap-x-5 gap-y-7 mt-16'>
                    {quality.map((item) => (
                        <div key={item.id}>
                            <QualityCard image={item.image} text={item.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PremiumQuality;