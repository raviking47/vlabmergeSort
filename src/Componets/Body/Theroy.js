import React from "react";
import "./Body.css";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";

export default function Theroy() {
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
        flex={"colume"}
      >
        <Heading>THEORY</Heading>
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
        alignItems={"center"}
      >
        <Text
          display={"Flex"}
          flexDirection={"column"}
          alignItems={"center"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}
        > 
          <div style={{color:"blue"}}>Recursion is a programming concept where a function calls itself
          within its own body. </div>It allows a problem to be divided into smaller
          subproblems that are solved recursively until a base case is reached,
          upon which the function returns its result. Recursion is widely used
          in solving problems that can be broken down into smaller, similar
          instances.
          <Divider/>
          <div style={{color:"blue"}}>Merge Sort is a sorting algorithm that follows the divide-and-conquer
          paradigm.</div> It works by recursively dividing the unsorted list or array
          into two halves until each subarray contains only one element. Then,
          it merges the subarrays back together in a sorted order until the
          entire array is sorted.
          <Divider/>
          The merge step of Merge Sort is the key operation where the sorted
          subarrays are combined to produce a sorted array. It compares the
          elements of the subarrays in order and merges them by placing the
          smaller element into the final sorted array. This process continues
          until all elements are merged into the sorted array.
          <Divider/>
          Overall, Merge Sort is known for its efficiency and stability. It
          guarantees a time complexity of O(n log n), making it suitable for
          sorting large datasets. The use of recursion allows for a
          straightforward implementation of the algorithm, making it easier to
          understand and maintain.
        </Text>
        
      </Box>
     </>
  );
}
