import { FC, ReactElement } from "react";
import { Flex, FlexProps, Text, useColorModeValue } from "@chakra-ui/react";
import { WithChildren } from "@/types";

interface SidebarSectionProps extends WithChildren, FlexProps {
  icon?: ReactElement;
  isActive?: boolean;
  isLink?: boolean;
}

const SidebarSection: FC<SidebarSectionProps> = ({
  icon,
  isActive,
  isLink,
  children,
  ...props
}) => {
  const fontColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Flex
      fontSize="sm"
      fontWeight="semibold"
      color={isActive ? "brand.500" : fontColor}
      sx={{
        ".link-box:hover &": { color: isLink ? "brand.500" : fontColor },
      }}
      alignItems="center"
      {...props}
    >
      <Flex
        w="full"
        maxW="6"
        h="6"
        bg={useColorModeValue("brand.500", "brand.700")}
        borderRadius="md"
        justifyContent="center"
        alignItems="center"
        mr="2"
      >
        {icon}
      </Flex>
      {children}
    </Flex>
  );
};

export default SidebarSection;
