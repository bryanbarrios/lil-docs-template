import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allDocs, Doc } from "contentlayer/generated";
import {
  Box,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { DocsLayout } from "@/layouts";
import { Pagination } from "@/components/pagination/";
import MDXComponents from "@/components/MDXComponents";
import { MobileTOC, TOC } from "@/components/toc";
import { Link } from "@/components/link";
import { RiGithubFill } from "react-icons/ri";
import { findRouteByPath, findSectionByPath, getRouteContext } from "@/utils";
import { allDocsRoutes, docsSections } from "@/config";
import { Route } from "@/types";

interface DocumentProps {
  document: Doc;
  currentRoute: Route;
  section: string;
}

const Document: FC<DocumentProps> = ({ document, currentRoute, section }) => {
  const { previousRoute, nextRoute } = getRouteContext(
    allDocsRoutes,
    currentRoute
  );

  const Component = useMDXComponent(document.body.code);

  return (
    <DocsLayout title={document.title} description={document.description}>
      <Stack
        spacing="4"
        borderBottom="1px"
        borderStyle="dashed"
        borderColor={useColorModeValue("gray.200", "gray.600")}
        pb="5"
      >
        <Box
          bgColor={useColorModeValue("brand.50", "brand.800")}
          w="fit-content"
          borderRadius="full"
          px="2"
          py="1.5"
        >
          <Text
            fontSize="smaller"
            fontWeight="bold"
            color={useColorModeValue("brand.500", "brand.50")}
            textTransform="uppercase"
            lineHeight="1.2"
          >
            {section}
          </Text>
        </Box>
        <Heading
          as="h1"
          fontWeight="extrabold"
          fontSize={{ base: "3xl", md: "4xl" }}
        >
          {document.title}
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.500">
          {document.description}
        </Text>
        <MobileTOC headings={document.headings} mt="4" />
      </Stack>
      <Prose>
        <Component components={{ ...MDXComponents }} />
      </Prose>
      <Pagination previous={previousRoute} next={nextRoute} />
      {document.editUrl && (
        <Link
          href={document.editUrl}
          isExternal
          display="flex"
          alignItems="center"
        >
          <Icon as={RiGithubFill} mr="2" boxSize="6" />
          Edit this page on GitHub
        </Link>
      )}
      <TOC headings={document.headings} />
    </DocsLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allDocs.map((doc) => ({
    params: { slug: doc._id.replace("docs/", "").replace(".mdx", "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const document = allDocs.find((document) =>
    document._id.endsWith(`docs/${params?.slug}.mdx`)
  );
  const section = document
    ? findSectionByPath(document.slug, docsSections)
    : null;
  const route = document ? findRouteByPath(document.slug, allDocsRoutes) : null;

  if (route) {
    return { props: { document, currentRoute: route, section } };
  }

  return { props: { document, section } };
};

export default Document;
