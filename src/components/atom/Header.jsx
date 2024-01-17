import React from 'react';
import Button from './Button'

const Header = () => {

    return (
        <header className='border-b border-borderCol'>
            <div className='mx-common flex justify-between items-center'>
                <img src='/images/nutranourish-logo.png' className='h-16 my-7' alt='' />
                <Button text="Take The Quiz" />
            </div>
        </header>
    )
}

export default Header