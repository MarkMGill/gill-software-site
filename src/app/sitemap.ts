import type { MetadataRoute } from "next";
import { featuredPost } from "../lib/posts";
import { siteConfig } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: featuredPost.publishedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: featuredPost.publishedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog/${featuredPost.slug}`,
      lastModified: featuredPost.publishedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
