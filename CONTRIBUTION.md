# Contribution Guide

This guide outlines the process for contributing to the SUI React repository. Please follow these guidelines to ensure a smooth and consistent contribution workflow.

## Project Setup

To start contributing to SUI React, follow these steps:

1. Fork the repository by clicking the **Fork** button at the top right of the [SUI React repository](https://github.com/<organization>/sui-react).
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<github_username>/sui-react.git
   cd sui-react
   ```
3. Install all dependencies and packages:
   ```bash
   npm ci
   ```

## Development

SUI React utilizes a monorepo structure, where each component is treated as an independent package that can be used in isolation.

### Packages
- **./packages/assets/css**: Houses styling and CSS files for a uniform and cohesive UI design.
- **./packages/assets/icons**: Contains icon assets.
- **./packages/react**: Central hub for all UI components, providing streamlined exports for easy integration.
- **./packages/hooks**: Custom React hooks for reusable functionalities, enhancing code modularity.
- **./packages/utils**: Helper functions and modules for common operations.
- **./packages/ui/***: Individual UI component packages.
- **./packages/common/***: Combinations of component packages grouped by category.

### Tooling
- **Lerna**: Manages packages and dependencies in the monorepo.
- **Storybook**: Facilitates rapid development and visual testing of UI components.
- **Testing Library**: Ensures components and hooks are thoroughly tested.
- **Changeset**: Manages versioning, changelogs, and releases.

### Commands
- `npm ci`: Installs all necessary dependencies for development.
- `npm run storybook`: Starts the Storybook server for visually testing components.
- `npm run build`: Builds all component packages.
- `npm run test`: Runs tests for all component packages.
- `npm run test:dev`: Runs tests with the `--watch` flag for continuous monitoring.
- `npm run test:a11y`: Runs tests with accessibility checks.

## Commit Guidelines

We enforce [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for all commit messages to ensure a clear and consistent commit history. Non-compliant commits will be rejected.

### Commit Message Format
```
<category>(<scope>): <message>
```

- **category**: One of the following:
	- `feat`: New features or code.
	- `fix`: Bug fixes (ideally reference the related issue).
	- `refactor`: Code changes that are neither fixes nor features.
	- `docs`: Documentation updates or additions (e.g., README, library usage docs).
	- `build`: Changes to app building, dependencies, or new dependencies.
	- `test`: Test-related changes, including new or modified tests.
	- `ci`: Continuous integration configuration changes (e.g., GitHub Actions).
	- `chore`: Other changes not covered by the above categories.
- **scope**: The affected package or module (e.g., `button`, `hooks`, `utils`).
- **message**: A concise description of the change (max 50 characters).

**Examples**:
- `feat(button): add new button variants`
- `fix(auth): resolve login error handling`
- `docs(readme): update installation instructions`

**Important**:
- Use the same convention for both commit messages and PR titles.

### Steps to Commit
1. Stage your changes: `git add .` or specific files.
2. Commit with a conventional message: `git commit -m "<category>(<scope>): <message>"`.
3. If the commit is rejected, ensure the message adheres to the format.

## Branch Naming Conventions

Branches should align with Conventional Commits and follow a clear naming pattern to reflect the type of change.

### Branch Naming Pattern
```
<type>/<short-description>
```

- **type**: Matches the commit category (`feat`, `fix`, `docs`, etc.).
- **short-description**: A brief, hyphenated description of the change.

**Examples**:
- `feat/add-button-variants`
- `fix/auth-error-handling`
- `docs/update-readme`

### Main Branches
- **master**: Production-ready branch. Only the `development` branch is merged into `master` during a release. Direct commits or PRs to `master` are not allowed.
- **development**: The integration branch for all changes. All PRs must target this branch.

### Steps to Create a Branch
1. Ensure you are on the `development` branch: `git checkout development`.
2. Create a new branch: `git checkout -b <type>/<short-description>`.
3. Make changes and commit using the Conventional Commits format.
4. Push the branch: `git push origin <type>/<short-description>`.

## Using NVM for Node Version Management

We use [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) to ensure consistent Node.js versions across development environments.

### Setting the Node Version
1. Install `nvm` by following the instructions in the [official nvm documentation](https://github.com/nvm-sh/nvm#installing-and-updating).
2. Check the required Node version in the `.nvmrc` file:
   ```bash
   cat .nvmrc
   ```
3. Use the specified version:
   ```bash
   nvm use
   ```
4. If the version is not installed, install it:
   ```bash
   nvm install
   ```
5. Verify the active Node version:
   ```bash
   node --version
   ```

## Using Changesets for Version Management

We use [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs. Every PR introducing a change (e.g., `feat`, `fix`) must include a changeset.

### Steps to Generate a Changeset
1. After committing changes, run:
   ```bash
   npm run changeset
   ```
2. Follow the interactive prompts:
	- Select affected packages (if applicable).
	- Choose the change type (`patch`, `minor`, or `major`).
	- Provide a description of the change.
3. This generates a `.md` file in the `.changeset` directory.
4. Commit the changeset file:
   ```bash
   git add .changeset
   git commit -m "chore: add changeset for <description>"
   ```
5. Push changes and create a PR.

### Notes
- Ensure the changeset description is clear and aligns with the PR changes.
- The changeset contributes to the changelog and determines the version bump during release.

## PR Submission Process

1. Fork the [SUI React repository](https://github.com/<organization>/sui-react) and clone your fork.
2. Create a branch from `development` using the `[type]/[scope]` format (e.g., `fix/button`).
3. Commit changes following the Conventional Commits format.
4. Validate changes using:
   ```bash
   npm run storybook
   npm run test --a11y
   ```
5. Generate a changeset:
   ```bash
   npm run changeset
   ```
6. Push the branch:
   ```bash
   git push origin <type>/<short-description>
   ```
7. Create a pull request targeting the `development` branch, ensuring:
	- The PR title follows the Conventional Commits format.
	- A clear description of the changes and their purpose.
	- A generated changeset (if applicable).
8. Request a review from the maintainers.

## Tests

Every commit addressing bugs or introducing new features requires tests. Use the following commands as needed:
- `npm run test`: Runs tests for all component packages.
- `npm run test:dev`: Runs tests with the `--watch` flag for continuous monitoring.
- `npm run test:a11y`: Runs tests with accessibility checks.

## Additional Notes
- Keep your branch up-to-date with `development`:
  ```bash
  git fetch origin
  git pull origin development
  ```
- Ensure tests pass and code adheres to linting/formatting rules before submitting a PR.
- Be responsive to feedback during the PR review process.

Thank you for contributing to SUI React!
