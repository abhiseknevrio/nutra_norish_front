import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    question: "When should I take my vitamins? Can I take them together?",
    answer: `Your personalized supplement plan will have information on the dosage and timing of when you should take your vitamins. Generally, you should take your vitamins with food and water.
        If you are taking both calcium and iron, you should avoid taking them together as calcium supplements can interfere with iron absorption. 
        `,
  },
  {
    question: "What do supplements help with?",
    answer: `Daily consumption of supplements boosts key nutrients like calcium, iron, Vitamin D, Potassium, Magnesium, Vitamin B12, Vitamin C, Vitamin A, Folic acid and Fiber. Some people also take supplements to relieve the symptoms of a diagnosed health condition, prevent health problems, or provide certain health benefits such as helping with insomnia, probiotics for improving gut health, supporting immunity, nourishing pregnancy and preventing bone loss.
          `,
  },
  {
    question: "Can I take these supplements with my current medications?",
    answer: `
      If you are on certain medications, you should speak to your healthcare provider or drop us an email to discuss safety and any potential interactions.`,
  },
  {
    question: "What do I do if a recommended item in my plan is out of stock?",
    answer: `
      If a recommended item is out of stock, remove it from your cart and proceed with your order. You will not be charged, and we will inform you once it’s back in stock.
          `,
  },
  {
    question: "How can I start using the Nutranourish mobile application?",
    answer: `
      If you would like to use the NutraNourish App then please let us know and we will send you an email invite with the steps to register the App.  The NutraNourish app from the App Store or Play Store will have your supplement plan.   
      `,
  },
  {
    question: "How long does it take for Nutranourish vitamins to work?",
    answer: `
      Our vitamins and supplements can help overcome micronutrient deficiencies and support overall health. We work with brands like Designs for Health, Klaire Labs to ensure supplement purity, good manufacturing processes, better absorption and bioavailability. The actual time taken to work depends on a variety of factors including your lifestyle and purpose for taking the supplements. But, we recommend taking supplements for at least 4 months or more to see a positive effect.  
      `,
  },
  {
    question: "What is the benefit of a monthly supplement subscription?",
    answer: `
      When you subscribe, you do not need to remember to reorder and place separate orders each time you run out. You can also easily add products, or cancel or modify your supplement subscription at any time. You can also make a one-off purchase through our website.      `,
  },
  {
    question: "Can I return or exchange a supplement which I have bought?",
    answer: `
      To maintain highest quality standards, we are unable to refund or exchange any supplements.  
      `,
  },
];
const FAQ = () => {
  return (
    <section className="px-6 py-16">
      <div className="faq_Bg">
        <div className="flex justify-center mb-11">
          <div className="text-[30px] font-bold text-center">
            Frequently Asked Questions (F.A.Q.)
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dl className=" space-y-4 sm:max-w-[55vw] divide-y divide-gray-300 ">
            {faqs.map((faq, index) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="pt-6 flex items-left flex-col "
                style={{
                  borderTop: index !== 0 ? "1.5px solid #9e9e9e" : "none",
                }}
              >
                {({ open }) => (
                  <>
                    <dt className="sm:max-w-[55vw] flex flex-col">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="sm:text-[30px] text-[18px]  font-semibold leading-6 ">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 ">
                          {open ? (
                            <ChevronUpIcon
                              className="h-6 w-6 stroke-[3.5px]"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronDownIcon
                              className="h-6 w-6 stroke-[3.5px]"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel
                      as="dd"
                      className="mt-6 text-left sm:max-w-[45vw]"
                    >
                      <p className="sm:text-2xl text-sm font-normal leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {quality.map((item) => (
                        <div key={item.id} className='flex justify-center'>
                            <QualityCard image={item.image} text={item.text} />
                        </div>
                    ))}
                </div> */}
      </div>
    </section>
  );
};

export default FAQ;
