import React from 'react';
import Button from './Button'

const Header = () => {

    return (
        <header className='border-b border-borderCol stickycode'>
            <div className='mx-common flex justify-center lg:justify-between items-center'>
                <img src='https://cdn.shopify.com/s/files/1/0606/0703/7648/files/nutranourish-logo-rr.svg' className='h-11 md:h-16 my-7' alt='' />
                <div className='hidden lg:block'>
                    <a href="#quizSection">
                    <Button text="Take The Quiz" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
