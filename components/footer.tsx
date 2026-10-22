export function FooterCredit() {
    return (
        <p data-slot="footer-credit">
            Built by{' '}
            <a
                href="https://x.com/ItsAstrect"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium underline decoration-2 underline-offset-4"
            >
                Astrect
            </a>
            {' '}
            and contributors.
            These are community-sourced docs intended to supplement the official documentation, that can be found at {' '}
            <a
                href="https://developer.runescape.com/rs/index.html"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium underline decoration-2 underline-offset-4"
            >
                https://developer.runescape.com/rs/index.html
            </a>
            .
        </p>
    );
}