import React from "react";
import "./Body.css";
import image from "../../image/m1.png";
import { Box, Image } from "@chakra-ui/react";

export default function Body() {
  return (
    <Box>
      <section id="exp">
        <Box
          display={"flex"}
          m={3}
          borderWidth={"2px"}
          shadow={"1px 2px 1px 2px"}
          borderRadius={"20px"}
          borderColor={"black"}
          justifyContent={"center"}
        >
          <div className="desc1"></div>
          <h2 className="heading">Aim: To show Merge Sort using Recursion</h2>
        </Box>
        <Box
          display={"flex"}
          m={3}
          borderWidth={"2px"}
          shadow={"1px 2px 1px 2px"}
          borderRadius={"20px"}
          borderColor={"black"}
          justifyContent={"center"}
        >
          <Image src={image} alt="" />
        </Box>
      </section>
      
    </Box>
  );
}
