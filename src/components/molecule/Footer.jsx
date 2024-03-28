import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Footer = () => {
  const [emailId, setEmailId] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e) => {
    setEmailId(e.target.value);
    // Check if the entered email is valid (you can implement your validation logic here)
    setIsValidEmail(validateEmail(e.target.value));
  };

  const handleSubmit = async () => {
    if (isValidEmail) {
      const url =
        "https://us-central1-nutra-nourish.cloudfunctions.net/addToAudience";
      const requestBody = {
        emailId: emailId,
        list: "subscribe",
      };

      try {
        const response = await axios.post(url, requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        toast.success("Thank you for subscribing!");
        setEmailId("");
        setIsValidEmail(false);
        // Handle response here
      } catch (error) {
        console.error("Error submitting email:", error);
        // Handle error here
      }
    }
  };

  const validateEmail = (email) => {
    // Example validation logic (you can replace it with your own)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  return (
    <footer className="footerSec">
      <div className="flex justify-center">
        <img
          src={
            "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/nutranourish-logo-rr.svg"
          }
          alt="footer_logo"
        />
      </div>
      <div className={"flex justify-center text-base"}>
        <a href="https://nutranourish.shop/" className="flex hover:scale-110">
          <img
            src={
              "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/health-store-rr.svg"
            }
            alt="healthstore_icon"
            className={"mr-2"}
          />
          Health Store
        </a>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-between mt-16">
          <div className="w-40per mb-10 md:mb-0">
            <p className="text-xl font-medium hidden md:block">
              Subscribe And Receive Latest On Health And <br></br> Exclusive
              Offers
            </p>
            <p className="text-xl font-medium md:hidden">
              Subscribe And Receive Latest On Health And Exclusive Offers
            </p>
            <div className="my-5 relative">
              <input
                type="text"
                value={emailId}
                placeholder={"Subscribe Now"}
                className={"customInput"}
                onChange={handleEmailChange}
              />
              {isValidEmail && emailId.length > 0 && (
                <div
                  className="absolute inset-y-0 right-6 pl-3  
                    flex items-center  hover:scale-125 cursor-pointer"
                  onClick={() => handleSubmit()}
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0606/0703/7648/files/right_arrow_button.svg?v=1710747581"
                    alt=""
                  />
                </div>
              )}
              {!isValidEmail && emailId.length > 0 && (
                <span style={{ color: "red" }}>
                  {" "}
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div className="flex mt-9 md:mt-auto">
              <div className="mr-4 text-xl font-medium">Social Media:</div>
              <div className={"flex items-center"}>
                <a
                  href="https://www.facebook.com/nutranourish/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125"
                  title="Facebook"
                >
                  <img
                    src={
                      "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/facebook-rr.svg"
                    }
                    alt="fbIcon"
                    className={"socialIcon"}
                  />
                </a>
                <a
                  href="https://twitter.com/nutranourish"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125"
                  title="Twitter"
                >
                  <img
                    src={
                      "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/twitter-rr.svg"
                    }
                    alt="twitterIcon"
                    className={"socialIcon"}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCNP_vorVv0D_4PrUhvImk-g"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125"
                  title="Youtube"
                >
                  <img
                    src={
                      "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/youtube-rr.svg"
                    }
                    alt="ytIcon"
                    className={"socialIcon"}
                  />
                </a>
                <a
                  href="https://www.instagram.com/drmenka_nutranourish/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125"
                  title="Instagram"
                >
                  <img
                    src={
                      "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/instagram-rr.svg"
                    }
                    alt="igIcon"
                    className={"socialIcon"}
                  />
                </a>
                <a
                  href="https://sg.linkedin.com/in/dr-menka-gupta"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-125"
                  title="Linkedin"
                >
                  <img
                    src={
                      "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/linkedin-rr.svg"
                    }
                    alt="linkedinIcon"
                    className={"socialIcon"}
                  />
                </a>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRight: "1px solid #D9D9D9",
                height: "100%",
                position: "absolute",
                top: 0,
                bottom: 0,
                margin: "auto",
              }}
            ></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-40per">
            <div>
              <div className="text-xl font-medium mb-5">Services</div>
              <div>
                <div className="mb-3  hover:underline">
                  <a href="https://nutranourish.com/services/functional-medicine/">
                    Functional Medicine
                  </a>
                </div>
                <div className="mb-3  hover:underline">
                  <a href="https://nutranourish.com/services/programs/">
                    Programs
                  </a>
                </div>
                <div className="mb-3  hover:underline">
                  <a href="https://nutranourish.com/services/mindfulness-based-stress-reduction/">
                    Mindfulness Based Stress Reduction
                  </a>
                </div>
                <div className="mb-3  hover:underline">
                  <a href="https://nutranourish.com/services/workplace-wellness-program/">
                    Workplace Wellness Program
                  </a>
                </div>
                <div className="mb-3  hover:underline">
                  <a href="https://nutranourish.com/services/preventive-health-screening/">
                    Preventive Health Screening
                  </a>
                </div>
                <div className="mb-3  hover:underline">
                  <a href="https://nutranourish.com/services-faq/">FAQ</a>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-medium mb-5">Contact</div>
              <div>
                <div className="font-medium">
                  402 Orchard Road, Delfi Orchard #03-07, Singapore 238876
                </div>
              </div>
              <div className="text-2xl font-medium my-3">
                <a href="tel:+65 9125 7500">+65 9125 7500</a>
              </div>
              <div>admin@nutranourish.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-20" style={{ color: "#59524B" }}>
        Copyright © 2023 by <span className="font-bold"> Nutra Nourish. </span>
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
