import { PropsWithChildren, ReactNode } from "react";

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

export type WithClassName<T = {}> = T & {
  className?: string;
};

export interface Route {
  title: string;
  path: string;
}

export interface RouteContext {
  previousRoute?: Route;
  nextRoute?: Route;
  currentRoute?: Route;
}

export interface Section {
  section: string;
  routes: Route[];
}

export interface Heading {
  id: string;
  text: string;
  level: string;
}

export interface SiteConfig {
  repo?: Repo;
  author?: Author;
  seo?: SEO;
}

export interface Repo {
  url: string;
  editUrl?: string;
  blobUrl?: string;
}

export interface Author {
  name?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
}

export interface SEO {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: OpenGraph;
  twitter?: Twitter;
  robots?: string;
}

export interface OpenGraph {
  url?: string;
  type?: string;
  image?: OpenGraphMedia;
  locale?: string;
  siteName?: string;
}

export interface OpenGraphMedia {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
}

export interface Twitter {
  handle?: string;
  site?: string;
  cardType?: string;
  image?: OpenGraphMedia;
}

export interface Feature {
  title: string;
  description: string;
  icon: any;
}

export interface TweetAuthor {
  name: string;
  avatar: string;
  bio: string;
}

export interface TweetData {
  text: string;
  url: string;
  author: TweetAuthor;
}
