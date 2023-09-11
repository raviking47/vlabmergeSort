import React from "react";
import "./IndexArea.css";
import Aim from "./image/Aim.png";
import theory from "./image/theory.png";
import { Link } from "react-router-dom";
import { Box, Heading, Image } from "@chakra-ui/react";

export default function IndexArea() {
  return (
    <>
      <Box
        display={"flex"}
        m={3}
        flexDir={"column"}
        borderWidth={"2px"}
        shadow={"1px 2px 1px 2px"}
        borderRadius={"20px"}
        borderColor={"black"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Heading className="heading">Merge Sort</Heading>
        <Box />
        <Heading className="heading">Recursion</Heading>
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
        <nav>
          <Box
            display={"flex"}
            m={3}
            flexDir={"Coloum"}
            borderWidth={"2px"}
            shadow={"1px 2px 1px 2px"}
            borderColor={"black"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            height={"140px"}

          >
            <Link className="internal_link" to={"/"}>
              <Image  src={Aim} alt="" className="icon" /> <br />
              Aim
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDir={"Coloum"}
            borderWidth={"2px"}
            shadow={"1px 2px 1px 2px"}
            borderColor={"black"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            height={"140px"}>
            <Link className="internal_link" to={"/theory"}>
              <img src={theory} alt="" className="icon" /> <br />
              Theory{" "}
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDir={"Coloum"}
            borderWidth={"2px"}
            shadow={"1px 2px 1px 2px"}
            borderColor={"black"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            height={"140px"}>
            <Link className="internal_link" to={"/procedure"}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/project-management-1-11/65/23-512.png"
                alt=""
                className="icon"
              />{" "}
              <br />
              Procedure
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDir={"Coloum"}
            borderWidth={"2px"}
            shadow={"1px 2px 1px 2px"}
            borderColor={"black"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            height={"140px"}>
            <Link className="internal_link" to={"/practice"}>
              <img
                src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo-animation/editable-minimal.png?v=6"
                alt=""
                className="icon"
              />{" "}
              <br />
              Practice
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDir={"Coloum"}
            borderWidth={"2px"}
            shadow={"1px 2px 1px 2px"}
            borderColor={"black"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            height={"140px"}>
            <Link className="internal_link" to={"/code"}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png"
                alt=""
                className="icon"
              />{" "}
              <br />
              Code{" "}
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDir={"Coloum"}
            borderWidth={"2px"}
            shadow={"1px 2px 1px 2px"}
            borderColor={"black"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            height={"140px"}>
            <Link className="internal_link" to={"/quiz"}>
              <img
                src="https://img.favpng.com/21/11/8/new-york-city-fotolia-stock-photography-sales-png-favpng-f9ZiUMqBcZK0LNfZPfC674ZxZ_t.jpg"
                alt=""
                className="icon"
              />{" "}
              <br />
              Quiz{" "}
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDir={"Coloum"}
            borderWidth={"2px"}
            shadow={"1px 2px 1px 2px"}
            borderColor={"black"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            height={"140px"}>
            <Link className="internal_link" to={"/result"}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/collection-of-online-business-icons/64/Board_Chart_Results_Business-512.png"
                alt=""
                className="icon"
              />{" "}
              <br />
              Result{" "}
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDir={"Coloum"}
            borderWidth={"2px"}
            shadow={"1px 2px 1px 2px"}
            borderColor={"black"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            height={"140px"}>
            <Link className="internal_link" to={"/reference"}>
              <img
                src="https://image.pngaaa.com/134/5592134-middle.png"
                alt=""
                className="icon"
              />{" "}
              <br />
              References{" "}
            </Link>
          </Box>
        </nav>
      </Box>
    </>
  );
}
