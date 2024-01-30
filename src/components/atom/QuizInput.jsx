import React from 'react'

const QuizInput = () => {
    return (
        <div className='quizInputContainer'>
            <input className='quizInput rounded-full' type='text' />
            <img className='absolute cursor-pointer' style={{ right: "40px" }} src='/images/rightArrow.svg' alt='' />
        </div>
    )
}

export default QuizInput;