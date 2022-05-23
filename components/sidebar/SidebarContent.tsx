import { FC } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Icon,
  Stack,
  StackProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { LinkBox } from "@/components/link-box";
import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";
import { RiFolder2Fill } from "react-icons/ri";
import { Section } from "@/types";
import { topLevelSectionsRoutes } from "@/config";

interface SidebarContentProps extends StackProps {
  sections: Section[];
}

const SidebarContent: FC<SidebarContentProps> = ({ sections, ...props }) => {
  const { asPath } = useRouter();
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Stack as="ul" listStyleType="none" spacing="6" {...props}>
      <TopLevelSections />
      {sections.map(({ section, routes }) => (
        <Box as="li" key={section}>
          <SidebarSection
            mb="4"
            icon={<Icon color="white" as={RiFolder2Fill} />}
          >
            {section}
          </SidebarSection>
          <Stack
            as="ul"
            listStyleType="none"
            borderLeft="1px"
            borderColor={borderColor}
            spacing="3"
            direction="column"
            shouldWrapChildren
          >
            {routes.map((route) => (
              <SidebarItem
                key={route.path}
                ml="-1px"
                href={route.path}
                isActive={asPath === route.path}
              >
                {route.title}
              </SidebarItem>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

const isTopLevelSectionActive = (href: string, path: string) => {
  const [, section] = href.split("/");
  return path.startsWith(`/${section}`);
};

const TopLevelSections = () => {
  const { asPath } = useRouter();
  return (
    <>
      {topLevelSectionsRoutes.map(({ label, icon, path }) => (
        <Box key={label} as="li">
          <LinkBox className="link-box" href={path}>
            <SidebarSection
              isActive={isTopLevelSectionActive(path, asPath)}
              isLink
              icon={<Icon color="white" as={icon} />}
            >
              {label}
            </SidebarSection>
          </LinkBox>
        </Box>
      ))}
    </>
  );
};

export default SidebarContent;
