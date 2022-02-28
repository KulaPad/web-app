import React from "react";
import { Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import logo from "./logo.svg";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const LogoRotate = (props) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return <Image animation={animation} src={logo} {...props} />;
};

export const Logo = (props) => {
  return <Image w="50px" h="50px" src={logo} {...props} />;
};
