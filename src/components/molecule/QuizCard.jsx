import React from 'react';
import QuizInput from '../atom/QuizInput';

const QuizCard = () => {
    return (
        <div className='w-1250 text-center p-20 quizBox'>
            <div className='font-bold text-50px mb-9'>How old are you?</div>
            <div className='mt-56px'>
                <QuizInput />
            </div>
        </div>
    )
}

export default QuizCard;