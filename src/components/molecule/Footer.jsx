import React from 'react'

const Footer = () => {
    return (
        <section className='px-4 md:px-72 md:py-14 bg-nutraWhite'>
            <div>
                <div className={'flex justify-center'}>
                    <img src={'/images/nutranourish-logo.svg'} alt='footerlogo' />
                </div>
                <div className={'flex justify-center'}>
                    <img src={'/images/footer/health-store.svg'} alt='healthstoreicon' className={'mr-2'} />
                    <a href="http://">Health Store</a>
                </div>
                <div>
                    <div className={'flex justify-between'} style={{ marginTop: '70px' }}>
                        <div style={{ width: '40%' }}>
                            <div>
                                Subscribe and receive latest on health and <br /> exclusive offers
                            </div>
                            <div style={{ margin: '20px 0' }}>
                                <input type="text" placeholder={'Subscribe Now'} className={'customInput'} />
                            </div>
                            <div className={'flex'}>
                                <div className={'mr-4'}>
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
                        <div style={{ width: '40%' }} className={'flex'}>
                            <div className={'footercard'}>
                                <div className={'footerCardSubHeading'}>
                                    Services
                                </div>
                                <div className={'footerCardSubPera'}>
                                    <div className={'footerCardSubPera'} >
                                        <a href="http://">Functional Medicine</a>
                                    </div>
                                    <div className={'footerCardSubPera'} >
                                        <a href="http://">Programs</a>
                                    </div>
                                    <div className={'footerCardSubPera'} >
                                        <a href="http://">Mindfulness Based Stress Reduction</a>
                                    </div>
                                    <div className={'footerCardSubPera'} >
                                        <a href="http://">Workplace Wellness Program</a>
                                    </div>
                                    <div className={'footerCardSubPera'} >
                                        <a href="http://">Preventive Health Screening</a>
                                    </div>
                                </div>
                            </div >
                            <div className={'footercard'}>
                                <div className={'footerCardSubHeading'}>
                                    Contact
                                </div>
                                <div className={'footerCardSubPera'}>
                                    <div>
                                        402 Orchard Road, Delfi Orchard
                                        #03-07, Singapore 238876
                                    </div>
                                </div>
                                <div className={'footerCardSubPera'}>
                                    <a href="tel:+65 9125 7500">+65 9125 7500</a>
                                </div>
                                <div className={'footerCardSubPera'}>
                                    <a href="/">admin@nutranourish.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'text-center'} style={{ marginTop: '80px' }}>
                    Copyright © 2023 by <span style={{ fontWeight: '700' }}> Nutra Nourish. </span>All rights reserved.
                </div>
            </div>
        </section>
    )
}

export default Footer