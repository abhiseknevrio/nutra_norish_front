import React, { useState } from 'react';

const QuizCard = ({ questions }) => {
    const [question, setNextQue] = useState(questions[0]); // Current Que
    const [userInput, setUserInput] = useState([]);
    const [singleSelectInput, setSingleSelectInput] = useState([]);
    const [multiSelectInput, setMultiSelectInput] = useState([]);
    const [nextRecQue, setNextRecQue] = useState(null)
    const [isSubmit, setIsSubmit] = useState(false)
    // const [responseData, setResponseData] = useState([
    //     {
    //         "question": "How is your menstrual cycle?",
    //         "questionKey": "q1.1",
    //         "option": "Post Menopause/ Hysterectomy",
    //         "optionKey": "option2",
    //         "condition": {
    //             "gender": "Female"
    //         },
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/complete-multi%E2%84%A2?_pos=3&_sid=b69aed83a&_ss=r",
    //         "descriotion": "Female not having menses: Complete Multi without Copper & Iron (Take 4 capsules per day (2 with each meal)) and OmegaAvail synergy (1 after any meal)",
    //         "product_name": "DFH Multi (feee of copper and iron)",
    //         "key": "recommendation2",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Improve My General Health & Wellness",
    //         "optionKey": "option1",
    //         "condition": {
    //             "gender": "Male"
    //         },
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/twice-daily-multi%E2%84%A2?_pos=5&_sid=c5ed6abc6&_ss=r",
    //         "description": "twice daily (2 after breakfast)",
    //         "product_name": "Twice Daily Mutli",
    //         "key": "recommendation4",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Improve My General Health & Wellness",
    //         "optionKey": "option1",
    //         "condition": {
    //             "gender": "Male"
    //         },
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/omegavail%E2%84%A2-synergy?_pos=1&_sid=bf8ccad35&_ss=r",
    //         "description": "1 after any meal",
    //         "product_name": "OmegaAvail Synergy",
    //         "key": "recommendation5",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Reduce Body Fat",
    //         "optionKey": "option3",
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/thermo-efx%E2%84%A2?_pos=3&_sid=5b6bb77a4&_ss=r",
    //         "description": "",
    //         "product_name": "Thermo-EFx™",
    //         "key": "recommendation7",
    //         "properties": {
    //             "Gluten_free": false,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Bone health",
    //         "optionKey": "option4",
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/osteoben%C2%AE?_pos=1&_sid=97a4267d1&_ss=r",
    //         "descriotion": "Take 4 capsules per day",
    //         "product_name": "Osteoben",
    //         "key": "recommendation8",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Get Restful Sleep",
    //         "optionKey": "option9",
    //         "price": 68,
    //         "link": "https://nutranourish.shop/products/insomnitol%E2%84%A2?_pos=2&_sid=3a1d376c8&_ss=r",
    //         "description": "(1-2 capsules - 30 minutes before bed) ",
    //         "product_name": "Insomnitol",
    //         "key": "recommendation19",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Get Restful Sleep",
    //         "optionKey": "option9",
    //         "price": 68,
    //         "link": "https://nutranourish.shop/products/insomnitol%E2%84%A2",
    //         "description": "1/2 to 1 scoop 30 minutes before bed",
    //         "product_name": "Insomnitol",
    //         "key": "recommendation20",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Improve Fitness performance (improve my workout)",
    //         "optionKey": "option10",
    //         "price": 84,
    //         "link": "https://nutranourish.shop/products/pretrain-nrg%E2%84%A2?_pos=1&_sid=318dab563&_ss=r",
    //         "description": " (Mix 9 grams (approximately one scoop) in 8 ounces of water and consume 30 to 45 minutes before a workout)",
    //         "product_name": "PreTrain NRG™",
    //         "key": "recommendation21",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Improve Fitness performance (improve my workout)",
    //         "optionKey": "option10",
    //         "price": 95,
    //         "link": "https://nutranourish.shop/collections/amino-acids/products/amino-acid-supreme%E2%84%A2s",
    //         "description": "(Mix 12 grams (approximately one scoop) in 8 to 10 ounces of water per day)",
    //         "product_name": "Amino Acid Supreme",
    //         "key": "recommendation22",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Gain Lean Muscles mass",
    //         "optionKey": "option11",
    //         "price": 50,
    //         "link": "https://nutranourish.shop/products/krealkalyn-pro",
    //         "description": "Take 2 capsules per day, 2nd priority",
    //         "product_name": "KreAlkalyn Pro",
    //         "key": "recommendation23",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Gain Lean Muscles mass",
    //         "optionKey": "option11",
    //         "price": 69,
    //         "link": "https://nutranourish.shop/products/phytotein%E2%84%A2",
    //         "description": "(if vegetarian or vegan Mix 29 to 34 grams (approximately one scoop) in 10 ounces of water)",
    //         "product_name": "Phytotein",
    //         "key": "recommendation24",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Gain Lean Muscles mass",
    //         "optionKey": "option11",
    //         "price": 115,
    //         "link": "https://nutranourish.shop/products/purepaleo%E2%84%A2",
    //         "description": "if non-veg and dairy free then Mix 27 grams (approximately one scoop) in 8 ounces of water",
    //         "product_name": "PurePaleo",
    //         "key": "recommendation25",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Gain Lean Muscles mass",
    //         "optionKey": "option11",
    //         "price": 141,
    //         "link": "https://nutranourish.shop/products/wheymeal%E2%84%A2",
    //         "description": "(If non-veg ) Mix 30 grams (approximately one scoop) in 8 ounces of water or any other beverage per day",
    //         "product_name": "WheyCool ",
    //         "key": "recommendation26",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Joint health",
    //         "optionKey": "option12",
    //         "price": 70,
    //         "link": "https://nutranourish.shop/products/arthrosoothe%E2%84%A2?_pos=1&_sid=6154e0f03&_ss=r",
    //         "description": "Take 4 capsules per day with meals (Divided dosing recommended.)",
    //         "product_name": "Arthrosoothe ",
    //         "key": "recommendation27",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Heart health",
    //         "optionKey": "option13",
    //         "price": 55,
    //         "link": "https://nutranourish.shop/products/omegavail%E2%84%A2-hi-po",
    //         "description": "(instread of omegaavail synergy) (1 after any meal)",
    //         "product_name": "OmegaAvail Hipo ",
    //         "key": "recommendation28",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Heart health",
    //         "optionKey": "option13",
    //         "price": 77.2,
    //         "link": "https://nutranourish.shop/products/trimag-supreme%E2%84%A2-night",
    //         "description": "(Mix 5 grams (approximately 1 scoop) of powder mixed in 8 ounces of water)",
    //         "product_name": "TriMag Supreme",
    //         "key": "recommendation29",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Support Brain Health (Focus, Memory, Concentration)",
    //         "optionKey": "option14",
    //         "price": 0,
    //         "link": "https://nutranourish.shop/products/omegavail%E2%84%A2-synergy?_pos=1&_sid=bf8ccad35&_ss=r",
    //         "description": "(1 after any meal)",
    //         "product_name": "OmegaAvail synergy",
    //         "key": "recommendation31",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Support Brain Health (Focus, Memory, Concentration)",
    //         "optionKey": "option14",
    //         "price": 88,
    //         "link": "https://nutranourish.shop/products/neuromag%E2%84%A2?_pos=1&_sid=56acfcc8c&_ss=r",
    //         "description": "(Take 3 capsules after meals per day)",
    //         "product_name": "Neuromag",
    //         "key": "recommendation30",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Anxiety",
    //         "optionKey": "option15",
    //         "price": 52,
    //         "link": "https://nutranourish.shop/products/neuromag%E2%84%A2?_pos=1&_sid=56acfcc8c&_ss=r",
    //         "description": "After any meal take 2 mL (approximately 4 pumps) and hold in mouth for 30 seconds before swallowing. 1-2 times a day.",
    //         "product_name": "Liposomal Neurocalm",
    //         "key": "recommendation32",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Anxiety",
    //         "optionKey": "option15",
    //         "price": 29.99,
    //         "link": "link not provided",
    //         "description": "2 capsules per day",
    //         "product_name": "Magnesium glycinate complex",
    //         "key": "recommendation10",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Eye Health",
    //         "optionKey": "option16",
    //         "price": 0,
    //         "link": "https://nutranourish.shop/products/ocuforce%E2%84%A2?_pos=1&_sid=c0f14bded&_ss=r",
    //         "description": "Take 2 capsules per day with meals",
    //         "product_name": "Ocuforce",
    //         "key": "recommendation34",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Blood Sugar Control",
    //         "optionKey": "option17",
    //         "price": 91,
    //         "link": "https://nutranourish.shop/products/glucosupreme%E2%84%A2-herbal?_pos=1&_sid=00957a5b1&_ss=r",
    //         "description": "Take 4 capsules per day with meals (divided dosing recommended)",
    //         "product_name": "Glucosupreme Herbal",
    //         "key": "recommendation35",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Blood Pressure",
    //         "optionKey": "option18",
    //         "price": 29.99,
    //         "link": "link not provided",
    //         "description": "2 capsules per day",
    //         "product_name": "Magnesium glycinate complex",
    //         "key": "recommendation10",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Blood Pressure",
    //         "optionKey": "option18",
    //         "price": 83,
    //         "link": "https://nutranourish.shop/products/htn-supreme%E2%84%A2?_pos=1&_sid=e3a901793&_ss=r",
    //         "description": " Take 4 capsules per day (Divided dosing recommended)",
    //         "product_name": " HTN supreme",
    //         "key": "recommendation33",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Cholestrol",
    //         "optionKey": "option19",
    //         "price": 79,
    //         "link": "https://nutranourish.shop/products/lipotrienols-ryr%E2%84%A2?_pos=1&_sid=e9201b729&_ss=r",
    //         "description": "Take 2 capsules per day in the evening with food. For best results, do not take within 6 hours of taking a vitamin E supplement containing D-alpha-tocopherol",
    //         "product_name": "Lipotrienols RYR",
    //         "key": "recommendation36",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Is there anything you're particularly concerned about or want to improve?",
    //         "questionKey": "q3",
    //         "option": "Liver Health/ Better Detox",
    //         "optionKey": "option20",
    //         "price": 0,
    //         "link": "https://nutranourish.shop/products/hepatatone-plus%E2%84%A2?_pos=1&_sid=bbf699861&_ss=r",
    //         "description": "Take 4 capsules per day- (Divided dosing recommended.)",
    //         "product_name": "Hepatatone Plus",
    //         "key": "recommendation37",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "How often do you get colds/ other infections?",
    //         "questionKey": "q3.1",
    //         "option": "2-3 times a year",
    //         "optionKey": "option2",
    //         "condition": null,
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/biofizz%E2%84%A2-immune?_pos=1&_sid=6bde1accb&_ss=r",
    //         "description": "1scoop after any meal",
    //         "product_name": "Biofizz immune",
    //         "key": "recommendation6",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "In general, how much stress do you have in life?",
    //         "questionKey": "q3.2",
    //         "option": "Severe/ Constant",
    //         "optionKey": "option4",
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/adrenotone%E2%84%A2-90-vegetarian-capsules?_pos=1&_sid=84452aa2d&_ss=r",
    //         "description": "1 capsule after meal (twice a day)",
    //         "product_name": "DFH Multi with Copper & Iron",
    //         "key": "recommendation9",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "In general, how much stress do you have in life?",
    //         "questionKey": "q3.2",
    //         "option": "Severe/ Constant",
    //         "optionKey": "option4",
    //         "price": 29.99,
    //         "link": "link not provided",
    //         "description": "2 capsules per day",
    //         "product_name": "Magnesium glycinate complex",
    //         "key": "recommendation10",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Maintain Healthy Skin, Hair and Nails",
    //         "questionKey": "q3.3",
    //         "option": "skin",
    //         "optionKey": "option1",
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/whole-body-collagen?_pos=1&_sid=f4d006ec0&_ss=r",
    //         "description": "1 scoop after meal",
    //         "product_name": "Whole Body Collagen",
    //         "key": "recommendation11",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     },
    //     {
    //         "question": "Maintain Healthy Skin, Hair and Nails",
    //         "questionKey": "q3.3",
    //         "option": "Hair",
    //         "optionKey": "option2",
    //         "price": 29.99,
    //         "link": "https://nutranourish.shop/products/h-s-n-complete%E2%84%A2?_pos=3&_sid=047469274&_ss=r",
    //         "description": "Take 4 capsules per day with meals",
    //         "product_name": "HSN Complete",
    //         "key": "recommendation12",
    //         "properties": {
    //             "Gluten_free": true,
    //             "non_vegetarian": false,
    //             "vegan": true,
    //             "Dairy_free": true
    //         }
    //     }
    // ])
    const [responseData, setResponseData] = useState([])

    console.log("responseData", responseData)

    const handleCheckboxChange = (que, key, next) => {
        const updatedSelectedOptions = [...multiSelectInput];
        const questionIndex = updatedSelectedOptions.findIndex(option => option.question === que);
        if (questionIndex === -1) {
            updatedSelectedOptions.push({ question: que, answer: [] });
        }

        const updatedQuestionIndex = updatedSelectedOptions.findIndex(option => option.question === que);

        const isOptionSelected = updatedSelectedOptions[updatedQuestionIndex].answer.includes(key);

        if (isOptionSelected) {

            updatedSelectedOptions[updatedQuestionIndex].answer = updatedSelectedOptions[updatedQuestionIndex].answer.filter(item => item !== key);
        } else {

            updatedSelectedOptions[updatedQuestionIndex].answer.push(key);
        }
        setMultiSelectInput(updatedSelectedOptions);

        setNextRecQue(next)

    };

    const handleRadioChange = (que, key, next) => {
        const existingResponseIndex = singleSelectInput.findIndex(response => response.question === que);

        if (existingResponseIndex !== -1) {
            const updatedResponses = [...singleSelectInput];
            updatedResponses[existingResponseIndex] = { question: que, answer: key };
            setSingleSelectInput(updatedResponses)
            setNextRecQue(next);
        } else {
            setSingleSelectInput(prevResponses => [...prevResponses, { question: que, answer: key }]);
        };
        setNextRecQue(next);
    };

    const handleInputChange = (que, key, next) => {
        const existingResponseIndex = userInput.findIndex(response => response.question === que);
        if (existingResponseIndex !== -1) {
            const updatedResponses = [...userInput];
            updatedResponses[existingResponseIndex] = { question: que, answer: key };
            setUserInput(updatedResponses)
        } else {
            setUserInput(prevResponses => [...prevResponses, { question: que, answer: key }]);
        };
        setNextRecQue(next);
    };


    const addUserData = async () => {
        const finalArr = [...singleSelectInput, ...userInput, ...multiSelectInput]
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}saveUserDataFunction`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "userDetails": {
                        "name": "Abhisek",
                        "email": "abhisek@nevrio.tech"
                    },
                    response: finalArr
                }),
            });

            if (response.ok) {
                const data = await response.json()
                setResponseData(data.recommendations)
            }
        } catch (error) {
            console.error("post error : ", error);
        }

    };

    const nextQue = (val) => {
        const que = questions?.find((item) => item.key === val)

        try {
            if (que !== undefined) {
                setNextQue(que)
            } else {
                alert("Ques end...! --> Submit Form")
                setIsSubmit(true)
            }
        } catch (error) {
            console.error("nextQue error", error)
        }
    };

    return (
        <>
            {
                !responseData.length ?
                    <div className='text-center p-20 quizBox'>
                        <div className='title50'>{question?.question}{question?.required && <span>*</span>}</div>
                        <div className='mt-9'>
                            {question.type === "single_select" &&
                                <>
                                    {question?.options?.map((item) => (
                                        <div key={item.key}>
                                            <div className='text-lg border border-borderGreen rounded-full py-2.5 px-5 inline-block'>
                                                <input
                                                    onClick={() => handleRadioChange(question.key, item.key, item.nextQuestion)}
                                                    type="radio"
                                                    id={item.key}
                                                    name={item.value}
                                                    value={item.key}
                                                />
                                                <label className='px-1.5' htmlFor={item.key}>{item.value}</label>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            }
                            {question.type === "input" &&
                                <>
                                    {question?.options?.map((item) => (
                                        <div key={item.key}>
                                            <input
                                                onChange={(e) => handleInputChange(question.key, e.target.value, item.nextQuestion)}
                                                className='quizInput rounded-full'
                                                type='text'
                                            />
                                            <img
                                                onClick={() => nextQue(nextRecQue)}
                                                className='absolute cursor-pointer'
                                                style={{ right: "40px" }}
                                                src='/images/rightArrow.svg'
                                                alt=''
                                            />
                                        </div>
                                    ))}
                                </>
                            }


                            {
                                question.type === "multi_select" &&
                                <div className='grid grid-cols-3 cursor-pointer gap-5' >
                                    {
                                        question?.options?.map(item =>
                                            <div className='multiSelectCard' key={item.key} onClick={() => handleCheckboxChange(question.key, item.key, item.nextQuestion)}>{item.value}</div>)
                                    }
                                </div>
                            }
                        </div >

                        {
                            isSubmit && <h1 onClick={addUserData}>Submit Form </h1>
                        }
                        <div div className='flex justify-between text-lg font-bold mt-10' >
                            <button>Previous</button>
                            <button className='hover:text-borderGreen' onClick={() => nextQue(nextRecQue)}>Next</button>
                        </div>

                    </div>

                    :
                    <div className='h-96 overflow-y-scroll'>
                        <h1 className='text-5xl font-bold'>Response Based on your Answer</h1>
                        {
                            responseData ?
                                <>
                                    {responseData.map(item => (
                                        <div key={item?.key} className='my-5 border p-2.5'>
                                            <div className='text-xl'>Quetion: {item?.question}</div>
                                            <div>Answer : {item?.option}</div>
                                            <div>Rec : {item?.descriotion}</div>
                                            <div>Product : {item?.product_name}</div>
                                            <div>Price : {item?.price}</div>
                                            <div>Properties : {item?.properties.Dairy_free && "Dairy Free, "} {item?.properties.Gluten_free && "Gluten Free, "} {item?.properties.non_vegetarian && "Non Vegetarian, "} {item?.properties.vegan && "Vegan"}</div>
                                            <div className='hover:text-btnBg'>
                                                <a href={item.link} target='_blank'>Click here for Product Info</a>
                                            </div>
                                        </div>
                                    ))}
                                </>
                                :
                                null
                        }
                    </div>
            }
        </>
    );
};

export default QuizCard;