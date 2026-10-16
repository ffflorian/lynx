## How to contribute to Lynx

### Bugs & other issues

#### Found a bug? 🐛

- **Ensure the bug has not already been reported** by searching [GitHub Issues](https://github.com/ffflorian/lynx/issues). If there's already an open issue, feel free to add any extra information you might have about the issue.
- If you're unable to find an open issue matching the problem, [open a new one](https://github.com/ffflorian/lynx/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample**, **screenshot**, or a **test case** demonstrating the expected behavior that is not occurring.

#### Have a patch that fixes an issue?

- Great! Open a new GitHub pull request with the patch.
- All development occurs on the `main` branch and new PRs should be forked from here.
- Install the dependencies with `yarn`. The command `yarn example` can be used to test local changes using the example site.
- The theme's CSS is compiled with Tailwind CSS into `assets/css/compiled/main.css`, which is committed. Run `yarn dev` while working on templates or styles (or `yarn build` once) and commit the compiled file along with your changes.
- Ensure the PR description clearly describes the problem and solution. Include the relevant issue number, if applicable.
- **Before submitting**, check the [coding conventions](#coding-conventions) section below to learn more about coding and commit message expectations.

### New features & enhancements

#### Do you intend to add a new feature, or change an existing one?

- Enhancements are welcome but before implementing any features, be sure to suggest your change by opening a [new issue](https://github.com/ffflorian/lynx/issues/new) about your idea. Enhancements are discussed to ensure they fit with the project's design intent and overall roadmap.
- Before opening an issue, [check to see](https://github.com/ffflorian/lynx/issues) if a similar idea is already being discussed.
- All ideas and suggestions are welcome and will be judged on their merits.
- If the community supports your idea, go ahead and submit a PR with the implemented feature.

### Questions? 🙋‍♀️

- If you have a general question, feel free to open a [new issue](https://github.com/ffflorian/lynx/issues/new).
- Be sure to check if your question has already been answered by searching [existing issues](https://github.com/ffflorian/lynx/issues?q=is%3Aissue).

### Coding conventions

- Indent using 2 spaces (soft tabs).
- Put spaces between list items (ie. `[1, 2, 3]`, not `[1,2,3]`), around operators (ie. `1 + 1`, not `1+1`) and inside go templating tags (ie. `{{< alert >}}`, not `{{<alert>}}`).
- Avoid code reuse in templates by extracting components into partials.
- Layout code in a logical manner that prioritises readibility.
- Add comments when the intent of the code isn't immediately apparent or to break up large blocks of logic.
- Use relative paths to assets without including the preceeding slash but, when referring to a folder, including a trailing slash (ie. `static/img/`, not `/static/img/` or `/static/img`).
- Any static text must be referenced using the `i18n` methods and included in the localisation assets.
- Commit often, preferring incremental changes rather than bundling everything into a single, large commit.

The project includes an oxfmt config (`oxfmt.config.ts`; run `yarn format`) that helps to format code in line with these guidelines.

#### Commit message guidelines

- Use [Conventional Commits](https://www.conventionalcommits.org) (ie. `feat: Add icon`, `fix: Center link icons`). Releases and the changelog are generated from the commit messages with [semantic-release](https://github.com/semantic-release/semantic-release): `fix` triggers a patch release, `feat` a minor release and a `BREAKING CHANGE:` footer a major release. Since Lynx is a Go module, a major release also requires adding the major version suffix to the module path in `go.mod` (ie. `github.com/ffflorian/lynx/v2`).
- Clearly describe the change with a short summary in the first 72 characters.
- Place more detailed explanations in paragraphs below the summary, separated by a blank line.
- Use imperative language (ie. "Fix bug", not "Fixed bug" or "Fixes bug").
- Do not end the summary line with a period.
- Reference any issues fixed using their GitHub issue number.
