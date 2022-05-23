import { FC } from "react";
import { Seo } from "@/components/seo";
import { SEO, WithChildren } from "@/types";
import SearchProvider from "@/components/SearchContext";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface PageContainerProps extends WithChildren, SEO {}

const PageContainer: FC<PageContainerProps> = ({ children, ...meta }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  return (
    <Box bgColor={bgColor}>
      <Seo {...meta} />
      <SearchProvider>{children}</SearchProvider>
    </Box>
  );
};

export default PageContainer;
