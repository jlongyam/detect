# Tag

Example `v1.0.0`

Using VSC is easier to maintain tags

## Manualy

- `git tag v1.0.0`
- or using specific commit
- `git tag v1.0.0 1b2e1d63ff`
- push to remote
- `git push origin : v1.0.0`
- delete tag remote
- `git push --delete origin v1.0.0`

## Versioning

Semantic versioning

`[Major].[Minor].[Patch][optional-[Release-type]]`

- __Patch__ bug fixes - backwards-compatible.
- __Minor__ add functionality - backwards-compatible.
- __Major__ incompatible API changes.