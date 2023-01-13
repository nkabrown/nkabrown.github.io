<!-- prettier-ignore -->
```js server
/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'philosophy.rocket.md';
import { html, layout } from './recursive.data.js';
export { html, layout };
/* END - Rocket auto generated - do not touch */
```

## Setting a Browser Support Baseline

-   [browserslist](https://github.com/browserslist/browserslist) - targeted browser list for tooling
-   [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - linting for browser compatible code patterns

Only support relatively modern browsers. The simplest way to test user agent support is through the `@support` CSS conditional rule and I'm checking for CSS feature support in `outdated-browser-wall.css`. Supporting relatively modern browsers enables usage of new JS, CSS, and Web API features without the need to polyfill. Users on outdated browsers are gently reminded to update or switch improving the future for both users and developers.

Using the browser support baseline I've set in `outdated-browser-wall.css` with [browserslist](https://github.com/browserslist/browserslist) I can improve the targeting accuracy of some specific frontend tools. The browser support baseline is replicated in my `.browserslistrc` file.

## Pre-commit Hook

-   [husky](https://github.com/typicode/husky) - easily setup git hooks
-   [lint-staged](https://github.com/okonet/lint-staged) - execute scripts on staged files via git pre-commit hook

One of the most valuable processes to improve the quality of code reviews is to setup a pre-commit hook that lints and formats all code going to a PR. Linting helps catch common errors and suggests best practices. It's an automated code review. Enforcing formatting removes whole classes of nit-picky issues around layout, such as indentation variance and semi-colon usage. This pre-commit hook can be bypassed with `git commit --no-verify`, but codebases should be kept clean of linting errors and effort should be expended to remove linting errors and warnings.

I'm using [husky](https://typicode.github.io/husky/#/) to easily create git hooks. It's important to add `husky install` to your `prepare` script in `package.json` so git hooks are installed when new team members run `npm install` or `npm ci`. I'm using [lint-staged](https://github.com/okonet/lint-staged) to run the formatter and linter as shell scripts on staged files. These tasks run concurrently by default but can be configured to run in order to avoid race conditions, see [task concurrency](https://github.com/okonet/lint-staged#task-concurrency).

You can encourage the use of the pre-commit hook by instructing developers to use `npm ci` instead of `npm install` in your READMEs. The `npm ci` command will setup available git hooks as well as install exact versions of dependencies promoting consistency across environments and between team members.

## Code Formatting

-   [prettier](https://prettier.io/) - low configuration opinionated code formatter
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - turn off linting rules that conflict with prettier

I am using [prettier](https://prettier.io) to format this project code, particularly when files are staged to be commited. Prettier is a low configuration tool which strictly limits what can be configured. In this sense it's opinionated and makes many code formatting decisions for you. I use a simple configuration file with minimal exceptions to prettier's defaults, such as, avoiding parentheses in arrow functions, using single quotes in JavaScript and TypeScript files, and setting a 4 space indentation level on markdown files.

Formatting code is an important step to complete before code review to eliminate whole classes of nit-picky issues. Reviewers can focus on more substantive issues. Rework is minimized.

The formatter can be run manually over all files with `npx prettier --write .` or via `npm run format` or over any subset of files with `npx prettier --write "src/**/*.css"` as one example.

When manually formatting files it's polite to keep formatting changes in a separate commit from other code changes. This makes formatting changes easy to isolate during code reviews.

## Linting

-   [ESLint](https://eslint.org) - static analysis to find and fix JavaScript problems
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - turn off linting rules that conflict with prettier
-   [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - linting for browser compatible code patterns
-   [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) - apply linting rules to inline scripts in html
-   [eslint-plugin-lit](https://github.com/43081j/eslint-plugin-lit) - linting rules for Lit templating library
-   [eslint-plugin-lit-a11y](https://open-wc.org/docs/linting/eslint-plugin-lit-a11y/overview/) - linting rules for accessibility in lit components
-   [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc) - linting rules for custom elements (web components)

I am using [ESLint](https://eslint.org) to lint project frontend code, particularly files that are staged to be committed. ESLint statically analyzes JavaScript code looking for code patterns that may cause errors, fall short of best practices, or cause code formatting issues. Each file of code is parsed into an abstract syntax tree (AST). The linter walks down the AST and then back up visiting each node twice. Each node's type triggers related linting rules and the linter collects and reports observed errors and warnings.

I use rules from the `eslint:recommend` configuration file to report common problems. I'm using `eslint-config-prettier` to turn off the layout linting rules related to code formatting since `prettier` handles those issues. I have web component/Lit specific rules from the `wc` and `lit` plugins and extend their recommended rules with a few additions. The `lit-a11y` plugin spots accessibility issues within web components/Lit. I'm using `eslint-plugin-compat` to provide IDE support and linting against my browser support baseline. My JS linting rules are applied to inline scripts in HTML by the `html` plugin.

## Housekeeping for Linting/Formatting Tasks

In POSIX a process exit status other than zero is interpreted as failure of the process to accomplish its task and an error is thrown. ESLint and Prettier will end their process with exit status `1` if a linting error or unformatted file is found. This is very helpful when incorporating linting or formatting into a CI pipeline. It's not helpful when running these processes as part of development where the goal is clean reporting of linting errors and formatting omissions. I add `exit 0` to the end of my non-CI linting/formatting scripts to report successful accomplishment of the linting/formatting task and avoid throwing errors in the terminal.

## Why do I prefer YAML for my configuration files?

Both JSON and YAML are data serialization languages, but YAML supports comments. YAML is also becoming the preferred configuration language for infrastructure, being perceived as more human readable and simpler than JSON. I've chosen to configure my tooling with YAML wherever possible to align myself with current trends in configuration and to build familiarity with this configuration language.

**Resources to learn YAML**

-   [Learn YAML in Y minutes](https://learnxinyminutes.com/docs/yaml/)
-   [Learn YAML](https://www.yaml.info/learn/index.html)

## Updating Dependencies

Regularly updating dependencies and dev dependencies is very beneficial for long lasting codebases.

-   Run `npm outdated` to list dependencies in need of review.
-   Review release notes and/or change logs for list of dependencies with new updates.
    -   Is there new functionality this codebase can use?
    -   Do changes need to be made to upgrade?
-   Run `npx browserslist-lint` to update `caniuse-lite` database.