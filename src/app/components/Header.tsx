"use client";

import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box pb={"28"} as={"section"} >
    <Box
      as="section"
      color="gray.50"
      bg={"purple.600"}
      pt={"90px"}
      pb={"198px"}
      textAlign={['left', 'left' ,"center"]}
      px={"9"}
    >
      <Heading fontWeight={"extrabold"} fontSize={["3xl", "3xl", "5xl"]}>
        Simple pricing for your business
      </Heading>
      <Text fontWeight={"medium"} fontSize={['lg', 'lg', '2xl']} pt={"4"}>
        Plans that are carefully cragted to suit your business.
      </Text>
    </Box>
    </Box>
  );
}
