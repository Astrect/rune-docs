# Contributing to Rune Docs Documentation

Thank you for your interest in contributing to the Rune Docs Documentation project! This is a community-driven collection of documentation and resources designed to help developers create plugins for RuneScape, featuring useful guides and contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Documentation Guidelines](#documentation-guidelines)
- [Submitting Changes](#submitting-changes)
- [Style Guide](#style-guide)
- [Community](#community)

## Website Guides

Alongside this, you are requested to follow our guides related to contributing on our website:

- [PR Guidelines](https://runedocs.astrect.me/docs/contributing/pr-guidelines)
- [How-to for Writing Guides](https://runedocs.astrect.me/docs/contributing/writing-guides)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Issues

- **Documentation Errors**: Found a typo, broken link, or incorrect information? Open an issue!
- **Missing Content**: Notice a topic that should be covered? Suggest it!
- **Technical Issues**: Encountering bugs with the site itself? Let us know!

When reporting issues, please:

- Use a clear and descriptive title
- Provide as much relevant information as possible
- Include screenshots if applicable
- Tag the issue appropriately

### Suggesting Enhancements

We welcome suggestions for new features or improvements:

- Search existing issues first to avoid duplicates
- Clearly describe the enhancement and its benefits
- Explain why this would be useful to the RuneScape modding community

### Contributing Documentation

Documentation contributions are the heart of this project:

1. **Improving Existing Docs**
   - Fix typos and grammatical errors
   - Clarify confusing explanations
   - Update outdated information
   - Add examples and code snippets

2. **Writing New Content**
   - Server plugin development guides
   - Data asset configuration tutorials
   - Blockbench modeling workflows
   - Visual scripting documentation
   - Best practices and patterns

3. **Adding Examples**
   - Code examples for Lua plugins
   - JSON configuration samples
   - Step-by-step tutorials
   - Real-world use cases

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- Pnpm package manager (install with `npx get-pnpm`)
- Git
- A text editor (VS Code, Cursor, etc.)

### Local Development Setup

1. Fork the repository on GitHub

2. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/site.git
cd site
```

3. Add the upstream repository:

```bash
git remote add upstream https://github.com/astrect/rune-docs/site.git
```

4. Install dependencies:

```bash
pnpm install
```

5. Start the development server:

```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

BEFORE you start to work on your addition, you need to switch to the `dev` branch using:

```bash
git checkout dev
```

## Documentation Guidelines

### File Structure

- Place documentation files in `content/docs/en`
- Use kebab-case for file names: `server-first-dev.mdx`
- Organize related content in subdirectories
- Update `meta.json` files for navigation

### MDX Format

Documentation files use MDX (Markdown + JSX):

```mdx
---
title: Your Page Title
description: A brief description of the content
---

## Introduction

Your content here...
```

### Content Guidelines

1. **Accuracy First**
   - Verify information against official RuneScape sources
   - Link to official blog posts when relevant
   - Clearly mark speculation or unconfirmed information

2. **Clear and Concise**
   - Write for your audience (beginners to advanced)
   - Use simple language where possible
   - Break complex topics into digestible sections
   - Include code examples and screenshots

3. **Well-Structured**
   - Use proper heading hierarchy (h2, h3, h4)
   - Include a table of contents for long pages
   - Add cross-references to related pages
   - Use callouts for important notes

4. **Code Examples**
   - Provide complete, working examples
   - Include comments explaining key concepts
   - Follow Lua and JSON best practices
   - Test your code before submitting

## Submitting Changes

### Branch Workflow

1. Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

2. Make your changes and commit:

```bash
git add .
git commit -m "feat: Add clear, descriptive commit message that follow conventional commits"
```

3. Push to your fork:

```bash
git push origin feature/your-feature-name
```

4. Open a Pull Request on GitHub

### Pull Request Guidelines

You must include a GitHub issue number while making a PR, attach your GitHub issue by prefixing your PR title with `GH-<issue number>`

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), and you are supposed to use those commits while contributing to us. **Your PR will not be accepted if you do not use conventional commits**

## Style Guide

### Markdown Styling

- Use `**bold**` for emphasis
- Use `*italic*` for slight emphasis
- Use `code` for inline code, file names, and commands
- Use code blocks with language tags:

```lua
function sayHello()
    print("Hello, World!")
end
```

### Writing Style

- Write in second person (you/your) when addressing readers
- Use active voice
- Keep sentences concise
- Use lists for multiple items
- Add examples to illustrate concepts

### Technical Terms

- **RuneScape**: Always capitalize
- **Jagex**: Always capitalize
- **Lua**: Capitalize (programming language)
- **JSON**: All caps
- **MDX**: All caps

### Links

- Use descriptive link text (not "click here")
- Link to official RuneScape sources when possible
- Use relative links for internal pages: `[Quick Start](/docs/quick-start)`

## Community

### Getting Help

- **Discord**: [Join the Official RuneScape Plugin Discord](https://rs.game/RS-Plugin-Discord) for help while writing guides and assistance with creating plugins!
- **GitHub Discussions**: Ask questions and share ideas
- **Issues**: Report bugs and request features

### Recognition

Contributors are recognized in several ways:

- Listed in the repository's contributors
- Building a portfolio of documentation work
- If you wrote a guide, it'll show that you are the author at the end of the page.

## Questions?

If you have questions not covered in this guide:

- [Open a discussion](https://github.com/astrect/rune-docs/discussions) on GitHub

Thank you for contributing to Rune Docs Documentation! Your efforts help the entire community learn and grow together.