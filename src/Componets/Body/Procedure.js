import React, { useState } from "react";
// import "../../App.css";

import "./Body.css";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
// import { collapseClasses } from "@mui/material";
import { useToast } from '@chakra-ui/react'
export default function Procedure() {
  const toast = useToast()
  const [numbers, setNumbers] = useState([98, 58, 177, 46, 145, 24, 123, 12 ]);
  const [numbers1, setNumbers1] = useState([98, 58, 177, 46, 145, 24, 123, 12]);
  //   Boxide the Arrya

  const numbers2 = numbers1.slice(0, Math.floor(numbers1.length / 2));
  const numbers3 = numbers1.slice(Math.floor(numbers1.length / 2));
  const numbers4 = numbers2.slice(0, Math.floor(numbers2.length / 2));
  const numbers5 = numbers2.slice(Math.floor(numbers2.length / 2));
  const numbers6 = numbers3.slice(0, Math.floor(numbers3.length / 2));
  const numbers7 = numbers3.slice(Math.floor(numbers3.length / 2));

  // Conquer the Array
  const numbers41 = numbers2
    .slice(0, Math.floor(numbers2.length / 2))
    .sort((a, b) => a - b);
  const numbers51 = numbers2
    .slice(Math.floor(numbers2.length / 2))
    .sort((a, b) => a - b);
  const numbers61 = numbers3
    .slice(0, Math.floor(numbers3.length / 2))
    .sort((a, b) => a - b);
  const numbers71 = numbers3
    .slice(Math.floor(numbers3.length / 2))
    .sort((a, b) => a - b);
  const numbers21 = numbers1
    .slice(0, Math.floor(numbers1.length / 2))
    .sort((a, b) => a - b);
  const numbers31 = numbers1
    .slice(Math.floor(numbers1.length / 2))
    .sort((a, b) => a - b);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = inputValue.split(",").map((item) => item.trim());
    const newArray1 = inputValue.split(",").map((item) => item.trim());
    if(newArray.length>8){
      // newArray=0
      // newArray1=0
      toast({
        title: 'Array Limit Exceed',
        description: "Please enter the array only with Eight values.",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:"top",
      })
     setTimeout(() => {
       reloadPage()
     }, 3000);
    } 
    if(newArray.length<=1){
      // newArray=0
      // newArray1=0
      toast({
        title: 'You will enter an empty array or single item',
        description: "Please enter the array only with eight values.",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:"top",
      })
     setTimeout(() => {
       reloadPage()
     }, 3000);
    } 
    else{
      setNumbers(newArray);
      setNumbers1(newArray1);
      setInputValue("");
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const [isCheckedD, setisCheckedDD] = useState(false);

  const handleCheckBoxide = () => {
    setisCheckedDD(true);
  };
  const [isCheckedC, setisCheckedC] = useState(false);

  const handleCheckCon = () => {
    setisCheckedC(true);
  };
  const [isCheckedSort, setisCheckedSort] = useState(false);

  const handleCheckSort = () => {
    setisCheckedSort(true);
    const newArray = inputValue.split(",").map((item) => item.trim());
  };

  return (
    <>
      <Box
        display={"flex"}
        m={3}
        borderWidth={"2px"}
        shadow={"1px 2px 1px 2px"}
        borderRadius={"20px"}
        borderColor={"black"}
        justifyContent={"center"}
        alignContent={"center"}
        flexDir={"colume"}
        alignItems={"center"}
      >
        <Heading>Merge Sort of an Array </Heading>
      </Box>

      <Box
        display={"flex"}
        m={3}
        borderWidth={"2px"}
        shadow={"1px 2px 1px 2px"}
        borderRadius={"20px"}
        borderColor={"black"}
        justifyContent={"center"}
        alignContent={"center"}
        flexDirection="column"
        alignItems={"center"}
      >
        <Heading fontSize={"1xl"}>Enter the value of an array</Heading>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Enter Numbers with Comma as shown below{" "}
        </Text>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          (1,2,3,4,5,6,7,8)
        </Text>

        <form onSubmit={handleSubmit}>
          <center>
            <Input
              className="input-bar"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter comma-separated values"
            />
          </center>
          <center>
            {" "}
            <Button p={3} m={3} colorScheme="pink" type="submit">
              Submit
            </Button>
          </center>
        </form>
      </Box>
      <Box
        display={"flex"}
        m={3}
        p={3}
        borderWidth={"2px"}
        shadow={"1px 2px 1px 2px"}
        borderRadius={"20px"}
        borderColor={"black"}
        justifyContent={"center"}
        alignContent={"center"}
        flexDirection="column"
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          m={3}
          borderColor={"black"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"colume"}
          alignItems={"center"}
        >
          {numbers1.map((item, index) => (
            <Box
              display={"flex"}
              m={3}
              width={"35px"}
              height={"35px"}
              bg={"darkblue"}
              color={"white"}
              shadow={"1px 2px 1px 2px"}
              borderRadius={"20px"}
              borderColor={"black"}
              justifyContent={"center"}
              alignContent={"center"}
              flexDirection={"colume"}
              alignItems={"center"}
              key={index}
            >
              {item}
            </Box>
          ))}
        </Box>

        <Button
          colorScheme="pink"
          type="button"
          checked={isCheckedD}
          onClick={handleCheckBoxide}
        >
          Divide Array
        </Button>
        <Box
          display={"flex"}
          m={3}
          borderColor={"black"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"colume"}
          alignItems={"center"}
        >
          {isCheckedD &&
            numbers2.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
          <span class="blank-space"></span>

          {isCheckedD &&
            numbers3.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
        </Box>

        <Box
          display={"flex"}
          m={3}
          borderColor={"black"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"colume"}
          alignItems={"center"}
        >
          {isCheckedD &&
            numbers4.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
          <span class="blank-space"></span>

          {isCheckedD &&
            numbers5.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
          <span class="blank-space"></span>

          {isCheckedD &&
            numbers6.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
          <span class="blank-space"></span>
          {isCheckedD &&
            numbers7.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
        </Box>
        <Container>
       {isCheckedD && (
          <Textarea
           borderWidth={"2px"}
           borderColor={"black"}
           color={"black"}
            value={"The Merge Sort algorithm starts by dividing the unsorted array into two equal halves. This step is recursively applied to each sub-array until each sub-array contains only one element, which is considered sorted. But here we show only two recursive steps and the array is broken into two items as page view is not supported for further steps."}
            rows={7}
            m={2}
            justifyContent={"center"}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize="18px"
            isReadOnly
            size="sm"
          />
        )}
       </Container>
        {isCheckedD && (
          <Button
            colorScheme="pink"
            type="button"
            checked={isCheckedC}
            onClick={handleCheckCon}
          >
            Sort & Conquer Array
          </Button>
        )}
        <Box
          display={"flex"}
          m={3}
          borderColor={"black"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"colume"}
          alignItems={"center"}
        >
          {isCheckedC &&
            numbers41.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
          <span class="blank-space"></span>

          {isCheckedC &&
            numbers51.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
          <span class="blank-space"></span>

          {isCheckedC &&
            numbers61.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
          <span class="blank-space"></span>
          {isCheckedC &&
            numbers71.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
        </Box>

        <Box
          display={"flex"}
          m={3}
          borderColor={"black"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"colume"}
          alignItems={"center"}
        >
          {isCheckedC &&
            numbers21.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
          <span class="blank-space"></span>

          {isCheckedC &&
            numbers31.map((item, index) => (
              <Box
                display={"flex"}
                m={3}
                width={"35px"}
                height={"35px"}
                bg={"darkblue"}
                color={"white"}
                shadow={"1px 2px 1px 2px"}
                borderRadius={"20px"}
                borderColor={"black"}
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"colume"}
                alignItems={"center"}
                key={index}
              >
                {item}
              </Box>
            ))}
        </Box>
        <Container>
       {isCheckedC && (
          <Textarea
           borderWidth={"2px"}
           rows={10}
           fontSize={"18px"}
           borderColor={"black"}
           color={"black"}
            value={"Step 2: Recursively solve after dividing the array into sub-arrays, Merge Sort is applied recursively to each of them.The recursive process continues until each sub-array is sorted (i.e., it contains only one element).  Step 3: Combine the final step is to merge the sorted sub-arrays back together to create a single sorted array. This merging process is achieved by using the merge() function.The merge() function takes two sorted sub-arrays and combines them into a single sorted array. "}
            m={2}
            justifyContent={"center"}
            textAlign={"center"}
            fontWeight={"bold"}
            isReadOnly
            size="sm"
          />
        )}
       </Container>
        {isCheckedC && (
          <Button
            colorScheme="pink"
            type="button"
            checked={isCheckedSort}
            onClick={handleCheckSort}
          >
            {" "}
            Sorted Array
          </Button>
        )}
        <Box
          display={"flex"}
          m={3}
          borderColor={"black"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"colume"}
          alignItems={"center"}
        >
          {isCheckedSort &&
            numbers
              .sort((a, b) => a - b)
              .map((item, index) => (
                <Box
                  display={"flex"}
                  m={3}
                  width={"35px"}
                  height={"35px"}
                  bg={"darkblue"}
                  color={"white"}
                  shadow={"1px 2px 1px 2px"}
                  borderRadius={"20px"}
                  borderColor={"black"}
                  justifyContent={"center"}
                  alignContent={"center"}
                  flexDirection={"colume"}
                  alignItems={"center"}
                  key={index}
                >
                  {item}
                </Box>
              ))}
        </Box>

        <Container>
          {isCheckedSort && (
            <Textarea
              borderWidth={"2px"}
              borderColor={"black"}
              color={"black"}
              value={"Final sorted array after Merge Sort."}
              // onChange={handleInputChange}
              m={2}
              fontSize={"18px"}
              rows={1}
              justifyContent={"center"}
              textAlign={"center"}
              fontWeight={"bold"}
              isReadOnly
              size="sm"
            />
          )}
        </Container>
        <Button colorScheme="pink" onClick={reloadPage}>
          Try again
        </Button>
      </Box>
    </>
  );
}
