import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { CalloutStyleConfig as Callout } from "@/components/callout/";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  {
    styles: {
      global: {
        html: {
          scrollBehavior: "smooth",
          scrollPaddingTop: "5rem",
        },
        "body, #__next": {
          minH: "100vh",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    colors: {
      brand: {
        50: "#FAF5FF",
        100: "#E9D8FD",
        200: "#D6BCFA",
        300: "#B794F4",
        400: "#9F7AEA",
        500: "#805AD5",
        600: "#6B46C1",
        700: "#553C9A",
        800: "#44337A",
        900: "#322659",
      },
    },
    fonts: {
      heading:
        "'Cal Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    components: {
      Callout,
    },
    config,
  },
  withProse({
    baseStyle: {
      "h1, h2, h3, h4, h5, h6": {
        "&:hover .anchor::after": {
          visibility: "visible",
        },
      },
      img: {
        borderRadius: "xl",
      },
      table: {
        display: "block",
        maxWidth: "fit-content",
        overflowX: "auto",
        whiteSpace: "noWrap",
        border: "1px",
        borderCollapse: "collapse",
        borderColor: "gray.100",
        _dark: {
          borderColor: "gray.700",
        },
        borderRadius: "xl",
        p: "3",

        thead: {
          fontSize: "smaller",
          textTransform: "upperCase",
          color: "gray.600",
          _dark: {
            color: "gray.400",
          },
        },

        "th, td": {
          minW: "200px",
        },

        "tr:nth-of-type(2n)": {
          bgColor: "gray.200",
          _dark: {
            bgColor: "gray.700",
          },
        },
      },
      ".anchor": {
        w: "full",
        cursor: "pointer",
        borderRadius: "md",
        pl: "0.5rem",
        _after: {
          content: "'#'",
          color: "brand.500",
          visibility: "hidden",
        },
        _hover: {
          textDecor: "none",
        },
        "&::before": {
          content: "''",
          mt: "8",
          visibility: "hidden",
        },
        "&:hover::after": {
          visibility: "visible",
        },
        "&:focus::after": {
          visibility: "visible",
        },
      },
      pre: {
        _dark: {
          bg: "gray.700",
        },
        borderRadius: "2xl",
        px: "2.5",
        overflowX: "auto",
      },
      code: {
        fontSize: "sm",
        fontWeight: "semibold",
        bgColor: "gray.700",
        color: "brand.400",
        px: "1.5",
        py: "1",
        borderRadius: "lg",
        "&::before, &::after": {
          content: '""',
        },
      },
      ".rehype-code-title": {
        fontSize: "sm",
        fontWeight: "bold",
        bgColor: "gray.700",
        color: "brand.300",
        px: "3",
        py: "2",
        borderBottom: "1px",
        borderColor: "gray.600",
        borderTopRadius: "2xl",
      },
    },
  })
);
