module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
        releaseNotes: {
          issueResolution: {
            template: '{{#if hasIssues}}## **What’s new**\n\n{{/if}}',
          },
          issuePrefixes: ['#', 'JIRA-'],
        },
      },
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'echo "Preparing release ${nextRelease.version}"',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: ['dist/**/*.js', 'dist/**/*.css'],
        labels: ['news', 'bugfix', 'breaking-changes'], // Add your desired labels
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  prepare: [
    {
      path: '@semantic-release/changelog',
      format: 'json',
    },
  ],
  release: {
    analyzeCommits: '@semantic-release/commit-analyzer',
    generateNotes: '@semantic-release/release-notes-generator',
    verifyConditions: [
      '@semantic-release/changelog',
      '@semantic-release/npm',
      '@semantic-release/github',
    ],
  },

};
