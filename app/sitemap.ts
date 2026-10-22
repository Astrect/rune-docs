import { baseUrl } from "@/lib/config";
import { source } from "@/lib/source";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const sitemap: MetadataRoute.Sitemap = [];
    const pages = source.getPages();

    for (const page of pages) {
        if (!page.url) continue;

        sitemap.push({
            url: `${baseUrl}${page.url}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        });
    }

    return sitemap;
}
