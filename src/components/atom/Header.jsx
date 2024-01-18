import React from 'react';
import Button from './Button'

const Header = () => {

    return (
        <header className='border-b border-borderCol'>
            <div className='mx-common flex justify-center md:justify-between items-center'>
                <img src='/images/nutranourish-logo.png' className='h-11 md:h-16 my-7' alt='' />
                <div className='hidden md:block'>
                    <Button text="Take The Quiz" />
                </div>
            </div>
        </header>
    )
}

export default Header