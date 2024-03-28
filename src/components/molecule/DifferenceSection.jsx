import React from "react";

const DifferenceSection = () => {
  const data = [
    {
      id: "01",
      icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/walk.png?v=1711598324",
      content: "Enhance Fitness, Achieve Vitality, Improve Performance",
    },
    {
      id: "02",
      icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/energy.png?v=1711598323",
      content: "Energy, Improve Anxiety, Live Free Of Aches And Pains",
    },
    {
      id: "03",
      icon: "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/sleep.png?v=1711598323",
      content: "Improve sleep and immunity",
    },
  ];

  return (
    <section className="differenceSec">
      <div className="">
        <div className="flex justify-center">
          <div className="title55 text-center md:w-1032">
            Feel the difference, just like 10,000+ of our customers
          </div>
        </div>
        <div className="mt-60  flex  sm:flex-row flex-col justify-center sm:gap-x-32 gap-y-16 text-center font-semibold text-xl md:text-2xl">
          {data.map((item) => (
            <div key={item.id} className="sm:w-[620px] w-auto ">
              <div className="flex justify-center">
                <img
                  src={item.icon}
                  alt=""
                  className="sm:h-[167px] h-[160px]"
                />
              </div>
              <div className="mt-2">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
