## Project Setup

To start contributing to SUI React, follow these steps:

1. Fork the repository by clicking the <kbd>Fork</kbd> button located at the top right of this page. ([SUI React repo](https://github.com/wpmudev/sui-react))

2. Clone your fork locally:

```sh
git clone https://github.com/<github_username>/sui-react.git
cd sui-react
```

3. Install all dependencies and packages by running `npm ci`. This command will take care of installing the necessary dependencies.

## Development

To enhance our development process, we've implemented tooling and systems. SUI React utilizes a monorepo structure, and each component is treated as an independent package that can be used in isolation.

### Packages
- **`./packages/assets/css`**: This directory houses styling and CSS files, ensuring a uniform and cohesive UI design.
- **`./packages/assets/icons`**: Icons for icon assets.
- **`./packages/react`**: This package serves as the hub for all UI components, providing a streamlined export for easy integration.
- **`./packages/hooks`**: In this directory, you'll find custom React hooks designed for reusable functionalities, enhancing code modularity.
- **`./packages/utils`**: A collection of helper functions and modules catering to common operations.
- **`./packages/ui/*`**: This folder includes all the UI component packages.
- **`./packages/common/*`**: These packages are combination of component packages which falls under same category.

### Tooling

- [Lerna](https://lerna.js.org/) to keep track of packages and dependencies.
- [Storybook](https://storybook.js.org/) helps us quickly develop and test UI components.
- [Testing Library](https://testing-library.com/)  ensures our components and hooks are thoroughly tested.
- [Changeset](https://github.com/atlassian/changesets) is there to document changes, create changelogs, and manage releases

### Commands

- **`npm ci`**: Installs all the necessary dependencies for development.
- **`npm run storybook`**: Initiates the Storybook server. This is useful for visually testing components during development.
- **`npm run build`**: Executes the build process for all component packages.
- **`npm run test`**: Runs tests for all component packages.

## Making a Pull Request?

### Commit Guidelines

Before submitting Pull Request, ensure that your commits adhere to the commit conventions specified in this repository.

When making a commit, please use the following format for your commit message: `category(scope or module): message`. Choose one of the following categories:

- ✨`feat`: for changes introducing new code or features
- 🐛`fix`: for changes addressing and fixing bugs (ideally, reference the related issue)
- 🔨`refactor`: for any code-related changes that are neither fixes nor features
- 📚`docs`: for modifications to existing documentation or the creation of new documentation (e.g., README, documentation for library usage)
- 📦`build`: for changes related to app building, dependencies, or the addition of new dependencies
- 🚨`test`: for changes related to tests, including the addition of new tests or modifications to existing ones
- 👷`ci`: for changes related to the configuration of continuous integration (e.g., GitHub Actions, CI system)
- 🔧`chore`: for all other changes to the repo that don't fit into the categories mentioned above

> Important: 
> 1. Follow the commit convention in both the PR title and commit message.
> 2. Icons will be added to the changelog automatically. Please refrain from using icons when writing commit or pull request titles, as this may result in multiple icons.

### PR Submission Process

1. Begin by forking `sui-react` repository and subsequently clone your fork.
2. Create a new branch originating from the `development` employing the `[type/scope]` such as: `fix/button`.
3. Commit your changes following the commit convention. Validate your changes during development using `npm run storybook` and `npm run test --a11y`.
4. Execute `npm run changeset` to write description of your modifications. It will contributes to the generation of a changelog during the release phase. Check [Changeset documentation](https://github.com/atlassian/changesets/tree/master/packages/cli) for additional insights.

### Tests

Every commit addressing bugs or introducing new features requires a test, you can use following commands as per your need:

- **`npm run test`**: Runs tests for all component packages.
- **`npm run test:dev`**: Runs tests for all component packages with the `--watch` flag, allowing continuous monitoring.
- **`npm run test:a11y`**: Runs tests with accessibility.
