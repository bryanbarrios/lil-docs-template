import { ComponentStyleConfig } from "@chakra-ui/react";

const CalloutStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    position: "relative",
    display: "flex",
    flexDir: { base: "column", md: "row" },
    alignItems: { base: "start", md: "start" },
    borderRadius: "2xl",
    p: "4",
    my: 6,

    "& p": {
      m: "0",
      lineHeight: "1.3",
    },
    "& div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bgColor: "white",
      w: "full",
      maxW: "9",
      h: "9",
      borderRadius: "full",
      boxShadow: "md",
      mr: { base: "0", md: "2" },
      mb: { base: "2", md: "0" },

      _dark: {
        bgColor: "black",
        opacity: "0.4",
      },
    },
  },
  variants: {
    brand: {
      bgColor: "brand.50",
      color: "brand.700",

      _dark: {
        bgColor: "brand.800",
        color: "brand.50",
      },
    },
    info: {
      bgColor: "blue.50",
      color: "blue.700",

      _dark: {
        bgColor: "blue.800",
        color: "blue.50",
      },
    },
    success: {
      bgColor: "green.50",
      color: "green.700",

      _dark: {
        bgColor: "green.800",
        color: "green.50",
      },
    },
    warning: {
      bgColor: "yellow.50",
      color: "yellow.600",

      _dark: {
        bgColor: "yellow.800",
        color: "yellow.50",
      },
    },
    error: {
      bgColor: "red.50",
      color: "red.700",

      _dark: {
        bgColor: "red.800",
        color: "red.50",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "brand",
  },
};

export default CalloutStyleConfig;
