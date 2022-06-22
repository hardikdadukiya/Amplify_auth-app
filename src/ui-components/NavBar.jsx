/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="fit-content"
        height="50px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Image
          width="50px"
          height="50px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "car--v1 1")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Car-Rental"
          {...getOverrideProps(overrides, "Car-Rental")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="1199px"
        height="45px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="1199px"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(64,170,191,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="76px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign In"
          {...getOverrideProps(overrides, "Sign In")}
        ></Text>
        <Image
          width="45px"
          height="45px"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
