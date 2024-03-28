import React from "react";
import Input from "../atom/Input";
import Button from "../atom/Button";

const ContactFormSection = () => {
  return (
    <section className="contactSec">
      <div className="flex justify-center">
        <div className="title50 md:w-1032 text-center">
          Instead Of Removing Sensitive Foods Could Prevent Health Issues
        </div>
      </div>
      <div className="mt-30">
        <div className="grid grid-col-1 md:grid-cols-2 gap-5">
          <Input type={"text"} label={"Your Name"} placeholder={"Enter Name"} />
          <Input
            type={"email"}
            label={"Your Email"}
            placeholder={"Enter Email"}
          />
          <Input
            type={"text"}
            label={"Phone Number"}
            placeholder={"Enter Phone Number"}
          />
          <Input
            type={"text"}
            label={"Question"}
            placeholder={"Enter Your Question"}
          />
        </div>
        {/* Bottom Border */}
        <div className="border-b border-borderGreen mt-12 md:mt-24"></div>
        <div className="flex justify-center mt-7 md:mt-14">
          <Button text={"SEND US MESSAGE"} />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
