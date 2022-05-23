import { FC } from "react";
import {
  Icon,
  IconButton,
  MenuButton,
  MenuButtonProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

const ToggleThemeButton: FC<MenuButtonProps> = (props) => {
  const ThemeIcon = useColorModeValue(RiSunLine, RiMoonClearLine);

  return (
    <MenuButton
      as={IconButton}
      aria-label="Toggle theme"
      size="sm"
      colorScheme="whiteAlpha"
      boxShadow="sm"
      borderRadius="full"
      border="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      icon={<Icon boxSize="5" color="gray.400" as={ThemeIcon} />}
      {...props}
    />
  );
};

export default ToggleThemeButton;
