import { FC } from "react";
import {
  ListItem,
  OrderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@/components/link";
import { TOCProps } from "./TOC";

export const MobileTOC: FC<TOCProps & AccordionProps> = ({
  headings,
  ...props
}) => {
  return (
    <Accordion
      display={{ base: "block", xl: "none" }}
      borderRadius="xl"
      border="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      allowToggle
      {...props}
    >
      <AccordionItem border="none">
        <AccordionButton borderRadius="xl">
          <Text
            flex="1"
            fontSize="sm"
            fontWeight="bold"
            color={useColorModeValue("gray.600", "gray.500")}
            textAlign="left"
          >
            On this page
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <OrderedList listStyleType="none" m="0" spacing="2">
            {headings.map(({ id, text, level }) => (
              <ListItem
                key={id}
                title={text}
                ml={level === "h3" ? "4" : undefined}
              >
                <Link href={`#${id}`} fontSize="sm">
                  {text}
                </Link>
              </ListItem>
            ))}
          </OrderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
