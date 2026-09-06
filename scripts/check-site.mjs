import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const directory = resolve('dist/client');
const html = readFileSync(resolve(directory, 'index.html'), 'utf8');
assert.equal(
  (html.match(/<h1\b/g) ?? []).length,
  1,
  'One descriptive page heading',
);
assert.match(html, /Farhan — Flutter Developer/, 'Portfolio metadata');
assert.doesNotMatch(
  html,
  /Your site is taking shape|Untitled site|__next_error__/,
  'No starter or error page',
);
const ids = new Set(
  [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
);
const references = [
  ...html.matchAll(/<(?:a|img|script|link)\b[^>]*\b(?:src|href)="([^"]+)"/g),
].map((match) => match[1]);
for (const reference of references) {
  if (reference.startsWith('#'))
    assert(ids.has(reference.slice(1)), `Anchor exists: ${reference}`);
  if (reference.startsWith('/') && !reference.startsWith('//')) {
    const pathname = decodeURIComponent(reference.split(/[?#]/)[0]);
    assert(
      existsSync(resolve(directory, '.' + pathname)),
      `Static asset exists: ${pathname}`,
    );
  }
}
const work = html.match(/<section\b[^>]*id="work"[\s\S]*?<\/section>/)?.[0];
assert(work, 'Selected work section exists');
assert.match(work, /AI Limit Status/, 'Personal project is featured');
assert.doesNotMatch(
  work,
  /One Ummah/,
  'Employer project stays out of personal work',
);
assert.match(
  html,
  /mailto:sadiquefarhan038@gmail.com/,
  'Working email contact',
);
assert.match(html, /farhan-mahi-cv.pdf/, 'CV download exists');
console.log(
  `Portfolio verified: metadata, personal-work scope, anchors and ${references.length} asset/link references.`,
);
