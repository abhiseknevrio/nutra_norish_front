import React from 'react'

const RadioButton = ({ options, addUserData }) => {
    return (
        <div className='grid grid-cols-2 gap-x-10'>
            {options.map(item => (
                <div key={item.key}>
                    <div className='text-lg border border-borderGreen rounded-full py-2.5 px-5 inline-block'>
                        <input onClick={() => addUserData(item.key, item.value)} type="radio" id={item.key} name="question" value={item.key} />
                        <label className='px-1.5' htmlFor={item.key}>{item.value}</label>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RadioButton