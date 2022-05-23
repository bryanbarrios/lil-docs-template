import { FC } from "react";
import {
  Box,
  Container,
  ContainerProps,
  useColorModeValue,
} from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";
import { Section, WithChildren } from "@/types";

interface SidebarProps extends WithChildren, ContainerProps {
  sections: Section[];
}

const Sidebar: FC<SidebarProps> = ({ sections, ...props }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const gradientColors = useColorModeValue(
    "linear(to-b, rgb(255,255,255), rgba(255,255,255, 0))",
    "linear(to-b, rgb(26, 33, 44), rgba(26, 33, 44, 0))"
  );

  return (
    <Container
      display={{ base: "none", lg: "block" }}
      position="fixed"
      left="max(0px, calc(50% - 45rem))"
      w="full"
      maxW="18rem"
      h="full"
      maxH="calc(100vh - 4rem)"
      bg={bgColor}
      {...props}
    >
      <Box
        h="8"
        bgGradient={gradientColors}
        position="absolute"
        top="0"
        insetX="0"
        zIndex="docked"
      />
      <SidebarContent sections={sections} h="full" overflowY="auto" py="6" />
    </Container>
  );
};

export default Sidebar;
