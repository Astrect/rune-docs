import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon } from 'lucide-react';
import { SiDiscord } from '@icons-pack/react-simple-icons';

export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            title: 'Rune Docs',
        },
        links: [
            {
                icon: <BookIcon />,
                text: 'Official Documentation',
                url: 'https://developer.runescape.com/',
                // secondary items will be displayed differently on navbar
                secondary: false,
            },
            {
                icon: <SiDiscord />,
                text: 'Official Discord',
                url: 'https://rs.game/RS-Plugin-Discord',
                // secondary items will be displayed differently on navbar
                secondary: false,
            },
        ],
        githubUrl: "https://github.com/astrect/rune-docs"
    };
}