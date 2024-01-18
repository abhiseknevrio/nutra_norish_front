import React from 'react'

const Input = ({ label, placeholder, type }) => {
    return (
        <div>
            <label className='text-20px font-semibold'>{label}</label>
            <input placeholder={placeholder} type={type} className='input pl-5 py-7 mt-3' />
        </div>
    )
}

export default Input;