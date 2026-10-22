import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { FooterCredit } from '@/components/footer';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { baseUrl } from '@/lib/config';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const MDX = page.data.body;

    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDX
                    components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLink(source, page),
                    })}
                />
            </DocsBody>
            <FooterCredit />
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
        keywords: [
            "runescape modding",
            "runescape",
            "runescape plugins",
            "runescape mods",
            "how to mod runescape",
            "modding tutorial",
            "modding guides",
            "runescape modding guides",
            "runescape modding tutorial",
            "how to start modding runescape",
            "how to make a mod",
        ],
        alternates: { canonical: page.url },
        openGraph: {
            images: [
                {
                    url: `${baseUrl}/api/og?title=${encodeURIComponent(page.data.title)}&description=${encodeURIComponent(page.data.description ?? '')}`,
                    width: 1200,
                    height: 630,
                    alt: page.data.title,
                },
            ],
        },
    };
}
