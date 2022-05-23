import { FC } from "react";
import {
  Icon,
  IconButton,
  IconButtonProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiMenu2Fill } from "react-icons/ri";

const MobileDrawerButton: FC<IconButtonProps> = (props) => {
  return (
    <IconButton
      display={{ base: "flex", lg: "none" }}
      colorScheme="whiteAlpha"
      size="sm"
      boxShadow="sm"
      borderRadius="full"
      border="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mr="3"
      icon={<Icon boxSize="5" color="gray.400" as={RiMenu2Fill} />}
      {...props}
    />
  );
};

export default MobileDrawerButton;
