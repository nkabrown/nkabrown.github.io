# Interactive Résumé

## Quickstart

```shell
# test npm version, if version < 7 run 'npm install -g npm@latest'
npm --version

# installs exact dependencies and sets up git hooks
npm ci

# run local development server
npm run start
```

## Supporting Documentation

**Development Dependencies**

-   [browserslist](https://github.com/browserslist/browserslist) - targeted browser list for tooling
-   [ESLint](https://eslint.org) - static analysis to find and fix JavaScript problems
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - turn off linting rules that conflict with prettier
-   [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - linting for browser compatible code patterns
-   [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) - apply linting rules to inline scripts in html
-   [eslint-plugin-lit](https://github.com/43081j/eslint-plugin-lit) - linting rules for Lit templating library
-   [eslint-plugin-lit-a11y](https://open-wc.org/docs/linting/eslint-plugin-lit-a11y/overview/) - linting rules for accessibility in lit components
-   [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc) - linting rules for custom elements (web components)
-   [husky](https://github.com/typicode/husky) - easily setup git hooks
-   [lint-staged](https://github.com/okonet/lint-staged) - execute scripts on staged files via git pre-commit hook
-   [prettier](https://prettier.io) - low configuration opinionated code formatter
-   [Lit](https://lit.dev) - web component template rendering library

**Dependencies**

-   [Rocket](https://rocket.modern-web.dev/) - modern web component based static site builder

## Updating Dependencies

Regularly updating dependencies and dev dependencies is very beneficial for long lasting codebases.

-   Run `npm outdated` to list dependencies in need of review.
-   Review release notes and/or change logs for list of dependencies with new updates.
    -   Is there new functionality this codebase can use?
    -   Do changes need to be made to upgrade?
    -   Are any problematic issues associated with these changes?
-   Run `npx browserslist-lint` to update `caniuse-lite` database.
