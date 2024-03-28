import React from "react";
import Button from "../atom/Button";

const PersonalisedSection = ({ onClick }) => {
  return (
    <section>
      <div className="personalisedBg">
        <div className="personalisedSec">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="personalized-left">
              <img
                className="p-5"
                src="https://cdn.shopify.com/s/files/1/0606/0703/7648/files/personalised-rr.svg"
                alt=""
              />
            </div>
            <div className="personalised-right text-center">
              <div className="title55 capitalize">Get my personalized plan</div>
              <div className="text-xl font-semibold mt-30">
                We have worked hard to eliminate middlemen and overheads, so you
                get premium supplements at lowest prices.
              </div>
              <div className="text-xl font-semibold mt-30">
                Subscribe and never run out. You can cancel or change your
                subscription any time.
              </div>
              <div className="mt-30">
                <Button text="TAKE THE QUIZ" onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalisedSection;
