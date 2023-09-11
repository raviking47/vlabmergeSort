import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const App = () => {
  const questionsData = [
    
  {
    s_no: 1,
    question: "What is Merge Sort?",
    answers: [
      { text: "(1) A sorting algorithm that uses quick comparisons.", isCorrect: false },
      { text: "(2) A sorting algorithm based on the divide-and-conquer approach.", isCorrect: true },
      { text: "(3) A sorting algorithm that performs bubble sort twice.", isCorrect: false },
      { text: "(4) A sorting algorithm that works only on arrays of equal elements.", isCorrect: false },
    ],
  },
  {
    s_no: 2,
    question: "What is the time complexity of Merge Sort?",
    answers: [
      { text: "(1) O(n)", isCorrect: false },
      { text: "(2) O(log n)", isCorrect: false },
      { text: "(3) O(n log n)", isCorrect: true },
      { text: "(4) O(n^2)", isCorrect: false },
    ],
  },
  {
    s_no: 3,
    question: "What is the space complexity of Merge Sort?",
    answers: [
      { text: "(1) O(n)", isCorrect: false },
      { text: "(2) O(log n)", isCorrect: false },
      { text: "(3) O(n log n)", isCorrect: false },
      { text: "(4) O(1)", isCorrect: true },
    ],
  },
  {
    s_no: 4,
    question: "In Merge Sort, how many sub-arrays are created in each recursive call during the merge step?",
    answers: [
      { text: "(1) One sub-array", isCorrect: false },
      { text: "(2) Two sub-arrays", isCorrect: true },
      { text: "(3) Three sub-arrays", isCorrect: false },
      { text: "(4) Four sub-arrays", isCorrect: false },
    ],
  },
  {
    s_no: 5,
    question: "Which of the following sorting algorithms is NOT stable?",
    answers: [
      { text: "(1) Bubble Sort", isCorrect: false },
      { text: "(2) Insertion Sort", isCorrect: false },
      { text: "(3) Quick Sort", isCorrect: true },
      { text: "(4) Merge Sort", isCorrect: false },
    ],
  },
  {
    s_no: 6,
    question: "Merge Sort is an example of which sorting paradigm?",
    answers: [
      { text: "(1) Comparison-based sorting", isCorrect: false },
      { text: "(2) Bucket sorting", isCorrect: false },
      { text: "(3) Radix sorting", isCorrect: false },
      { text: "(4) Divide and conquer sorting", isCorrect: true },
    ],
  },
  {
    s_no: 7,
    question: "Which of the following is NOT a step in the Merge Sort algorithm?",
    answers: [
      { text: "(1) Divide the unsorted list into n sublists", isCorrect: true },
      { text: "(2) Recursively sort each sublist", isCorrect: false },
      { text: "(3) Merge the sorted sublists back into one sorted list", isCorrect: false },
      { text: "(4) Compare adjacent elements and swap if needed", isCorrect: false },
    ],
  },
  {
    s_no: 8,
    question: "In Merge Sort, what is the best-case time complexity?",
    answers: [
      { text: "(1) O(n)", isCorrect: false },
      { text: "(2) O(log n)", isCorrect: false },
      { text: "(3) O(n log n)", isCorrect: true },
      { text: "(4) O(n^2)", isCorrect: false },
    ],
  },
  {
    s_no: 9,
    question: "Which data structure is typically used in the Merge Sort algorithm to merge two sorted arrays?",
    answers: [
      { text: "(1) Stack", isCorrect: false },
      { text: "(2) Queue", isCorrect: false },
      { text: "(3) Linked List", isCorrect: false },
      { text: "(4) Array", isCorrect: true },
    ],
  },
  {
    s_no: 10,
    question: "What is the auxiliary space complexity of Merge Sort?",
    answers: [
      { text: "(1) O(1)", isCorrect: false },
      { text: "(2) O(log n)", isCorrect: false },
      { text: "(3) O(n)", isCorrect: true },
      { text: "(4) O(n log n)", isCorrect: false },
    ],
  },
];

const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questionsData.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const renderQuestion = () => {
    const currentQuestion = questionsData[currentQuestionIndex];
    return (
      <Box
y        display={"flex"}
        m={3}
        borderColor={"black"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Heading fontSize={"2xl"}>{"Question  "}{currentQuestion.s_no}:- {currentQuestion.question}</Heading>
       <Container centerContent>
       {currentQuestion.answers.map((answer, index) => (
          <Button  m={3} colorScheme="blue"
          _hover={{backgroundColor:"red"}}
            key={index}
            onClick={() => handleAnswerButtonClick(answer.isCorrect)}
          >
            {answer.text}
          </Button>
        ))}
       </Container>
      </Box>
    );
  };

  const renderResult = () => {
    return (
      <Box
        display={"flex"}
        m={3}
        borderColor={"black"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Heading>Quiz Result</Heading>
        <Text fontStyle={"oblique"} fontSize={"2xl"}>
          Your Score: {score}
        </Text>
        
      <Box 
        m={3}
        p={3}
        borderWidth={"2px"}
        shadow={"1px 2px 1px 2px"}
        borderRadius={"20px"}
        borderColor={"black"}
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}>
       {questionsData.map((user)=>(
        <Box  display={"flex"}
      
         key={user.s_no} >
          <Text fontSize={"1xl"} fontWeight={"bold"}>{"Question  "}{user.s_no}:-{user.question} <Text borderWidth={"1px"} borderRadius={"20px"} bg={"skyblue"} borderColor={"black"}>{user.answers.map((answer)=>(<p>{answer.isCorrect===true?answer.text:""}</p>))}</Text></Text>
        </Box>
        
       ))}
      </Box>
      <Button colorScheme="pink" onClick={restartQuiz}>
          Restart Quiz
        </Button>
      </Box>
      
    );
  };

  return (
    <Box
      display={"flex"}
      m={3}
      borderWidth={"2px"}
      shadow={"1px 2px 1px 2px"}
      borderRadius={"20px"}
      borderColor={"black"}
      flexDirection={"Column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading>Merge Sort Quiz</Heading>
      {showResult ? renderResult() : renderQuestion()}
    </Box>
  );
};

export default App;
