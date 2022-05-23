import { ChangeEvent, FC } from "react";
import {
  Icon,
  Menu,
  MenuItem,
  MenuList,
  Select,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiComputerLine, RiMoonClearLine, RiSunLine } from "react-icons/ri";
import ToggleThemeButton from "./ThemeToggleButton";
import { WithChildren } from "@/types";

const themes = [
  {
    value: "light",
    label: "Light",
    icon: RiSunLine,
  },
  {
    value: "dark",
    label: "Dark",
    icon: RiMoonClearLine,
  },
  {
    value: "system",
    label: "System",
    icon: RiComputerLine,
  },
];

export const ThemeMenu: FC<WithChildren> = ({
  children = <ToggleThemeButton />,
}) => {
  const { setColorMode } = useColorMode();

  return (
    <Menu>
      {children}
      <MenuList fontSize="sm">
        {themes.map(({ value, label, icon }) => (
          <MenuItem
            key={value}
            onClick={() => setColorMode(value)}
            icon={
              <Icon display="flex" w="5" h="5" color="gray.400" as={icon} />
            }
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export const ThemeSelect = () => {
  const { colorMode, setColorMode } = useColorMode();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setColorMode(event.target.value);
  };

  return (
    <>
      <Text
        fontWeight="semibold"
        color={useColorModeValue("gray.500", "gray.300")}
        mt="4"
        mb="2"
      >
        Switch theme
      </Text>
      <Select value={colorMode} onChange={handleChange}>
        {themes.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </>
  );
};
