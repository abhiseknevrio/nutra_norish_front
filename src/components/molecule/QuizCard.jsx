import React, { useEffect, useState } from "react";

const QuizCard = ({ questions, queLoading }) => {
  const [question, setNextQue] = useState(questions[0]); // Current Que
  const [nextRecQue, setNextRecQue] = useState(null);
  const [orderIndex, setOrderIndex] = useState([]);
  const [isShowPrev, setIsShowPrev] = useState(false);
  const [isShowNext, setIsShowNext] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: null,
    email: null,
  });
  const [recNextQue, setRecNextQue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [nextOrderIndex, setNextOrderIndex] = useState([]);
  const [storedRes, setStoredRes] = useState([]);
  const [existMatchQue, setExistMatchQue] = useState([]);
  const [updateInProgess, setUpdateInProgress] = useState(false)
  const [next, setNext] = useState(null)

  const checkExistMatchQue = (next) => {
    if (existMatchQue.length > 0) {
      // console.log("existMatchQue inside :", existMatchQue);
      setNextRecQue(existMatchQue?.[0]);
    } else {
      setNextRecQue(next);
    }
  };

  useEffect(() => {
    if (updateInProgess) {
      const existingQue = storedRes.find((res) => res.question === question.key);
      // console.log("existingQue", existingQue)
      if (existingQue && existMatchQue.length <= 3 && question.type === 'multi_select') {
        let matchedQuestions = [];
        question.options.forEach((option) => {
          if (existingQue.answer.includes(option.key)) {
            debugger
            matchedQuestions.push(option.nextQuestion);
          } else {
          }
        });
        const uniqueQue = [...new Set(matchedQuestions)];
        setExistMatchQue(uniqueQue.sort());
      }
    }

    checkExistMatchQue(next)

    return () => {
      setUpdateInProgress(false)
    }
  }, [updateInProgess]);
  // }, [existMatchQue.length, question.key, question.type, question.options, storedRes]);

  // console.log("existMatchQue outside", existMatchQue)

  if (queLoading) {
    return (
      <div className="three col">
        <div className="loader" id="loader-1">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  const handleInputChange = (type, que, key, next) => {
    setIsShowNext(true);
    let nextQue = [...recNextQue];
    if (next) {
      setNext(next)
      if (nextQue.includes(next)) {
        nextQue = nextQue.filter((res) => res !== next);
      } else {
        nextQue.push(next);
      }
      setNextOrderIndex([]);
    }

    const uniqueQue = [...new Set(nextQue)];
    setRecNextQue(uniqueQue.sort());

    const existingResponseIndex = storedRes.findIndex(
      (response) => response.question === que
    );
    const updatedResponses = [...storedRes];

    switch (type) {
      case "single_select":
        // Call function for type 1

        if (existingResponseIndex !== -1) {
          updatedResponses[existingResponseIndex] = {
            question: que,
            answer: key,
          };
          setStoredRes(updatedResponses);
        } else {
          setStoredRes((prevResponses) => [
            ...prevResponses,
            { question: que, answer: key },
          ]);
        }

        break;
      case "multi_select":
        // Call function for type 2

        if (existingResponseIndex === -1) {
          updatedResponses.push({ question: que, answer: [] });
        }

        const updatedQuestionIndex = updatedResponses.findIndex(
          (option) => option.question === que
        );

        const isOptionSelected =
          updatedResponses[updatedQuestionIndex].answer.includes(key);

        if (isOptionSelected) {
          updatedResponses[updatedQuestionIndex].answer = updatedResponses[
            updatedQuestionIndex
          ].answer.filter((item) => item !== key);
        } else {
          if (updatedResponses[updatedQuestionIndex].answer.length <= 2) {
            updatedResponses[updatedQuestionIndex].answer.push(key);
          } else {
            alert("you can select max three option");
          }
        }
        setStoredRes(updatedResponses);

        break;
      case "input":
        // Call function for type 3

        if (existingResponseIndex !== -1) {
          updatedResponses[existingResponseIndex] = {
            question: que,
            answer: key,
          };
          setStoredRes(updatedResponses);
        } else {
          setStoredRes((prevResponses) => [
            ...prevResponses,
            { question: que, answer: key },
          ]);
        }

        break;
      default:
        console.log("Unknown type");
    }
    setUpdateInProgress(true)
  };

  const nextQue = (val) => {
    setIsShowNext(false)
    setNext(null)
    window.scrollTo(0, 300);
    let que;
    const targetKey = nextOrderIndex.length > 0 ? nextOrderIndex[0] : val;
    que = questions?.find((item) => item.key === targetKey);
    const queIndex = storedRes.findIndex((item) => item.question === que?.key);
    if (queIndex !== -1) {
      setStoredRes(storedRes.slice(0, queIndex));
    }

    nextOrderIndex.shift();
    const updatedIndex = [...orderIndex];
    if (que) {
      setNextQue(que);
      if (!updatedIndex.includes(que.key)) {
        updatedIndex.push(que.key);
      }
      setOrderIndex(updatedIndex);
    } else {
      setIsSubmit(true);
      setIsShowPrev(false);
    }
    setIsShowPrev(true);
    existMatchQue.shift();
  };

  const prevQue = () => {
    setNext(null)
    window.scrollTo(0, 300);
    setIsShowNext(true);
    const lastOrderIndex = orderIndex[orderIndex.length - 1];
    const nextOrder = [...nextOrderIndex, lastOrderIndex].sort();
    setNextOrderIndex(nextOrder);
    orderIndex.pop();
    const lastQue = orderIndex.at(-1);
    const que = questions.find((item) => item.key === lastQue);
    if (que) {
      setNextQue(que);
    } else {
      setNextQue(questions[0]);
      setIsShowPrev(false);
    }
  };

  const submitUserData = async () => {
    setIsLoading(true);
    if (userDetails.name !== null || userDetails.email !== null) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}saveUserDataFunction`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userDetails: userDetails,
              response: storedRes,
            }),
          }
        );

        if (response.ok) {
          setIsLoading(false);
          const data = await response.json();
          setResponseData(data);
        }
      } catch (error) {
        console.error("post error : ", error);
        setIsLoading(false);
      }
    } else {
      alert("Please fill all fields");
      setIsLoading(false);
    }
  };

  return (
    <>
      {responseData.length <= 0 ? (
        <>
          {!isSubmit ? (
            <div className="text-center p-5 lg:p-20 quizBox">
              <div className="title50">{question?.question}</div>
              {
                question.type === 'multi_select' && <div className="flex justify-center items-center text-md font-bold text-warning">( Maximum Selection three )</div>
              }
              <div className="mt-9">
                {question.type === "single_select" && (
                  <div
                    className={`${question.options.length <= 2
                      ? "flex justify-center gap-x-10"
                      : "grid md:grid-cols-2 gap-5"
                      }`}
                  >
                    {question?.options?.map((item) => (
                      <div key={item.key}>
                        <div
                          onClick={() =>
                            handleInputChange(
                              question.type,
                              question.key,
                              item.key,
                              item.nextQuestion
                            )
                          }
                          className={`${question.options.length > 2
                            ? "multiSelectCard rounded-md"
                            : "rounded-full inline-block border border-borderGreen"
                            } hover:bg-hover hover:text-nutraWhite cursor-pointer text-lg  py-2.5 px-10 flex items-center justify-center ${storedRes.find(
                              (obj) =>
                                obj.question === question.key &&
                                obj.answer === item.key
                            )
                              ? "bg-btnBg text-nutraWhite"
                              : "bg-cardBg"
                            }`}
                        >
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {question.type === "input" && (
                  <>
                    {question?.options?.map((item) => (
                      <div key={item.key}>
                        <input
                          onChange={(e) =>
                            handleInputChange(
                              question.type,
                              question.key,
                              e.target.value,
                              item.nextQuestion
                            )
                          }
                          className="quizInput rounded-full title40"
                          type="text"
                        />
                        {/* <img
                                                onClick={() => nextQue(nextRecQue)}
                                                className='absolute cursor-pointer'
                                                style={{ right: "40px" }}
                                                src='/images/rightArrow-rr.svg'
                                                alt=''
                                            /> */}
                      </div>
                    ))}
                  </>
                )}

                {question.type === "multi_select" && (
                  <div className="grid grid-cols-2 lg:grid-cols-3 cursor-pointer gap-5">
                    {question?.options?.map((item) => (
                      <div
                        className={`multiSelectCard hover:bg-hover hover:text-nutraWhite flex justify-center items-center rounded-md ${storedRes.find(
                          (obj) =>
                            obj.question === question.key &&
                            obj.answer.includes(item.key)
                        )
                          ? "bg-btnBg text-nutraWhite"
                          : "bg-cardBg"
                          }`}
                        key={item.key}
                        onClick={() =>
                          handleInputChange(
                            question.type,
                            question.key,
                            item.key,
                            item.nextQuestion
                          )
                        }
                      >
                        {item.value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div
                div
                className={`flex ${isShowPrev ? "justify-between" : "justify-end"
                  } text-lg font-bold mt-20`}
              >
                {isShowPrev && (
                  <button
                    className="py-3 px-8 bg-cardBg hover:bg-hover hover:text-nutraWhite rounded-md"
                    onClick={() => prevQue()}
                  >
                    Previous
                  </button>
                )}
                {isShowNext && (
                  <button
                    className="py-3 px-8 bg-cardBg hover:bg-hover hover:text-nutraWhite rounded-md"
                    onClick={() => nextQue(nextRecQue)}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="min-w-full">
              <div className="md:w-690 justify-center mx-auto">
                <div className="">
                  <input
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                    className="formInput text-xl pl-5 py-5 mt-3"
                    type="text"
                    placeholder="Enter Name"
                  />
                  <input
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                    className="formInput text-xl pl-5 py-5 mt-3"
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
                {/* Bottom Border */}
                <div className="border-b border-borderGreen mt-10"></div>
                <div className="flex justify-center mt-4">
                  <button
                    disabled={isLoading}
                    onClick={submitUserData}
                    className={`bg-btnBg inline-block px-9 py-5 rounded-full ${isLoading && "cursor-not-allowed"
                      }`}
                  >
                    <div className="flex gap-4">
                      <div className="font-bold text-lg text-nutraWhite">
                        {isLoading ? "Submitting..." : "Submit Form"}
                      </div>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0606/0703/7648/files/btnArrow-rr.svg"
                        alt=""
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={`${responseData.recommendations.length > 0 ? "" : " md:w-874"}`}>
          <div className="text-5xl font-bold mb-5 flex justify-center">
            Response Based on your Answer
          </div>
          <p className="text-lg font-bold text-warning text-center mb-5">
            {responseData?.message?.[0]?.disclaimer}
          </p>
          <div className="">
            {responseData?.recommendations?.map((item) => (
              <div key={item?.key} className="my-5 grid grid-cols-4 gap-5">
                <div className="bg-nutraWhite flex items-center justify-center col-span-1">
                  <img
                    src={item.product_image !== "link unvailable" ? item.product_image : "/images/no-image-rr.png"}
                    alt="product"
                    className="w-full h-auto"
                  />
                </div>

                <div className="bg-nutraWhite p-4 col-span-2">
                  <div className="font-bold text-xl mb-2">{item.product_name.toUpperCase()}</div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <div className="font-bold">DOSE & SCHEDULE</div>
                    <p className="text-gray-700">{item?.recommended_use}.</p>
                  </div>
                </div>

                <div className="bg-nutraWhite p-4 col-span-1">
                  <div>
                    <div className="font-bold text-2xl">${item?.price}</div>
                  </div>
                  <div className="mt-4">
                    <a href={item?.link} target="_blank" rel="noreferrer" className="text-center bg-btnBg text-nutraWhite py-2 px-4 rounded hover:bg-btnBgDark transition duration-300">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div >
      )}
    </>
  );
};

export default QuizCard;
