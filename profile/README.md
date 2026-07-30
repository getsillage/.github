<p align="center">
  <img src="https://raw.githubusercontent.com/getsillage/sillage/main/web/public/sillage-icon.svg" alt="Sillage" width="72" height="72" />
</p>

<h1 align="center">Sillage</h1>

<p align="center">
  Self-hosted · Single-user · Open source
</p>

Self-hosted, single-user space for private records, history review, and AI answers grounded in your own notes.

Write in Markdown with images and files. Browse through lists, a calendar, and search. Optionally configure your own Anthropic- or OpenAI-compatible endpoint for summaries and source-grounded answers. Web and Android clients, in English and 简体中文.

No multi-user collaboration, no public profiles, no official hosted service — you run your own instance. Data stays under your control.

## Projects

| Project | Description |
| --- | --- |
| [sillage](https://github.com/getsillage/sillage) | Product monorepo — Go backend, React Web, Android client |
| [website](https://github.com/getsillage/website) | Product landing page |

## Links

- [Website](https://getsillage.github.io/website)
- [Releases](https://github.com/getsillage/sillage/releases)
- [Documentation](https://github.com/getsillage/sillage/tree/main/docs)
- [Deployment](https://github.com/getsillage/sillage/blob/main/docs/user/deployment.md)
- [AI & privacy](https://github.com/getsillage/sillage/blob/main/docs/user/ai.md)
- [Engineering governance](https://github.com/getsillage/sillage/blob/main/docs/development/governance.md) (verification, contribution tracks, standards registry)
- License: [MIT](https://github.com/getsillage/sillage/blob/main/LICENSE)

## Brand assets

| File | Use |
| --- | --- |
| [assets/org-avatar-1024.png](assets/org-avatar-1024.png) | GitHub organization profile picture (recommended upload) |
| [assets/org-avatar-512.png](assets/org-avatar-512.png) | Same mark at 512×512 (matches product `icon-512.png`) |

Source: product icon from [sillage `web/public/icon-512.png`](https://github.com/getsillage/sillage/blob/main/web/public/icon-512.png) (trail + amber star on black).

To set the org avatar (GitHub has no public API for this):

1. Open [Organization profile settings](https://github.com/organizations/getsillage/settings/profile)
2. **Profile picture** → upload `assets/org-avatar-1024.png`
3. Confirm / save

## Org notes

- **Product norms and CI live in [sillage](https://github.com/getsillage/sillage)** (`make check`, constitution, governance ADRs).
- **Website** is a separate static marketing site; it should keep the same one-line product description and privacy claims as the monorepo READMEs, but may use a simpler toolchain.
- Security reports follow the monorepo [Security Policy](https://github.com/getsillage/sillage/blob/main/SECURITY.md), not this profile repository.
