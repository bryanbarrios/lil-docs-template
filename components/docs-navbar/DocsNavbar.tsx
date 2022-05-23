import { FC } from "react";
import {
  Box,
  BoxProps,
  Center,
  Container,
  Divider,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "@/components/logo";
import { SearchButton } from "@/components/search-button";
import { Link } from "@/components/link";
import { LinkBox } from "@/components/link-box";
import { ThemeMenu } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { MobileDrawer, MobileDrawerButton } from "@/components/mobile-drawer";
import { RiGithubFill } from "react-icons/ri";
import { Route } from "@/types";
import { siteConfig } from "@/config";

interface DocsNavbarProps extends BoxProps {
  routes: Route[];
}

const DocsNavbar: FC<DocsNavbarProps> = ({ routes, ...props }) => {
  const bgColor = useColorModeValue(
    "rgba(255, 255, 255, .9)",
    "rgba(26, 32, 43, .8)"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position="sticky"
        top="0"
        zIndex="docked"
        bgColor={bgColor}
        backdropFilter="blur(16px) saturate(140%)"
        borderBottom="1px"
        borderColor={useColorModeValue("gray.50", "gray.700")}
        {...props}
      >
        <Container maxW="8xl" mx="auto" px="4">
          <Flex
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            py="3"
          >
            <Flex flex={{ base: "1", lg: "1" }} alignItems="center">
              <MobileDrawerButton aria-label="Open drawer" onClick={onOpen} />
              <LinkBox href="/">
                <Logo />
              </LinkBox>
            </Flex>
            <Box
              display={{ base: "none", lg: "flex" }}
              flex="1"
              justifyContent="center"
            >
              <SearchButton borderRadius="xl" />
            </Box>
            <Box
              display={{ base: "none", lg: "flex" }}
              flex="1"
              justifyContent="end"
              alignItems="center"
            >
              <Flex as="nav">
                <Stack as="ul" listStyleType="none" direction="row" spacing="6">
                  {routes.map((route) => (
                    <Box as="li" key={route.path}>
                      <Link
                        fontSize="sm"
                        fontWeight="semibold"
                        href={route.path}
                      >
                        {route.title}
                      </Link>
                    </Box>
                  ))}
                </Stack>
              </Flex>
              <Center height="6" pl="4">
                <Divider orientation="vertical" />
              </Center>
              <Flex pl="4" alignItems="center">
                <ThemeMenu />
                {siteConfig.repo && (
                  <LinkBox
                    display="flex"
                    ml="4"
                    color="gray.400"
                    href={siteConfig.repo.url}
                    isExternal
                    _hover={{ color: "gray.500" }}
                  >
                    <Icon boxSize="6" as={RiGithubFill} />
                  </LinkBox>
                )}
              </Flex>
            </Box>
            <Box
              display={{ base: "flex", lg: "none" }}
              flex="1"
              justifyContent="end"
            >
              <MobileMenu routes={routes} />
            </Box>
          </Flex>
        </Container>
      </Box>
      <MobileDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default DocsNavbar;
