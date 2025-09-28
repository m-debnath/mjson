#!/usr/bin/env node

/**
 * Release Status Checker for JSON Formatter
 *
 * This script helps check the current release status and pipeline information
 */

import fs from 'fs';
import { execSync } from 'child_process';

function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  return packageJson.version;
}

function getLatestTag() {
  try {
    return execSync('git describe --tags --abbrev=0', { encoding: 'utf8' }).trim();
  } catch {
    return 'No tags found';
  }
}

function getLatestCommit() {
  try {
    const hash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
    const message = execSync('git log -1 --pretty=%B', { encoding: 'utf8' }).trim();
    return { hash, message: message.split('\n')[0] };
  } catch {
    return { hash: 'unknown', message: 'No commits found' };
  }
}

function checkUncommittedChanges() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    return status.length > 0;
  } catch {
    return false;
  }
}

function getCommitsSinceTag() {
  try {
    const latestTag = getLatestTag();
    if (latestTag === 'No tags found') return [];

    const commits = execSync(`git log ${latestTag}..HEAD --pretty=format:"%h %s"`, { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(line => line.length > 0);

    return commits;
  } catch {
    return [];
  }
}

function analyzeNextVersionType() {
  const commits = getCommitsSinceTag();
  let hasBreaking = false;
  let hasNew = false;
  let hasFixOpt = false;

  for (const commit of commits) {
    if (commit.includes('BREAK:')) hasBreaking = true;
    else if (commit.includes('NEW:')) hasNew = true;
    else if (commit.includes('FIX:') || commit.includes('OPT:')) hasFixOpt = true;
  }

  if (hasBreaking) return 'major';
  if (hasNew) return 'minor';
  if (hasFixOpt) return 'patch';
  return 'none';
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
JSON Formatter Release Status Checker

Usage:
  npm run status           - Show current release status
  npm run status -- --help - Show this help

Information provided:
  - Current version in package.json
  - Latest git tag
  - Latest commit information  
  - Uncommitted changes status
  - Commits since last release
  - Suggested next version type
`);
    return;
  }

  const currentVersion = getCurrentVersion();
  const latestTag = getLatestTag();
  const latestCommit = getLatestCommit();
  const hasUncommitted = checkUncommittedChanges();
  const commitsSinceTag = getCommitsSinceTag();
  const nextVersionType = analyzeNextVersionType();

  console.log('📦 JSON Formatter Release Status\n');

  console.log(`🏷️  Current Version: ${currentVersion}`);
  console.log(`🔖 Latest Git Tag: ${latestTag}`);
  console.log(`📝 Latest Commit: ${latestCommit.hash} - ${latestCommit.message}`);
  console.log(`🔄 Uncommitted Changes: ${hasUncommitted ? '⚠️  Yes' : '✅ No'}`);

  if (commitsSinceTag.length > 0) {
    console.log(`\n📋 Commits Since Last Release (${commitsSinceTag.length}):`);
    commitsSinceTag.slice(0, 10).forEach(commit => {
      console.log(`   ${commit}`);
    });
    if (commitsSinceTag.length > 10) {
      console.log(`   ... and ${commitsSinceTag.length - 10} more commits`);
    }

    console.log(`\n🚀 Suggested Next Release: ${nextVersionType}`);

    if (nextVersionType !== 'none') {
      console.log('\n💡 To create release:');
      console.log(`   npm run release:${nextVersionType}`);
      console.log('   or');
      console.log('   npm run release');
    }
  } else {
    console.log('\n✨ No new commits since last release');
  }

  if (hasUncommitted) {
    console.log('\n⚠️  Warning: You have uncommitted changes. Commit them before creating a release.');
  }

  console.log('\n📖 Release Documentation:');
  console.log('   - README.md (Release Process section)');
  console.log('   - CHANGELOG.md (Version history)');
  console.log('   - .github/workflows/release.yml (Automation)');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
