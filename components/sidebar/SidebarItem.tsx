import { FC, useEffect, useState } from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@/components/link";
import { WithChildren } from "@/types";

interface SidebarItemProps extends WithChildren, BoxProps {
  href: string;
  isActive?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({
  href,
  isActive,
  children,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);
  const activeColor = useColorModeValue("brand.500", "brand.300");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box
      as="li"
      fontSize="sm"
      fontWeight={isActive ? "bold" : "normal"}
      px="3"
      borderLeft="1px"
      borderColor={isActive ? activeColor : "transparent"}
      _hover={{ borderColor: "gray.400" }}
      {...props}
    >
      <Link isActive={isActive} href={href}>
        {children}
      </Link>
    </Box>
  );
};

export default SidebarItem;
