import React from 'react'
import "../../App.css";
import { Box, Heading } from '@chakra-ui/react';


export default function Result() {
  return (
    <>
    <Box display={"flex"}
        m={3}
        borderWidth={"2px"}
        shadow={"1px 2px 1px 2px"}
        borderRadius={"20px"}
        borderColor={"black"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}>
        <Heading>Result</Heading>
    </Box>
    <Box 
    display={"flex"}
    m={3}
    p={8}
    borderWidth={"2px"}
    shadow={"1px 2px 1px 2px"}
    borderRadius={"20px"}
    borderColor={"black"}
    justifyContent={"center"}
    alignContent={"center"}
    alignItems={"center"}>
        <Heading size="xl">Hence we can perform merge sort using recursion.</Heading>
    </Box>
    </>
  )
}
