import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function References() {
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
        alignItems={"center"} >
      <Heading>References</Heading>
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
    alignItems={"center"} >
      <Heading fontSize={"3xl"} p={8}>Code Source : -  GEEKS FOR GEEKS  </Heading>
      {/* Theroy and Quiz : -  Internet */}

     </Box>
   </>
  )
}
