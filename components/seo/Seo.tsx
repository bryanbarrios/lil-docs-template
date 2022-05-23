import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SEO } from "@/types";
import { siteConfig, websiteUrl } from "@/config";

const Seo: FC<SEO> = ({ ...seo }) => {
  const router = useRouter();

  const defaultSeo = siteConfig.seo;
  const meta = { ...defaultSeo, ...seo };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="canonical" href={`${websiteUrl}${router.asPath}`} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content={meta.openGraph?.siteName} />
      <meta property="og:type" content={meta.openGraph?.type} />
      <meta property="og:url" content={`${websiteUrl}${router.asPath}`} />
      <meta property="og:image" content={meta.openGraph?.image?.url} />
      <meta
        property="og:image:width"
        content={meta.openGraph?.image?.width?.toString()}
      />
      <meta
        property="og:image:height"
        content={meta.openGraph?.image?.height?.toString()}
      />
      <meta property="og:image:alt" content={meta.openGraph?.image?.alt} />
      <meta property="og:locale" content={meta.openGraph?.locale} />
      <meta property="og:site_name" content={meta.openGraph?.siteName} />
      <meta name="twitter:card" content={meta.twitter?.cardType} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:site" content={meta.twitter?.site} />
      <meta name="twitter:image" content={meta.twitter?.image?.url} />
      <meta name="twitter:image:alt" content={meta.twitter?.image?.alt} />
    </Head>
  );
};

export default Seo;
