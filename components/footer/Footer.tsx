import { FC } from "react";
import {
  BoxProps,
  HStack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "@/components/logo";
import { Link } from "@/components/link";
import { NicaraguaFlag } from "@/components/nicaragua-flag";
import { siteConfig } from "@/config";

const Footer: FC<BoxProps> = (props) => {
  const textColor = useColorModeValue("gray.500", "gray.300");

  return (
    <VStack
      as="footer"
      alignItems="start"
      spacing="5"
      borderTop="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mt="12"
      py="8"
      {...props}
    >
      <Logo />
      {siteConfig.author && (
        <HStack fontSize="sm" fontWeight="medium" color={textColor} mt="4">
          <span>Crafted in</span>
          <NicaraguaFlag />
          <span>
            by{" "}
            <Link
              isExternal
              href={`https://www.github.com/${siteConfig.author?.github}`}
            >
              {siteConfig.author?.name}
            </Link>
          </span>
        </HStack>
      )}
    </VStack>
  );
};

export default Footer;
