1. Load new icons font.
2. Load new SVG icons.
3. Update `package.json` file with new version.
4. Run `git tag v{version-number}` replacing `{version-number}` with the new version, for example `2.6.0`.
5. Push the new tag running `git push --tags`.
6. Run `npm publish` to release new package.
