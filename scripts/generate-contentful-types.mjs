import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const loadDotEnv = () => {
  if (!existsSync('.env')) return;

  for (const line of readFileSync('.env', 'utf8').split('\n')) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) continue;

    const separator = trimmed.indexOf('=');

    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();

    if (key && process.env[key] === undefined) process.env[key] = value;
  }
};

loadDotEnv();

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

if (!spaceId || !token) {
  if (existsSync('contentful/index.ts')) {
    console.log('Contentful management token is not set. Using the types already in contentful/index.ts.');
    process.exit(0);
  }

  console.error('Set CONTENTFUL_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN to generate Contentful types.');
  process.exit(1);
}

const result = spawnSync(
  'cf-content-types-generator',
  ['--spaceId', spaceId, '--token', token, '-o', 'contentful/', '-X'],
  { stdio: 'inherit', shell: process.platform === 'win32' }
);

process.exit(result.status ?? 1);
