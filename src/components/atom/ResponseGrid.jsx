import React from 'react';

const ResponseGrid = ({ response: item }) => {
    return (
        <div className="my-5 grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
            <div className="bg-nutraWhite flex items-center justify-center">
                <img
                    src={item.product_image !== "link unvailable" ? item.product_image : "https://cdn.shopify.com/s/files/1/0606/0703/7648/files/no-image-rr.png"}
                    alt="product"
                    className="w-full h-auto"
                />
            </div>

            <div className="bg-nutraWhite p-4 lg:col-span-2">
                <div className="font-bold text-xl mb-2">{item.product_name.toUpperCase()}</div>
                <p className="text-gray-700 leading-relaxed">
                    {item.description}
                </p>
                <div className="mt-4">
                    <div className="font-bold">DOSE & SCHEDULE</div>
                    <p className="text-gray-700">{item?.recommended_use}.</p>
                </div>
            </div>

            <div className="bg-nutraWhite p-4 pb-8">
                <div>
                    <div className="font-bold text-xl md:text-2xl">${item?.price}</div>
                </div>
                <div className="mt-4">
                    <a href={item?.link} target="_blank" rel="noreferrer" className="text-center bg-btnBg text-nutraWhite py-2 px-4 rounded md:hover:bg-btnBgDark transition duration-300">
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResponseGrid;
