import { FC } from "react";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { PageContainer } from "@/components/page-container";
import { DocsNavbar } from "@/components/docs-navbar";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { docsSections, navbarRoutes } from "@/config";
import { SEO, WithChildren } from "@/types";

interface DocsLayoutProps extends WithChildren, SEO {}

const DocsLayout: FC<DocsLayoutProps> = ({ children, ...seo }) => {
  return (
    <PageContainer {...seo}>
      <DocsNavbar routes={navbarRoutes} />
      <Container maxW="8xl" mx="auto" px={{ base: "4", lg: "6" }}>
        <Sidebar sections={docsSections} />
        <Box pl={{ lg: "18rem" }}>
          <Box
            as="main"
            pt="8"
            pr={{ base: "0", xl: "16" }}
            mr={{ base: "0", xl: "18rem" }}
          >
            {children}
            <Footer />
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default DocsLayout;
