import React from 'react'

const Input = ({ label, placeholder, type }) => {
    return (
        <div>
            <label className='text-20px font-semibold block'>{label}</label>
            <input placeholder={placeholder} type={type} className='formInput pl-5 py-7 mt-3' />
        </div>
    )
}

export default Input;