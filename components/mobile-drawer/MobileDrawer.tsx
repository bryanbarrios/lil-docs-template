import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { SidebarContent } from "@/components/sidebar";
import { docsSections } from "@/config";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { asPath } = useRouter();
  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false });
  const bgColor = useColorModeValue("white", "gray.800");

  useEffect(() => {
    onClose();
  }, [asPath, showOnBreakpoint, onClose]);

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay bg="blackAlpha.400" backdropFilter="blur(12px)" />
      <DrawerContent bgColor={bgColor} shadow="md">
        <DrawerCloseButton borderRadius="full" zIndex="docked" />
        <DrawerBody py="6">
          <SidebarContent sections={docsSections} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
