import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import type { Metadata } from "next";
import { baseUrl } from '@/lib/config';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
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
};

export default function Layout({ children }: LayoutProps<'/docs'>) {
    return (
        <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
            {children}
        </DocsLayout>
    );
}
