import React from 'react';
import Button from '../atom/Button';

const QuizCard = () => {
    return (
        <div className='w-1250 text-center p-20 border-dashed border-2 border-nutraWhite bg-QuizBg rounded-3xl'>
            <div className='font-bold text-50px'>Do you want to elevate your energy, focus, and well-being?</div>
            <div className='mt-56px'>
                <Button text={"Yes"} />
                <Button text={"Explore More"} />
            </div>
        </div>
    )
}

export default QuizCard;