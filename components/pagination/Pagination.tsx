import { FC } from "react";
import { Icon, SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import PaginationLink from "./PaginationLink";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Route } from "@/types";

interface PaginationProps extends SimpleGridProps {
  previous?: Route;
  next?: Route;
}

const Pagination: FC<PaginationProps> = ({ previous, next, ...props }) => {
  return (
    <SimpleGrid
      as="nav"
      aria-label="Pagination"
      my={{ base: "16", md: "20" }}
      spacing="8"
      columns={2}
      {...props}
    >
      {previous ? (
        <PaginationLink
          label="Previous"
          href={previous.path}
          rel="prev"
          alignItems="start"
        >
          <Icon boxSize="6" mr="1" as={RiArrowLeftSLine} />
          {previous.title}
        </PaginationLink>
      ) : (
        <div />
      )}
      {next ? (
        <PaginationLink
          label="Next"
          href={next.path}
          rel="next"
          alignItems="end"
        >
          {next.title}
          <Icon boxSize="6" ml="1" as={RiArrowRightSLine} />
        </PaginationLink>
      ) : (
        <div />
      )}
    </SimpleGrid>
  );
};

export default Pagination;
