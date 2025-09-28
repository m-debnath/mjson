---
name: Release Request
about: Request a new release of the JSON Formatter application
title: 'Release v[VERSION]: [DESCRIPTION]'
labels: 'release'
assignees: ''
---

## Release Details

### Version Type

- [ ] Major (BREAK: breaking changes)
- [ ] Minor (NEW: new features)
- [ ] Patch (FIX: bug fixes, OPT: optimizations)

### Version Number

**Requested Version:** v[X.Y.Z]

### Changes to Include

#### New Features

- [ ] Feature 1
- [ ] Feature 2

#### Bug Fixes

- [ ] Fix 1
- [ ] Fix 2

#### Optimizations

- [ ] Optimization 1
- [ ] Optimization 2

#### Breaking Changes

- [ ] Breaking change 1
- [ ] Breaking change 2

### Testing Checklist

- [ ] All tests pass locally
- [ ] Security audit passes
- [ ] Build succeeds without errors
- [ ] Manual testing completed
- [ ] Documentation updated

### Release Notes

<!-- Provide a brief description of what's new in this release -->

### Additional Context

<!-- Add any other context about the release request here -->

---

**Note**: Once this issue is created, the release can be triggered by:

1. Ensuring all commits use proper prefixes (BREAK:, NEW:, OPT:, FIX:)
2. Pushing to main branch (automatic release)
3. Using manual release commands: `npm run release`
