import { FC } from "react";
import { Box, Container } from "@chakra-ui/react";
import { PageContainer } from "@/components/page-container";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEO, WithChildren } from "@/types";
import { navbarRoutes } from "@/config";

interface DefaultLayoutProps extends WithChildren, SEO {}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, ...seo }) => {
  return (
    <PageContainer {...seo}>
      <Navbar routes={navbarRoutes} />
      <Container maxW="8xl" mx="auto" px={{ base: "4", lg: "6" }}>
        <Box as="main" pt="8">
          {children}
        </Box>
        <Footer />
      </Container>
    </PageContainer>
  );
};

export default DefaultLayout;
