import { FC } from "react";
import NextLink from "next/link";
import {
  LinkBox as ChakraLinkBox,
  LinkOverlay,
  LinkBoxProps as ChakraLinkBoxProps,
} from "@chakra-ui/react";
import { WithChildren } from "@/types";

interface LinkBoxProps extends WithChildren, ChakraLinkBoxProps {
  href: string;
  isExternal?: boolean;
}

const LinkBox: FC<LinkBoxProps> = ({
  href,
  isExternal,
  children,
  ...props
}) => {
  return (
    <ChakraLinkBox {...props}>
      <NextLink href={href} passHref>
        <LinkOverlay isExternal={isExternal}>{children}</LinkOverlay>
      </NextLink>
    </ChakraLinkBox>
  );
};

export default LinkBox;
