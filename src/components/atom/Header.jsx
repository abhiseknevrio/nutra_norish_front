import React, { useCallback, useEffect, useState } from 'react';
import Button from './Button'

const Header = () => {

    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = useCallback(() => {
        if (window.scrollY >= 20) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => {
            window.removeEventListener('scroll', changeNavbarColor);
        };
    }, [changeNavbarColor]);

    const backGround = colorChange ? "bg-cardBg fixed top-0 z-20" : "";

    return (
        <header id="quizsection" className={`min-w-full border-b border-borderCol ${backGround}`}>
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