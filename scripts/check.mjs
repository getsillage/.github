#!/usr/bin/env node

import { existsSync, readFileSync, statSync } from 'node:fs'
import { dirname, extname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const failures = []

const requiredFiles = [
  'profile/README.md',
  'profile/assets/org-avatar-512.png',
  'profile/assets/org-avatar-1024.png',
  'BRAND.md',
  'CODE_OF_CONDUCT.md',
  'CONTRIBUTING.md',
  'SECURITY.md',
  'SUPPORT.md',
  '.editorconfig',
  '.gitattributes',
  '.github/ISSUE_TEMPLATE/config.yml',
  '.github/ISSUE_TEMPLATE/bug_report.yml',
  '.github/ISSUE_TEMPLATE/feature_request.yml',
  '.github/ISSUE_TEMPLATE/question.yml',
  '.github/PULL_REQUEST_TEMPLATE.md',
]

for (const file of requiredFiles) {
  if (!existsSync(resolve(root, file))) failures.push(`missing required file: ${file}`)
}

const canonicalEnglish =
  'Self-hosted, single-user space for private records, history review, and AI answers grounded in your own notes.'
const canonicalChinese =
  '自托管的单人记录空间：保存日常记录、回看历史，并基于自己的记录进行 AI 总结与问答。'

for (const file of ['profile/README.md', 'BRAND.md']) {
  const text = read(file)
  if (!text.includes(canonicalEnglish)) failures.push(`${file}: missing canonical English description`)
}
if (!read('BRAND.md').includes(canonicalChinese)) {
  failures.push('BRAND.md: missing canonical Simplified Chinese description')
}

for (const avatar of ['profile/assets/org-avatar-512.png', 'profile/assets/org-avatar-1024.png']) {
  const path = resolve(root, avatar)
  if (existsSync(path) && statSync(path).size < 1024) failures.push(`${avatar}: asset is unexpectedly small`)
}

for (const file of walkTextFiles()) {
  const text = read(file)
  const lines = text.split(/\r?\n/)
  lines.forEach((line, index) => {
    if (/[ \t]+$/.test(line)) failures.push(`${file}:${index + 1}: trailing whitespace`)
  })

  if (extname(file) === '.md') checkLocalMarkdownLinks(file, text)
}

for (const file of [
  '.github/ISSUE_TEMPLATE/bug_report.yml',
  '.github/ISSUE_TEMPLATE/feature_request.yml',
  '.github/ISSUE_TEMPLATE/question.yml',
]) {
  const text = read(file)
  for (const key of ['name:', 'description:', 'body:']) {
    if (!text.includes(key)) failures.push(`${file}: missing ${key}`)
  }
}

const workflow = read('.github/workflows/validate.yml')
for (const line of workflow.split(/\r?\n/)) {
  if (!line.trimStart().startsWith('uses:')) continue
  if (!/@[0-9a-f]{40}(?:\s|$)/.test(line)) failures.push(`workflow action is not SHA-pinned: ${line.trim()}`)
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log('Organization profile, community files, and brand standards are valid.')

function read(relativePath) {
  const path = resolve(root, relativePath)
  return existsSync(path) ? readFileSync(path, 'utf8') : ''
}

function walkTextFiles() {
  return [
    'profile/README.md',
    'BRAND.md',
    'CODE_OF_CONDUCT.md',
    'CONTRIBUTING.md',
    'SECURITY.md',
    'SUPPORT.md',
    '.editorconfig',
    '.gitattributes',
    'Makefile',
    'scripts/check.mjs',
    '.github/ISSUE_TEMPLATE/config.yml',
    '.github/ISSUE_TEMPLATE/bug_report.yml',
    '.github/ISSUE_TEMPLATE/feature_request.yml',
    '.github/ISSUE_TEMPLATE/question.yml',
    '.github/PULL_REQUEST_TEMPLATE.md',
    '.github/workflows/validate.yml',
  ]
}

function checkLocalMarkdownLinks(file, text) {
  const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g
  for (const match of text.matchAll(linkPattern)) {
    const target = match[1].trim().replace(/^<|>$/g, '')
    if (/^(?:https?:|mailto:|#)/.test(target)) continue
    const [path] = target.split('#', 1)
    if (!path) continue
    const resolved = resolve(root, dirname(file), decodeURIComponent(path))
    if (!existsSync(resolved)) failures.push(`${file}: broken local link: ${target}`)
  }
}
