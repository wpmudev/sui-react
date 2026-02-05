# Release Guide

## Overview

This guide provides detailed information about the release process, version management, and deployment strategies for the project. Our release system is automated using Changesets and GitHub Actions.

## Release Philosophy

### Core Principles

1. **Automation First** - Minimize manual intervention to reduce human error
2. **Test Before Release** - All changes go through snapshot deployments
3. **Transparent History** - Every change is documented in CHANGELOG.md
4. **Semantic Versioning** - Predictable version numbers communicate change impact
5. **Atomic Releases** - Monorepo packages are released together when interdependent

### Release Cadence

The project supports flexible release cadence:

- **Continuous Deployment** - Merge to master triggers immediate production release
- **Batched Releases** - Accumulate multiple features in development, release together
- **Emergency Releases** - Hotfixes can be fast-tracked through the pipeline

## Versioning Strategy

### Semantic Versioning (SemVer)

We follow strict semantic versioning: `MAJOR.MINOR.PATCH`

```
MAJOR version (x.0.0)
  Breaking changes
  - API changes requiring user code updates
  - Removed features or functions
  - Changed behavior that breaks existing usage

MINOR version (0.x.0)
  New features (backwards compatible)
  - New components or functions
  - New optional parameters
  - Deprecation warnings (function still works)

PATCH version (0.0.x)
  Bug fixes (backwards compatible)
  - Fixes to existing functionality
  - Documentation updates
  - Performance improvements without API changes
```

### Version Tag Conventions

Different deployment types use specific version tags:

| Tag Type | Format | Example | Registry           | Purpose |
|----------|--------|---------|--------------------|---------|
| Production | `latest` | `1.2.3` | registry.npmjs.org | Stable production release |
| Release Candidate | `rc` | `1.2.3-rc-20240205120000` | npmjs.wpmudev.work | Pre-release testing |
| Snapshot (PR) | `pr-N` | `1.2.3-pr-123` | npmjs.wpmudev.work | PR-specific testing |
| Snapshot (Plugin) | `plugin-name` | `1.2.3-plugin-auth` |  npmjs.wpmudev.work  | Plugin development |

## Step-by-Step Release Process

### Phase 1: Development

#### 1.1 Create Feature Branch

```bash
# Feature branch
git checkout development
git pull origin development
git checkout -b feature/add-new-component

# Plugin branch
git checkout -b plugin/authentication-refactor
```

#### 1.2 Implement Changes

- Write code following project standards
- Add unit tests
- Update documentation
- Test locally

#### 1.3 Create Changeset

```bash
npm run changeset
```

Interactive prompts:
```
? Which packages would you like to include?
  ◉ @wpmudev/sui-components
  ◯ @wpmudev/sui-theme
  ◯ @wpmudev/sui-utils

? What kind of change is this for @wpmudev/sui-components?
  ◯ major (breaking change)
  ◉ minor (new feature)
  ◯ patch (bug fix)

? Please enter a summary for this change
  Add DatePicker component with timezone support
```

This creates `.changeset/random-words-here.md`:
```md
---
"@wpmudev/sui-components": minor
---

Add DatePicker component with timezone support
```

#### 1.4 Commit and Push

```bash
git add .
git commit -m "feat: add DatePicker component with timezone support"
git push origin feature/add-new-component
```

### Phase 2: Pull Request & Testing

#### 2.1 Create Pull Request

- Target: `development` branch
- Template: Fill in PR description
- Link related issues

#### 2.2 Automated Snapshot Deployment

CI pipeline automatically:
1. ✅ Detects changeset files
2. ✅ Runs security audit
3. ✅ Runs accessibility tests
4. ✅ Publishes snapshot packages
5. ✅ Deploys Storybook preview
6. ✅ Comments on PR with deployment details

#### 2.3 Review Deployment

PR comment includes:
```markdown
## Snapshot Deployment Successful

**Deployment Details**
- Type: Snapshot Build
- Registry: https://npmjs.wpmudev.work
- Tag: pr-123
- Deployed: Feb 05, 02:30 PM

**Preview Links**
- [View Storybook Components](https://sui.wpmudev.work/pr-123)

**Installation**
npm install @wpmudev/sui-components@pr-123 --registry https://npmjs.wpmudev.work
```

#### 2.4 Test Snapshot

```bash
# In a test project
npm install @wpmudev/sui-components@pr-123 --registry https://npmjs.wpmudev.work
```

Test:
- Visual review in Storybook
- Integration in test application
- Accessibility validation
- Cross-browser testing

#### 2.5 Code Review

- Reviewers check code quality
- Test snapshot deployment
- Approve changes

### Phase 3: Merge to Development

#### 3.1 Merge PR

```bash
# Via GitHub UI or CLI
gh pr merge 123 --squash
```

#### 3.2 RC Deployment (Automatic)

If this is a push to `development`:
1. ✅ New snapshot published with `rc` tag
2. ✅ Storybook deployed to `/rc` path
3. ✅ Version PR created/updated

#### 3.3 Version PR Created

Automated PR from `development` → `master`:

```
Title: Production Release

Body:
# Production Release

**Storybook Preview:** [View RC Components](https://sui.wpmudev.work/rc)

This PR contains production-ready versions.
Merging will automatically publish to production NPM.

---

**Packages Changed:** 2

## @wpmudev/sui-components @ 1.3.0

<details>
<summary>View Changelog</summary>

### Minor Changes

- abc123: Add DatePicker component with timezone support

</details>

## @wpmudev/sui-theme @ 2.1.1

<details>
<summary>View Changelog</summary>

### Patch Changes

- def456: Fix button padding in dark mode

</details>
```

### Phase 4: Release Preparation

#### 4.1 Review Version PR

**Check package versions:**
```json
// packages/components/package.json
{
  "name": "@wpmudev/sui-components",
  "version": "1.3.0"  // ✅ Bumped from 1.2.0
}
```

**Review CHANGELOG.md:**
```md
## 1.3.0

### Minor Changes

- abc123: Add DatePicker component with timezone support

### Patch Changes

- Updated dependencies
  - @wpmudev/sui-theme@2.1.1
```

#### 4.2 Test RC Deployment

```bash
# Install RC versions
npm install @wpmudev/sui-components@rc --registry https://npmjs.wpmudev.work

# Run integration tests
npm test

# Smoke test in staging environment
npm run deploy:staging
```

#### 4.3 Stakeholder Review

- Product team reviews new features
- QA performs final testing
- Tech lead approves version bumps

### Phase 5: Production Release

#### 5.1 Merge Version PR to Master

```bash
# Approve and merge via GitHub
gh pr review <pr-number> --approve
gh pr merge <pr-number> --squash
```

#### 5.2 Automated Production Pipeline

Pipeline executes:

**Step 1: Package Analysis**
- Compares current vs. previous package versions
- Identifies actually changed packages
- Skips unchanged packages

**Step 2: NPM Publishing**
```bash
# For each changed package:
npm publish --registry https://registry.npmjs.org --tag latest
```

**Step 3: Storybook Production Deploy**
```bash
npm run build-storybook
# Deploy to /prod
```

**Step 4: GitHub Release Creation**

Creates release with tag `release-20240205-143022`:
```markdown
This release contains 2 package(s) published to production NPM registry.

## Release Information
- Release Date: 2024-02-05
- Release Time: 14:30:22 UTC
- Commit: `abc1234`
- Packages Published: 2

## Published Packages
- [`@wpmudev/sui-components@1.3.0`](https://registry.example.com/-/web/detail/@wpmudev/sui-components/v/1.3.0)
- [`@wpmudev/sui-theme@2.1.1`](https://registry.example.com/-/web/detail/@wpmudev/sui-theme/v/2.1.1)

## Changelog Details

### `@wpmudev/sui-components@1.3.0`
<details open>
<summary>View Changelog</summary>

### Minor Changes
- abc123: Add DatePicker component with timezone support

</details>

### `@wpmudev/sui-theme@2.1.1`
<details open>
<summary>View Changelog</summary>

### Patch Changes
- def456: Fix button padding in dark mode

</details>
```

#### 5.3 Verification

**Check NPM registry:**
```bash
npm view @wpmudev/sui-components version
# Output: 1.3.0

npm view @wpmudev/sui-components dist-tags
# Output: { latest: '1.3.0' }
```

**Check Storybook:**
- Visit `https://sui.wpmudev.work/prod`
- Verify new components visible

**Check GitHub Release:**
- Navigate to Releases page
- Verify release notes accurate
---
## Snapshot Deployments

### Types of Snapshots

#### PR Snapshots (`pr-N`)

**Created:** Every PR to development
**Tag:** `pr-123`
**Lifespan:** Until PR merged/closed

**Usage:**
```bash
npm install @wpmudev/sui-components@pr-123 --registry https://staging.example.com
```

#### RC Snapshots (`rc`)

**Created:** Push to development branch
**Tag:** `rc`
**Lifespan:** Until next RC or production release
**Cleanup:** Keeps only latest

**Usage:**
```bash
npm install @wpmudev/sui-components@rc --registry https://staging.example.com
```

#### Plugin Snapshots (`plugin-name`)

**Created:** Push to `plugin/*` branches
**Tag:** Custom per plugin
**Lifespan:** Duration of plugin development
**Cleanup:** Manual or on merge

**Usage:**
```bash
npm install @wpmudev/sui-auth@plugin-auth --registry https://staging.example.com
```

## Appendix

### Changeset File Format

```md
---
"@wpmudev/sui-components": minor
"@wpmudev/sui-theme": patch
---

Summary of changes in one line

Optional detailed description that can span multiple lines
and paragraphs. This content will appear in CHANGELOG.md.

You can include:
- Lists
- Code examples
- Migration guides
```

### Release Tag Format

```
release-YYYYMMDD-HHMMSS

Examples:
- release-20240205-143022
- release-20240206-091530
```
