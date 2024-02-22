import React, { useEffect, useState } from "react";
import 'animate.css';
import ResponseGrid from "../atom/ResponseGrid";

const QuizCard = ({ questions, scrollToDiv }) => {
  const [question, setNextQue] = useState(questions[0]); // Current Que
  const [nextRecQue, setNextRecQue] = useState(null);
  const [questionOrder, setQuestionOrder] = useState([]);
  const [nextOrderIndex, setNextOrderIndex] = useState([]);
  const [isShowPrev, setIsShowPrev] = useState(false);
  const [isShowNext, setIsShowNext] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: null,
    email: null,
  });
  const [recNextQue, setRecNextQue] = useState([]);
  const [storedRes, setStoredRes] = useState([]);
  const [existMatchQue, setExistMatchQue] = useState([]);
  const [updateInProgess, setUpdateInProgress] = useState(false)
  const [isAnimate, setIsAnimate] = useState(false)
  const [isSingleSelectedCall, setIsSingleSelectedCall] = useState(false)

  // new
  const [next, setNext] = useState(null)
  const [previous, setPrevious] = useState(null)
  const [multiOptionOrder, setMultiOptionOrder] = useState([])
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("storedRes :", storedRes)
  console.log("questionOrder :", questionOrder)
  console.log("previous :", previous)

  useEffect(() => {
    if (next) {
      const queIndex = questions.findIndex(res => res.key === next.key);
      const updatedIndex = [...questionOrder];
      if (queIndex !== -1) {
        updatedIndex.push(questions[queIndex].key);
      }
      setQuestionOrder(updatedIndex);
    }
  }, [next]);


  useEffect(() => {
    if (updateInProgess) {
      const existingQue = storedRes.find((res) => res.question === question.key);
      if (existingQue && existMatchQue.length <= 3 && question.type === 'multi_select') {
        let matchedQuestions = [];
        question.options.forEach((option) => {
          if (existingQue.answer.includes(option.key)) {
            matchedQuestions.push(option.nextQuestion);
          } else {
          }
        });
        const uniqueQue = [...new Set(matchedQuestions)];
        console.log("uniqueQue", uniqueQue)
      }
    }

    return () => {
      setUpdateInProgress(false)
    }
  }, [updateInProgess]);

  const handleInputChange = (type, que, key, next) => {
    setPrevious(question)
    if (next) {
      const queIndex = questions.findIndex(res => res.key === next);
      if (type === 'single_select') {
        if (multiOptionOrder.length > 0) {
          const multiQueIndex = questions.findIndex(res => res.key === multiOptionOrder[0]);
          setNextQue(questions[multiQueIndex]);
          setNext(questions[multiQueIndex])
        } else {
          setNextQue(questions[queIndex]);
          setNext(questions[queIndex])
        }
        multiOptionOrder.shift();
      } else if (type === 'input') {
        setIsShowNext(true);
        if (multiOptionOrder.length > 0) {
          const multiQueIndex = questions.findIndex(res => res.key === multiOptionOrder[0]);
          setNext(questions[multiQueIndex]);
        } else {
          setNext(questions[queIndex]);
        }
      } else {
        setIsShowNext(true);
        let nextQue = [...multiOptionOrder];
        if (nextQue.includes(next)) {
          nextQue = nextQue.filter(res => res !== next);
        } else {
          nextQue.push(next);
        }
        setMultiOptionOrder(nextQue.sort());
        if (multiOptionOrder.length > 0) {
          const multiQueIndex = questions.findIndex(res => res.key === multiOptionOrder[0]);
          setNext(questions[multiQueIndex]);
        } else {
          setNext(questions[queIndex])
        }
      }
      setIsShowPrev(true)
    } else {
      setIsSubmit(true)
    }


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

        if (key) {
          setIsSingleSelectedCall(true)
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
            // alert("you can select max three option");
          }
        }
        setStoredRes(updatedResponses);

        break;
      case "input":
        // Call function for type 3

        if (existingResponseIndex !== -1) {
          updatedResponses[existingResponseIndex] = {
            question: que,
            answer: Number(key),
          };
          setStoredRes(updatedResponses);
        } else {
          setStoredRes((prevResponses) => [
            ...prevResponses,
            { question: que, answer: Number(key) },
          ]);
        }

        break;
      default:
        console.log("Unknown type");
    }
    setUpdateInProgress(true)
  };

  const nextQueHandler = (val) => {
    setNextQue(val)
    setIsShowNext(false)
    setIsShowPrev(true)

    // remove multioption
    multiOptionOrder.shift()
  };

  // const prevQue = (val) => {
  //   if (val) {
  //     setNextQue(val)
  //   } else {
  //     setNextQue(questions[0])
  //   }
  //   questionOrder?.pop()
  // };

  const prevQue = () => {
    const previousQuestionKey = questionOrder[questionOrder.length - 2];
    const previousQuestion = questions.find(q => q.key === previousQuestionKey);
    if (previousQuestion) {
      setNextQue(previousQuestion);
      setIsShowNext(true);
      setIsShowPrev(questionOrder.length > 1);
      setQuestionOrder(prev => prev.slice(0, -1));
    } else {
      setNextQue(questions[0]);
      setIsShowPrev(false)
    }
  };


  const submitUserData = async () => {
    setIsLoading(true);
    if (userDetails.name !== null || userDetails.email !== null) {
      try {
        const response = await fetch(
          `https://us-central1-nutra-nourish.cloudfunctions.net/saveUserDataFunction`,
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
            <div className="text-center p-5 lg:p-16 quizBox">
              <div className={` ${isAnimate ? "animate__animated animate__fadeIn" : ''}`}>
                <div className="text-lg md:text-5xl font-bold">{question?.question}</div>
                {
                  question.type === 'multi_select' && <div className="flex justify-center items-center text-md font-bold text-warning">( Maximum Selection three )</div>
                }
                <div className="mt-5 md:mt-9">
                  {question.type === "single_select" && (
                    <div
                      className={`${question.options.length <= 2
                        ? "flex justify-center gap-x-10"
                        : "grid md:grid-cols-2 gap-2.5"
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
                              } md:hover:bg-hover md:hover:text-nutraWhite cursor-pointer md:text-lg py-1.5 px-5 md:py-2.5 md:px-10 flex items-center justify-center ${storedRes.find(
                                (obj) =>
                                  obj.question === question.key &&
                                  obj.answer === item.key
                              )
                                ? "bg-btnBg text-nutraWhite"
                                : "bg-cardBg"
                              }`}
                          >
                            <div className="bg-borderGreen p-4 font-bold"> {item.nextQuestion}</div> <br></br><br></br>
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
                            className="quizInput rounded-full"
                            type="number"
                            // placeholder="$"
                            value={storedRes.find((obj) => obj.question === question.key ? obj.answer : '')?.answer || ''}
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
                    <div className={question?.options?.length > 5 ? 'optionsGrid' : 'optionsGridSmall'}>
                      {question?.options?.map((item) => (
                        <div
                          className={`multiSelectCard cursor-pointer md:hover:bg-hover md:hover:text-nutraWhite flex justify-center items-center rounded-md ${storedRes.find(
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
                          <div className="bg-borderGreen p-4 font-bold"> {item.nextQuestion}</div> <br></br><br></br>
                          {item.value}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  div
                  className={`flex ${(isShowPrev) ? "justify-between" : "justify-end"
                    } md:text-lg font-bold mt-5 md:mt-20`}
                >
                  {isShowPrev && (
                    <button
                      className="py-1.5 px-4 md:py-3 md:px-8 bg-cardBg md:hover:bg-hover md:hover:text-nutraWhite rounded-md"
                      onClick={() => prevQue(previous)}
                    >
                      Previous
                    </button>
                  )}
                  {isShowNext && (
                    <button
                      className="py-1.5 px-4 md:py-3 md:px-8 bg-cardBg md:hover:bg-hover md:hover:text-nutraWhite rounded-md"
                      onClick={() => nextQueHandler(next)}
                    >
                      Next
                    </button>
                  )}
                </div>
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
                    disabled={isLoading}
                  />
                  <input
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                    className="formInput text-xl pl-5 py-5 mt-3"
                    type="email"
                    placeholder="Enter Email"
                    disabled={isLoading}
                  />
                </div>
                {/* Bottom Border */}
                <div className="border-b border-borderGreen mt-10"></div>
                <div className="flex justify-center mt-4">
                  <button
                    disabled={isLoading}
                    onClick={() => submitUserData()}
                    className={`bg-btnBg inline-block px-9 py-5 rounded-full ${isLoading && "cursor-not-allowed"
                      }`}
                  >
                    <div className="flex gap-4">
                      <div className="font-bold text-lg text-nutraWhite">
                        {isLoading ? <div className="loaderRes">Hold on...</div> : "Submit Form"}
                      </div>
                      {
                        !isLoading &&
                        <img
                          src="https://cdn.shopify.com/s/files/1/0606/0703/7648/files/btnArrow-rr.svg"
                          alt=""
                        />
                      }
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={`${responseData.recommendations.length > 0 ? "" : " md:w-874"}`}>
          <div className="text-3xl md:text-5xl font-bold mb-5 text-center">
            Response Based on your Answer
          </div>
          <p className="md:text-lg font-bold text-warning text-center mb-5">
            {responseData?.message?.[0]?.disclaimer}
          </p>
          <div className="">
            {responseData?.recommendations?.map((item) => (
              <div key={item?.key}>
                <ResponseGrid response={item} />
              </div>
            ))}
          </div>
        </div >
      )}
    </>
  );
};

export default QuizCard;
