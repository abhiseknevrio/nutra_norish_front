import React from 'react'

const ClientGroup = () => {
    return (
        <div className='grid grid-cols-5 items-center gap-x-2.5 md:gap-x-20'>
            <div className='flex justify-center items-center'>
                <img src='https://cdn.shopify.com/s/files/1/0606/0703/7648/files/fda-rr.svg' alt='' />
            </div>
            <div className='flex justify-center items-center'>
                <img src='https://cdn.shopify.com/s/files/1/0606/0703/7648/files/gmp-rr.svg' alt='' />
            </div>
            <div className='flex justify-center items-center'>
                <img src='https://cdn.shopify.com/s/files/1/0606/0703/7648/files/ausGov-rr.svg' alt='' />
            </div>
            <div className='flex justify-center items-center'>
                <img src='https://cdn.shopify.com/s/files/1/0606/0703/7648/files/npa-rr.svg' alt='' />
            </div>
            <div className='flex justify-center items-center'>
                <img src='https://cdn.shopify.com/s/files/1/0606/0703/7648/files/nsf-rr.svg' alt='' />
            </div>
        </div>
    )
}

export default ClientGroup;