import { FC } from "react";
import {
  Divider,
  Icon,
  IconButton,
  ListItem,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger as ChakraPopoverTrigger,
  Portal,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@/components/link";
import { ThemeSelect } from "@/components/theme-toggle";
import { MobileSearchButton } from "@/components/search-button";
import { RiMore2Fill } from "react-icons/ri";
import { Route, WithChildren } from "@/types";
import { siteConfig } from "@/config";

interface MobileOptionsMenuProps {
  routes: Route[];
}

// Temp path related to: https://github.com/chakra-ui/chakra-ui/issues/5896
const PopoverTrigger: FC<WithChildren> = ChakraPopoverTrigger;

const MobileOptionsMenu: FC<MobileOptionsMenuProps> = ({ routes }) => {
  return (
    <>
      <MobileSearchButton aria-label="Search" />
      <Popover placement="bottom-start">
        <PopoverTrigger>
          <IconButton
            aria-label="Open menu"
            size="sm"
            colorScheme="whiteAlpha"
            boxShadow="sm"
            borderRadius="full"
            border="1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            icon={<Icon boxSize="5" color="gray.400" as={RiMore2Fill} />}
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent maxW="60" p="2" _focus={{ ring: "0" }}>
            <PopoverCloseButton size="md" color="gray.600" />
            <PopoverBody>
              <UnorderedList
                as="ul"
                listStyleType="none"
                fontWeight="semibold"
                spacing="4"
                mb="4"
                mx="0"
              >
                {routes.map((route) => (
                  <ListItem as="li" key={route.path}>
                    <Link href={route.path}>{route.title}</Link>
                  </ListItem>
                ))}
                {siteConfig.repo && (
                  <ListItem>
                    <Link href={siteConfig.repo.url} isExternal>
                      GitHub
                    </Link>
                  </ListItem>
                )}
              </UnorderedList>
              <Divider />
              <ThemeSelect />
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default MobileOptionsMenu;
