import React from "react";
import { Text } from "@chakra-ui/react";

const KText = (props) => {
  const { type, ...rest } = props;

  const renderStyle = (typeOfStyle) => {
    switch (typeOfStyle) {
      case "text":
        return { fontWeight: "normal", fontSize: ["14px"] };
      case "small-title":
        return {
          fontWeight: "700",
          fontSize: {
            base: "16px",
            xs: "14px",
            sm: "14px",
            md: "16px",
            lg: "16px",
            xl: "16px",
          },
        };
      case "title":
        return { fontWeight: "700", fontSize: ["24px"] };
      case "head":
        return { fontWeight: "700", fontSize: ["90px"] };
      case "semi-title":
        return { fontWeight: "700", fontSize: ["20px"] };
      case "semi-head":
        return { fontWeight: "700", fontSize: ["34px"] };
      default:
        return {
          fontWeight: "normal",
          fontSize: {
            base: "14px",
            xs: "12px",
            sm: "12px",
            md: "14px",
            lg: "14px",
            xl: "14px",
          },
          // color: "#A0AEC0",
        };
    }
  };

  return (
    <Text {...renderStyle(type)} {...rest}>
      {props.children}
    </Text>
  );
};

export default KText;
