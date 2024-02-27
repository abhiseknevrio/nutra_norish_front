import React, { useEffect, useState } from "react";
import 'animate.css';
import ResponseGrid from "../atom/ResponseGrid";
import Button from "../atom/Button";
const QuizCard = ({ questions, scrollToDiv, setQuestions }) => {
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
  const [isAnimate, setIsAnimate] = useState(false)
  const [isNextCall, setIsNextCall] = useState(false)
  const checkExistMatchQue = (next) => {
    if (existMatchQue.length > 0) {
      setNextRecQue(existMatchQue?.[0]);
    } else {
      setNextRecQue(next);
    }
  };
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
        setExistMatchQue(uniqueQue.sort());
      }
    }
    checkExistMatchQue(next)
    return () => {
      setUpdateInProgress(false)
    }
  }, [updateInProgess]);
  const handleInputChange = (type, que, key, next) => {
    setIsAnimate(false)
    if (type !== 'single_select') {
      setIsShowNext(true);
    }
    // setIsShowNext(true);
    let nextQue = [...recNextQue];
    if (next) {
      setNext(next)
      if (nextQue.includes(next)) {
        nextQue = nextQue.filter((res) => res !== next);
        if (type === 'multi_select') {
          setNextOrderIndex(nextOrderIndex.filter(res => res !== next))
        }
      } else {
        nextQue.push(next);
        setNextOrderIndex([]);
      }
    } else {
      setIsSubmit(true)
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
    setIsAnimate(true)
    setIsShowNext(false)
    setNext(null)
    scrollToDiv()
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
  useEffect(() => {
    // const handleClick = (event) => {
    //   console.log("Target clicked", event.target);
    //   // nextQueHandler(nextRecQue)
    // };
    // const targetElement = document.getElementById("single_select");
    // if (targetElement) {
    //   targetElement.addEventListener("click", handleClick);
    // }
    // return () => {
    //   if (targetElement) {
    //     targetElement.removeEventListener("click", handleClick);
    //   }
    // };
    if (isNextCall && nextRecQue && question.type === 'single_select') {
      nextQueHandler(nextRecQue)
    }
  }, [isNextCall, nextRecQue]);
  const prevQue = () => {
    setIsAnimate(false)
    setNext(null)
    scrollToDiv()
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
  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  const submitUserData = async () => {
    setIsLoading(true);
    if (userDetails.name !== null && userDetails.email !== null && validateEmail(userDetails.email)) {
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
      alert("Please fill all fields and correct details");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (responseData?.recommendations?.length > 0) {
      addToCart();
    }
  }, [responseData.recommendations])
  const addToCart = async () => {
    // Construct form data
    const formData = new URLSearchParams();
    responseData?.recommendations?.forEach(product => {
      if (product.variant_id) {
        formData.append('id[]', product.variant_id);
        formData.append('quantity[]', 1);
        formData.append('productId[]', product.product_id);
      }
    });
    try {
      const response = await fetch("https://nutranourish.shop/cart/add.js", {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // Set the correct content type
        }
      });
      if (response.ok) {
        alert('Product added to cart!');
      } else {
        throw new Error('Failed to add product to cart');
      }
    } catch (error) {
      console.error(error);
    }
  }
  const restartQuiz = () => {
    setQuestions(null)
    scrollToDiv()
  }
  return (
      <>
        {responseData.length <= 0 ? (
            <>
              {!isSubmit ? (
                  <div className="text-center p-5 lg:p-16 quizBox">
                    <div className={` ${isAnimate ? "animate__animated animate__fadeIn animate__delay-0.5s" : ''}`}>
                      <div className="text-lg md:text-5xl font-bold">{question?.question}</div>
                      {
                          question.type === 'multi_select' && <div className="flex justify-center items-center text-md font-bold text-warning mt-3">Choose Up to Three Options</div>
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
                                        id="single_select"
                                        onClick={() => {
                                          handleInputChange(question.type, question.key, item.key, item.nextQuestion);
                                          setIsNextCall(true);
                                        }}
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
                                      {/* <div className="bg-borderGreen p-4 font-bold"> {item.nextQuestion}</div> <br></br><br></br> */}
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
                                        placeholder={item.key === 'age' ? "enter your age" : "$"}
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
                                    {/* <div className="bg-borderGreen p-4 font-bold"> {item.nextQuestion}</div> <br></br><br></br> */}
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
                                onClick={() => prevQue()}
                            >
                              Previous
                            </button>
                        )}
                        {isShowNext && (
                            <button
                                className="py-1.5 px-4 md:py-3 md:px-8 bg-cardBg md:hover:bg-hover md:hover:text-nutraWhite rounded-md"
                                onClick={() => nextQueHandler(nextRecQue)}
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
                            required
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
              <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-5 lg:gap-0">
                <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-center md:text-left">
                  Response based on your answer
                </div>
                <a href="https://nutranourish.shop/cart" target="_blank" rel="noreferrer">
                  <Button text={"Go To Cart"} />
                </a>
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
              <div className="flex justify-center items-center mt-10">
                <Button onClick={restartQuiz} text={"Restart Quiz"} />
              </div>
            </div >
        )}
      </>
  );
};
export default QuizCard;
