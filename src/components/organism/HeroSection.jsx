import React, { useState } from "react";
import ClientGroup from "../molecule/ClientGroup";
import QuizCard from "../molecule/QuizCard";
import Button from "../atom/Button";
import useMediaQuery from "../../useMediaQuery";

const HeroSection = ({ targetDivRef, scrollToDiv }) => {
  const [questions, setQuestions] = useState(null);
  const [queLoading, setQueLoading] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const getAllQuestions = async () => {
    setQueLoading(true);
    try {
      const response = await fetch(
        `https://us-central1-nutra-nourish.cloudfunctions.net//getAllQuestions`
      );
      const data = await response.json();
      setQuestions(data.questions);
      if (response.ok) {
        setTimeout(() => {
          setQueLoading(false);
        }, 800);
      }
    } catch (error) {
      setQueLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <section className="padb-117">
        <a
          href="https://api.whatsapp.com/send/?phone=91257500&text=Hi%2C+I+would+like+to+enquire+about&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <img
          
            className="fixed bottom-0 right-0 whatsIcon hover:scale-110 z-50"
            src="https://cdn.shopify.com/s/files/1/0606/0703/7648/files/whatsapp-rr.svg"
            alt=""
          />
        </a>
        <div className="mx-common">
          <div>
            <div className="font-bold text-xl md:text-2xl pt-32 md:pt-48 textCenterLeft">
              ⭐⭐⭐⭐⭐ “I feel better than ever”
            </div>
            <div id="quizsection" className="flex justify-center mt-5 md:mt-2">
              <div className="text-center">
                <div className="font-bold text-xl md:text-2xl">
                  <span className="left-border"></span>
                  {"Personalized Vitamins".toUpperCase()}
                </div>
                <div className="title65 mt-10 md:mt-5 xl:w-1160">
                  Get the Nutrients You Need for Peak Performance
                </div>
                <p className="font-bold text-xl mt-8">
                  Instant access to expert designed personalized Supplement Plan
                  made just For You
                </p>
              </div>
            </div>

            <div ref={targetDivRef}>
              <div className="flex justify-center mt-14">
                {questions ? (
                  <QuizCard
                    questions={questions}
                    setQuestions={setQuestions}
                    queLoading={queLoading}
                    isSmallScreen={isSmallScreen}
                    scrollToDiv={scrollToDiv}
                  />
                ) : queLoading ? (
                  <div className="threes cols">
                    <div className="loaderQue" id="loader-1-que">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                ) : (
                  <Button onClick={getAllQuestions} text={"START THE QUIZ"} />
                )}
              </div>
            </div>
            <div className="mt-12">
              <ClientGroup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
