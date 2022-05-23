import {
  Box,
  BoxProps,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

interface SectionProps extends BoxProps {
  title: string;
  subtitle?: string;
  text: string;
}

const Section: FC<SectionProps> = ({ title, subtitle, text, ...props }) => {
  return (
    <Stack spacing="4" maxW="container.md" mx="auto" py="12" {...props}>
      {subtitle && (
        <Heading
          as="h3"
          fontSize={{ base: "lg", md: "xl" }}
          textAlign="center"
          textTransform="uppercase"
          color="gray.500"
        >
          {subtitle}
        </Heading>
      )}
      <Heading
        fontSize={{ base: "4xl", md: "5xl" }}
        textAlign="center"
        bgGradient="linear(to-r, purple.400, orange.400)"
        bgClip="text"
        textTransform="uppercase"
        lineHeight="1"
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="medium"
        textAlign="center"
        color={useColorModeValue("gray.500", "gray.200")}
        letterSpacing="tight"
      >
        {text}
      </Text>
    </Stack>
  );
};

export default Section;
