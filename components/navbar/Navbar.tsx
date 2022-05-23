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
  useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "@/components/logo";
import { Link } from "@/components/link";
import { LinkBox } from "@/components/link-box";
import { ThemeMenu } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { MobileDrawer, MobileDrawerButton } from "@/components/mobile-drawer";
import { RiGithubFill } from "react-icons/ri";
import { Route } from "@/types";
import { siteConfig } from "@/config";

interface NavbarProps extends BoxProps {
  routes: Route[];
}

const Navbar: FC<NavbarProps> = ({ routes, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="transparent" {...props}>
        <Container maxW="8xl" mx="auto" px="4">
          <Flex
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            py="3"
          >
            <Flex flex="1" alignItems="center">
              <MobileDrawerButton aria-label="Open drawer" onClick={onOpen} />
              <LinkBox href="/">
                <Logo />
              </LinkBox>
            </Flex>
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

export default Navbar;
