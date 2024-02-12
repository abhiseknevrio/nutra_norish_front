import React from 'react';
import Button from './Button'

const Header = () => {

    return (
        <header id="quizsection" className='border-b border-borderCol'>
            <div className='mx-common flex justify-center lg:justify-between items-center'>
                <a href='/'>
                    <img src='https://cdn.shopify.com/s/files/1/0606/0703/7648/files/nutranourish-logo-rr.svg' className='h-11 md:h-16 my-7' alt='' />
                </a>
                <div className='hidden lg:block'>
                    <a href='#quizsection'>
                        <Button text="TAKE THE QUIZ" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header