import React from "react";

const NewWorldCard = ({ item, index }) => {
  return (
    <>
      <div className="">
        <div
          className={`mt-16 flex ${
            index % 2 !== 0
              ? "flex-col md:flex-row-reverse"
              : "flex-col md:flex-row"
          }`}
          style={{ background: item.bgRightColor }}
        >
          <div
            className="flex justify-center items-center newWCard-left p-5"
            style={{ background: item.bgLeftColor }}
          >
            <div>
              <img
                loading="lazy"
                className={`${index === 3 ? "pt-5" : "rounded-full"}`}
                src={item.image}
                alt=""
              />
              {item.name && item.designation && (
                <div className="mt-8">
                  <div className="text-3xl font-bold text-center">
                    Dr Menka Gupta
                  </div>

                  <div className="text-3xl font-semibold text-healthText text-center">
                    IFMCP
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="my-4 lg:my-12 newWCard-right sm:text-left text-center">
            {/* <div className='title40 font-medium'>{item.id}</div> */}
            <div className="title42 mt-2.5 lg:mt-7">{item.title}</div>
            <div className="text-xl lg:text-2xl font-semibold mt-2.5 lg:mt-7">
              {item.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewWorldCard;
