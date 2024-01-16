import React from 'react'
import Input from '../atom/Input';
import Button from '../atom/Button';

const ContactFormSection = () => {

    const containerBg = {
        backgroundImage: `url(${"/images/contactFormBg.svg"})`,
        // backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '705px',
        backgroundRepeat: 'no-repeat',
        marginTop: "19px"
    };

    return (
        <section className='bg-contact' style={containerBg}>
            <div className='mt-100px'>
                <div className='flex justify-center'>
                    <div className='text-45px font-bold w-1032 text-center'>Instead Of Removing Sensitive Foods Could Prevent Health Issues</div>
                </div>
                <div className='mt-30px flex justify-center'>
                    <div className='w-1320'>
                        <div className='grid grid-cols-2 gap-5'>
                            <Input type={"text"} label={"Your Name"} placeholder={"Enter Name"} />
                            <Input type={"email"} label={"Your Email"} placeholder={"Enter Email"} />
                            <Input type={"text"} label={"Phone Number"} placeholder={"Enter Phone"} />
                            <Input type={"text"} label={"Question"} placeholder={"Enter Your Quetion"} />
                        </div>
                        {/* Bottom Border */}
                        <div className='border-b border-borderGreen mt-95px'></div>
                        <div className='flex justify-center mt-56px mb-100px'>
                            <Button text={"SEND US MESSAGE"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactFormSection;