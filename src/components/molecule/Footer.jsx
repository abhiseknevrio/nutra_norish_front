import React from 'react'

const Footer = () => {
    return (
        <footer className='footerSec'>
            <div className='flex justify-center'>
                <img src={'/images/nutranourish-logo.svg'} alt='footerlogo' />
            </div>
            <div className={'flex justify-center'}>
                <img src={'/images/footer/health-store.svg'} alt='healthstoreicon' className={'mr-2'} />
                <a href="http://">Health Store</a>
            </div>
            <div>
                <div className='flex flex-col md:flex-row justify-between mt-16'>
                    <div className='w-40per mb-10 md:mb-0'>
                        <p className='text-20px font-medium'>
                            Subscribe and receive latest on health and <br /> exclusive offers
                        </p>
                        <div className='my-5'>
                            <input type="text" placeholder={'Subscribe Now'} className={'customInput'} />
                        </div>
                        <div className='flex mt-9 md:mt-auto'>
                            <div className='mr-4 text-20px font-medium'>
                                Social Media:
                            </div>
                            <div className={'flex items-center'}>
                                <img src={'/images/footer/facebook.svg'} alt='fbIcon' className={'socialIcon'} />
                                <img src={'/images/footer/twitter.svg'} alt='twitterIcon' className={'socialIcon'} />
                                <img src={'/images/footer/youtube.svg'} alt='ytIcon' className={'socialIcon'} />
                                <img src={'/images/footer/instagram.svg'} alt='igIcon' className={'socialIcon'} />
                                <img src={'/images/footer/linkedin.svg'} alt='igIcon' className={'socialIcon'} />
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{ borderRight: '1px solid #D9D9D9', height: '100%', position: 'absolute', top: 0, bottom: 0, margin: 'auto' }}></div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-40per'>
                        <div>
                            <div className='text-20px font-medium mb-5'>
                                Services
                            </div>
                            <div>
                                <div className='mb-3'>
                                    <a href="http://">Functional Medicine</a>
                                </div>
                                <div className='mb-3'>
                                    <a href="http://">Programs</a>
                                </div>
                                <div className='mb-3'>
                                    <a href="http://">Mindfulness Based Stress Reduction</a>
                                </div>
                                <div className='mb-3'>
                                    <a href="http://">Workplace Wellness Program</a>
                                </div>
                                <div className='mb-3'>
                                    <a href="http://">Preventive Health Screening</a>
                                </div>
                            </div>
                        </div >
                        <div>
                            <div className='text-20px font-medium mb-5'>
                                Contact
                            </div>
                            <div>
                                <div className='font-medium'>
                                    402 Orchard Road, Delfi Orchard
                                    #03-07, Singapore 238876
                                </div>
                            </div>
                            <div className='text-25px font-medium my-3'>
                                <a href="tel:+65 9125 7500">+65 9125 7500</a>
                            </div>
                            <div>
                                <a href="/">admin@nutranourish.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-20'>
                Copyright © 2023 by <span className='font-bold'> Nutra Nourish. </span>All rights reserved.
            </div>
        </footer >
    )
}

export default Footer