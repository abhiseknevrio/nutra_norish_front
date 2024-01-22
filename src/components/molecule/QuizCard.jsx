import React from 'react';
import QuizInput from '../atom/QuizInput';

const QuizCard = () => {
    return (
        <div className='w-1250 text-center p-20 quizBox'>
            <div className='title50'>How old are you?</div>
            <div className='mt-9'>
                <QuizInput />
            </div>
        </div>
    )
}

export default QuizCard;