import { type Plugin, type Preset } from "unified";
import rehypeRemoveComments from "rehype-remove-comments";
import remarkRemoveComments from "remark-remove-comments";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import esoNews from "./esoNews.ts";
import fixNestedList from "./fixNestedList.ts";
import imgLazySrc from "./imgLazySrc.ts";
import imgOriginSrc from "./imgOriginSrc.ts";
import removeBanner from "./removeBanner.ts";
import removeEditLink from "./removeEditLink.ts";
import removeImgLink from "./removeImgLink.ts";
import removeTags from "./removeTags.ts";
import replaceHref from "./replaceHref.ts";
import uespWiki from "./uespWiki.ts";
import en2zh from "./en2zh.ts";

export const rehypeOfficial: Preset = {
  plugins: [
    rehypeRemoveComments as Plugin,
    esoNews,
    imgLazySrc,
    fixNestedList,
    removeBanner,
    replaceHref,
    removeImgLink,
    removeTags,
  ],
};

export const rehypeUesp: Preset = {
  settings: {},
  plugins: [
    rehypeRemoveComments as Plugin,
    uespWiki,
    removeImgLink,
    imgOriginSrc,
    fixNestedList,
    removeEditLink,
    en2zh,
  ],
};

export const remarkUesp: Preset = {
  settings: {},
  plugins: [
    remarkRemoveComments,
    remarkFrontmatter,
    remarkGfm,
  ],
};
