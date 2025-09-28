#!/usr/bin/env node

/**
 * Release Helper Script for JSON Formatter
 *
 * This script helps create releases by analyzing commit messages
 * and determining the appropriate version bump based on prefixes:
 * - BREAK: Major version increment (breaking changes)
 * - NEW: Minor version increment (new features)
 * - OPT: Patch version increment (optimizations)
 * - FIX: Patch version increment (bug fixes)
 */

import fs from 'fs';
import { execSync } from 'child_process';

const COMMIT_PREFIXES = {
  'BREAK:': 'major',
  'NEW:': 'minor',
  'OPT:': 'patch',
  'FIX:': 'patch',
};

function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  return packageJson.version;
}

function getLatestCommitMessage() {
  try {
    return execSync('git log -1 --pretty=%B', { encoding: 'utf8' }).trim();
  } catch (error) {
    console.error('Error getting commit message:', error.message);
    return '';
  }
}

function determineVersionType(commitMessage) {
  for (const [prefix, versionType] of Object.entries(COMMIT_PREFIXES)) {
    if (commitMessage.startsWith(prefix)) {
      return versionType;
    }
  }
  return null;
}

function calculateNewVersion(currentVersion, versionType) {
  const [major, minor, patch] = currentVersion.split('.').map(Number);

  switch (versionType) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      return currentVersion;
  }
}

function updatePackageVersion(newVersion) {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  packageJson.version = newVersion;
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');
}

function createGitTag(version) {
  try {
    execSync(`git tag -a "v${version}" -m "Release v${version}"`, { stdio: 'inherit' });
    console.log(`✅ Created tag v${version}`);
  } catch (error) {
    console.error('Error creating git tag:', error.message);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
JSON Formatter Release Helper

Usage:
  npm run release              - Analyze latest commit and create release
  npm run release -- --force  - Create release even without valid prefix
  npm run release -- major    - Force major version bump
  npm run release -- minor    - Force minor version bump  
  npm run release -- patch    - Force patch version bump

Commit Prefixes:
  BREAK: - Major version increment (breaking changes)
  NEW:   - Minor version increment (new features)
  OPT:   - Patch version increment (optimizations)
  FIX:   - Patch version increment (bug fixes)

Examples:
  git commit -m "NEW: Add multi-language support"
  git commit -m "FIX: Resolve JSON parsing edge case"
  git commit -m "BREAK: Change API structure"
  git commit -m "OPT: Improve performance of validation"
`);
    return;
  }

  const currentVersion = getCurrentVersion();
  const commitMessage = getLatestCommitMessage();

  console.log(`📦 Current version: ${currentVersion}`);
  console.log(`📝 Latest commit: ${commitMessage}`);

  let versionType;

  // Check for manual version type override
  if (args.includes('major') || args.includes('minor') || args.includes('patch')) {
    versionType = args.find(arg => ['major', 'minor', 'patch'].includes(arg));
    console.log(`🔧 Manual version type: ${versionType}`);
  } else {
    versionType = determineVersionType(commitMessage);
  }

  if (!versionType && !args.includes('--force')) {
    console.log(`❌ No valid commit prefix found. Use one of: ${Object.keys(COMMIT_PREFIXES).join(', ')}`);
    console.log(`   Or use --force to create a patch release anyway`);
    throw new Error('No valid commit prefix found');
  }

  if (!versionType && args.includes('--force')) {
    versionType = 'patch';
    console.log(`🔨 Forcing patch release`);
  }

  const newVersion = calculateNewVersion(currentVersion, versionType);

  console.log(`🚀 Creating ${versionType} release: ${currentVersion} → ${newVersion}`);

  // Update package.json
  updatePackageVersion(newVersion);
  console.log(`✅ Updated package.json to v${newVersion}`);

  // Stage the package.json change
  try {
    execSync('git add package.json', { stdio: 'inherit' });
    execSync(`git commit -m "chore: bump version to v${newVersion}"`, { stdio: 'inherit' });
    console.log(`✅ Committed version bump`);
  } catch {
    console.log(`ℹ️  Version already committed or no changes to commit`);
  }

  // Create git tag
  createGitTag(newVersion);

  console.log(`
🎉 Release v${newVersion} created successfully!

Next steps:
1. Push the changes: git push origin main
2. Push the tag: git push origin v${newVersion}
3. The GitHub Actions release workflow will handle the rest automatically

Or push everything at once:
git push origin main --tags
`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
