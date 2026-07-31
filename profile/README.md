<p align="center">
  <img src="assets/org-avatar-512.png" alt="Sillage" width="88" height="88" />
</p>

<h1 align="center">Sillage</h1>

<p align="center">
  <strong>Your records stay with you. Your answers come with sources.</strong>
</p>

<p align="center">
  Self-hosted · Single-user · Open source
</p>

<p align="center">
  <a href="https://getsillage.github.io/website"><img src="https://img.shields.io/badge/Website-244E47?style=flat-square" alt="Website" /></a>
  <a href="https://github.com/getsillage/sillage/releases"><img src="https://img.shields.io/github/v/release/getsillage/sillage?display_name=tag&style=flat-square" alt="Latest release" /></a>
  <a href="https://github.com/getsillage/sillage/pkgs/container/sillage"><img src="https://img.shields.io/badge/Container-ghcr.io-244E47?style=flat-square&logo=docker" alt="Container image" /></a>
  <a href="https://github.com/getsillage/sillage/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-F59E0B?style=flat-square" alt="MIT License" /></a>
</p>

Self-hosted, single-user space for private records, history review, and AI answers grounded in your own notes.

Write in Markdown with images and files. Revisit records through lists, a calendar, and search. Optionally connect an Anthropic-compatible or OpenAI-compatible endpoint for summaries and source-grounded answers. Use the responsive Web interface or the native Android client in English or Simplified Chinese.

## Why Sillage

| Write simply | Revisit naturally | Ask with evidence |
| --- | --- | --- |
| A date and Markdown body are enough. Drafts stay recoverable. | Lists, calendar, search, favorites, and archives keep organization lightweight. | Claims about your personal history cite the records they came from. |

Your instance has one account. Your SQLite database, attachments, and runtime secrets stay in your data directory. Sillage has no official hosted service, public profiles, social feed, or multi-user collaboration.

## Start here

```bash
docker run --rm \
  -p 127.0.0.1:5231:5231 \
  -v "$HOME/.sillage:/var/opt/sillage" \
  ghcr.io/getsillage/sillage:latest
```

Open `http://localhost:5231` and create the instance's only account. See the [deployment guide](https://github.com/getsillage/sillage/blob/main/docs/user/deployment.md) before adding public ingress or upgrading an existing instance.

## Projects

| Project | Purpose |
| --- | --- |
| [sillage](https://github.com/getsillage/sillage) | Product monorepo: Go backend, embedded React Web app, Android client, documentation, and releases |
| [website](https://github.com/getsillage/website) | Bilingual product website and deployment entry point |
| [.github](https://github.com/getsillage/.github) | Organization profile, shared community health files, and [brand/content standards](https://github.com/getsillage/.github/blob/main/BRAND.md) |

## Product resources

- [Documentation](https://github.com/getsillage/sillage/tree/main/docs) · [Deployment](https://github.com/getsillage/sillage/blob/main/docs/user/deployment.md) · [Data, backup & recovery](https://github.com/getsillage/sillage/blob/main/docs/user/data.md)
- [AI usage & privacy](https://github.com/getsillage/sillage/blob/main/docs/user/ai.md) · [Android](https://github.com/getsillage/sillage/blob/main/android/README.md)
- [Releases](https://github.com/getsillage/sillage/releases) · [Container images](https://github.com/getsillage/sillage/pkgs/container/sillage)
- [Support](https://github.com/getsillage/sillage/blob/main/SUPPORT.md) · [Security](https://github.com/getsillage/sillage/blob/main/SECURITY.md) · [Contributing](https://github.com/getsillage/sillage/blob/main/CONTRIBUTING.md)
- [简体中文说明](https://github.com/getsillage/sillage/blob/main/README.zh-CN.md)

Sillage is open source under the [MIT License](https://github.com/getsillage/sillage/blob/main/LICENSE).
