import React from 'react'

const NewWorldCard = ({ item, index }) => {
    return (
        <>
            {/* For Desktop */}
            <div className='hidden md:block'>
                <div className={`mt-16 flex ${(index % 2 !== 0) ? 'flex-row-reverse' : ''}`} style={{ background: item.bgRightColor }}>
                    <div className='md:w-706 flex justify-center items-center' style={{ background: item.bgLeftColor }}>
                        <div>
                            <img className={`${index === 3 ? "pt-5" : "rounded-full"}`} src={item.image} alt='' />
                            {item.name &&
                                <div className='text-30px font-bold text-center'>Dr Menka Gupta</div>
                            }
                            {item.designation &&
                                <div className='text-30px font-semibold text-healthText text-center'>MD, IFMCP</div>
                            }
                        </div>
                    </div>
                    <div className='md:w-874 my-24'>
                        <div className='md:w-690 mx-auto'>
                            <div className='text-40px font-medium'>{item.id}</div>
                            <div className='text-42px font-bold mt-30'>{item.title}</div>
                            <div className='text-25px font-semibold mt-30'>{item.content}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* For Mobile */}
            <div className=' md:hidden'>
                <div className={`mt-16 flex ${(index % 2 !== 0) ? 'flex-col-reverse' : 'flex-col'}`} style={{ background: item.bgRightColor }}>
                    <div className='p-5' style={{ background: item.bgLeftColor }}>
                        <div>
                            <img className={`${index === 3 ? "mt-5" : "rounded-full p-5"}`} src={item.image} alt='' />
                            {item.name &&
                                <div className='text-25px md:text-30px font-bold text-center'>Dr Menka Gupta</div>
                            }
                            {item.designation &&
                                <div className='text-25px md:text-30px font-semibold text-healthText text-center'>MD, IFMCP</div>
                            }
                        </div>
                    </div>
                    <div className='my-10 px-5'>
                        <div className='text-center'>
                            <div className='text-30px font-bold'>{item.title}</div>
                            <div className='text-25px font-semibold mt-10'>{item.content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewWorldCard