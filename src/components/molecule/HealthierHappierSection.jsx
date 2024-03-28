import React from "react";

const HealthierHappierSection = () => {
  const statistics = [
    {
      img: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/Group_1000006102.png?v=1710932609",
      text: "Feel Improvement In Their Health",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/Group_1000006103.png?v=1710932609",
      text: "Appreciate The Highest Quality Ingredients",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/Group_1000006104.png?v=1710932609",
      text: "Use Our App To Build Healthier Habits",
    },
  ];

  return (
    <section className="healthSection flex  flex-col items-center">
      <div className="flex justify-center items-center sm:w-full w-[60vw]">
        <div className="mt-106px title58  ">A Healthier, Happier You</div>
      </div>
      <div className="flex justify-center gap-x-64 sm:flex-row flex-col md:mt-12 mt-6">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center mt-8 md:mt-0"
          >
            <img
              src={`${stat.img}`}
              alt=""
              className="sm:w-[155px] w-[135px] py-4"
            />

            {/* <div className="text-xl font-bold">{stat.img} OF CUSTOMERS</div> */}
            <p className="text-xl font-semibold text-healthText mt-3">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthierHappierSection;
