import {
  Box,
  BoxProps,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

interface TeamsProps extends BoxProps {}

const Teams: FC<TeamsProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Text
        fontWeight="bold"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="tight"
      >
        Trusted by teams around the world
      </Text>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 6 }}
        alignItems="center"
        spacing={{ base: "4", lg: "0" }}
        mt="6"
        filter={useColorModeValue(
          "grayscale(100%)",
          "grayscale(100%) brightness(10)"
        )}
      >
        <Image
          w="36"
          mx="auto"
          src="/static/images/logos/logo-1.svg"
          alt="Brand #1"
        />
        <Image
          w="36"
          mx="auto"
          src="/static/images/logos/logo-2.svg"
          alt="Brand #2"
        />
        <Image
          w="36"
          mx="auto"
          src="/static/images/logos/logo-3.svg"
          alt="Brand #3"
        />
        <Image
          w="36"
          mx="auto"
          src="/static/images/logos/logo-4.svg"
          alt="Brand #4"
        />
        <Image
          w="36"
          mx="auto"
          src="/static/images/logos/logo-5.svg"
          alt="Brand #5"
        />
        <Image
          w="36"
          mx="auto"
          src="/static/images/logos/logo-6.svg"
          alt="Brand #6"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Teams;
