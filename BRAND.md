# Sillage Brand and Public Content Guide

This guide is the organization-wide source of truth for public positioning, naming, visual identity, and release-facing content. Product behavior remains defined by the `sillage` repository's product guidance and code.

Application and documentation copy follows the [Sillage Content Design Guidelines](https://github.com/getsillage/sillage/blob/main/docs/development/content-design.md).

## Positioning

Canonical English description:

> Self-hosted, single-user space for private records, history review, and AI answers grounded in your own notes.

Canonical Simplified Chinese description:

> 自托管的单人记录空间：保存日常记录、回看历史，并基于自己的记录进行 AI 总结与问答。

Short brand line:

> Your records stay with you. Your answers come with sources.

The canonical descriptions should appear verbatim in primary repository, website, release, and organization surfaces. Supporting copy may be shorter, but it must preserve the self-hosted, single-user, private-record, and source-grounded boundaries.

## Naming and terminology

- The product name is always `Sillage`; do not translate or restyle it as `SILLAGE` in normal prose.
- English user-facing copy uses `record`, `history`, `Ask`, `summary`, and `source`.
- Simplified Chinese user-facing copy uses `记录`, `历史`, `问答`, `总结`, and `来源`.
- `memo` is an implementation term and must not appear in public product copy.
- Use `self-hosted` and `single-user` with hyphens when they modify a noun.
- Describe AI as optional and source-grounded. Never imply that Sillage includes a model, validates psychological conclusions, or can infer personal facts without records.
- Distinguish `this device`, the `Sillage server`, the `machine running Sillage`, the `data directory`, and the user's `configured AI endpoint`. Do not use `cloud` as a generic name for a self-hosted Sillage server.

## Voice

Sillage should sound calm, direct, concrete, and trustworthy.

1. Lead with what the user can do or control.
2. Prefer short sentences and specific nouns over poetic abstractions.
3. Explain product boundaries without apology or competitive attacks.
4. Use evidence-led language for AI: `based on these records`, `sources`, `not enough information`.
5. Avoid urgency, gamification, surveillance language, inflated claims, and artificial social proof.

Recommended: `Back up the complete data directory before upgrading.`

Avoid: `Never lose another memory with our revolutionary AI vault.`

## Visual identity

The interface is quiet and neutral. Brand color appears in the product mark, links, small status details, and restrained gradients; it should not turn the application into a colorful dashboard.

| Token | Hex | Use |
| --- | --- | --- |
| Trail | `#244E47` | Primary brand accent, light-theme emphasis |
| Echo | `#5D766C` | Dark-theme brand accent, secondary brand detail |
| Glimmer | `#F59E0B` | Spark detail, small highlights, never body text on light backgrounds |
| Ink | `#131313` | Dark surfaces and high-emphasis text |
| Paper | `#F7F7F4` | Warm light-page background |

- Use the supplied transparent organization avatars at `profile/assets/org-avatar-512.png` and `profile/assets/org-avatar-1024.png`.
- Keep clear space around the mark equal to at least one quarter of its rendered width.
- Do not recolor, rotate, stretch, crop, outline, or add text inside the mark.
- Use system sans-serif typography for both English and Chinese. Establish hierarchy with weight, size, and spacing.
- Support light and dark themes equally. Critical text must meet WCAG AA contrast.

## Product claims and boundaries

Public content must state or preserve these facts:

- one account per instance;
- self-hosted operation with no official hosted service;
- Web and Android clients, in English and Simplified Chinese;
- optional operator-configured Anthropic-compatible or OpenAI-compatible endpoints;
- personal-history claims require record sources;
- public ingress, TLS, DNS, tunnels, and CDNs are operated outside Sillage;
- no multi-user collaboration, public profile, social feed, tags, automatic background sync, or built-in model.

Do not publish performance, privacy, security, compatibility, or support claims unless the matching repository contains current evidence and documentation.

## Repository descriptions

Use these descriptions on GitHub and other directory surfaces:

- `getsillage/sillage`: `Self-hosted, single-user space for private records, history review, and AI answers grounded in your own notes.`
- `getsillage/getsillage.github.io`: `Bilingual product website for Sillage, with product guidance and a Docker quick start.`
- `getsillage/.github`: `Organization profile, shared community health files, and Sillage brand standards.`

## Public content checklist

Before publishing a repository page, website update, release note, announcement, or image:

- product name and terminology match this guide;
- the self-hosted and single-user boundaries remain clear;
- AI is described as optional, configured by the operator, and source-grounded;
- data-location language remains accurate for both local and remote self-hosted instances;
- links point to the canonical deployment, data, AI, support, and security documents;
- English and Simplified Chinese claims stay semantically aligned;
- screenshots use synthetic data and contain no tokens, hostnames, real records, or personal information;
- version, compatibility, upgrade, rollback, and support claims match the current release evidence.
