import { Box, Divider, Heading,  Text } from "@chakra-ui/react";
import React from "react";
export default function Pro() {
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
      >
        <Heading>PROCEDURE</Heading>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        m={3}
        borderWidth={"2px"}
        shadow={"1px 2px 1px 2px"}
        borderRadius={"20px"}
        borderColor={"black"}
        justifyContent={"center"}
      >
        <Heading fontSize={"3xl"}>Can we perform sorting using Divide and Conquer?</Heading>
        <Divider/>
        <Text  display={"Flex"}
          flexDirection={"column"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}>
        We can visualise sorting an array of size N as two sub-problems : sorting
        two arrays of size N/2, and then somehow combining the two smaller
        sorted arrays. Sorting a smaller array will be easier than sorting the
        bigger array.
        <Divider/>
        Recursive nature of Sorting : Sorting an array of size N can be
        recursively broken down into sorting two smaller arrays of N/2, and each
        of these smaller arrays can be broken down into even smaller arrays of
        size N/4 each, and so on. 
        <Divider/>
       
        Merge sort is a sorting algorithm that uses this approach. In Merge Sort
        we will:
        <Divider/>
        
        DIVIDE : Split an array into parts recursively into half.
        <Divider/>
        
        CONQUER : Sort the sub-arrays individually.
        <Divider/>
       
        COMBINE : Merge the sorted sub-arrays to get a big sorted array.
        <Divider/>
        
        
        Look at the image below and identify the division steps and the combining
        steps. Divide and Conquer in Sorting
        <Divider/>
        </Text>
       
      </Box>
    </>
  );
}
