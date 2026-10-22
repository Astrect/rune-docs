# About Rune Docs

Rune Docs is a community-driven collection of documentation and resources designed to help developers create plugins for RuneScape, featuring useful guides and contributions from the community.

Visit the [Official RuneScape Plugin Documentation](https://developer.runescape.com/)
Join the [Official RuneScape Plugin Discord](https://rs.game/RS-Plugin-Discord)

## Contributing

If you'd like to contribute to this website, you can follow our [Contributing Guide](./CONTRIBUTING.md), or follow the version on our website:

- [Setting Up/Basics](https://runedocs.astrect.me/docs/contributing)
- [PR Guidelines](https://runedocs.astrect.me/docs/contributing/pr-guidelines)
- [Writing Guides](https://runedocs.astrect.me/docs/contributing/writing-guides)

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- [Pnpm](https://pnpm.io/) package manager

### Installing Pnpm

If you don't have Pnpm installed, you can install it globally using:

```bash
npx get-pnpm
```

Alternatively, visit [pnpm.io](https://pnpm.io/) for other installation methods.

### Installation

1. Create a fork of the repository
2. Clone that repository & change your directory into it.

```bash
git clone https://github.com/<you>/<fork repo name>.git
cd <fork repo name>
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production application
- `pnpm start` - Run the production server
- `pnpm run types:check` - Validate TypeScript types and MDX files`
- `pnpm lint` - Run ESLint for code quality