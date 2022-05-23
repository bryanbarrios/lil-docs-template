import { FC } from "react";
import {
  Box,
  Button,
  ButtonProps,
  Flex,
  Icon,
  IconButton,
  IconButtonProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { useKBar } from "kbar";

export const SearchButton: FC<ButtonProps> = (props) => {
  const kBar = useKBar();
  const textColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Button
      w="full"
      px="3"
      color={textColor}
      onClick={() => kBar.query.toggle()}
      {...props}
    >
      <Icon boxSize="5" as={RiSearchLine} />
      <Text ml="2" fontSize="sm">
        Search...
      </Text>
      <Box as="span" ml="auto">
        <Flex
          as="kbd"
          fontSize="sm"
          bg={useColorModeValue("white", "gray.800")}
          borderRadius="md"
          px="2"
          py="1"
          boxShadow="md"
        >
          <Text
            as="abbr"
            title="Command"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
            mr="1"
            sx={{ "&[title]": { textDecoration: "none" } }}
          >
            ⌘
          </Text>
          <Text>K</Text>
        </Flex>
      </Box>
    </Button>
  );
};

export const MobileSearchButton: FC<IconButtonProps> = (props) => {
  const kBar = useKBar();

  return (
    <IconButton
      size="sm"
      colorScheme="whiteAlpha"
      boxShadow="sm"
      borderRadius="full"
      border="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mr="3"
      icon={<Icon w="5" h="5" color="gray.400" as={RiSearchLine} />}
      onClick={() => kBar.query.toggle()}
      {...props}
    />
  );
};
