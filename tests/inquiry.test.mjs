import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createInquiryHref } from '../lib/inquiry.ts';

function readDraft(en, packageName) {
  const uri = new URL(createInquiryHref(en, packageName));
  assert.equal(uri.protocol, 'mailto:');
  assert.equal(uri.pathname, 'hello@cardellino.tech');
  return uri.searchParams;
}

test('German inquiry provides a readable draft with company and project prompts', () => {
  const draft = readDraft(false);
  assert.equal(draft.get('subject'), 'Projektanfrage | CardellinoTech');
  assert.match(draft.get('body'), /^Hallo Dominic,\r\n/);
  assert.match(draft.get('body'), /Unternehmen:/);
  assert.match(draft.get('body'), /Gewünschter Zeitrahmen:/);
  assert.equal(draft.has('cc'), false);
  assert.equal(draft.has('bcc'), false);
});

test('all packages retain their selection in both the subject and message', () => {
  for (const en of [false, true]) {
    for (const name of ['Clarity', 'Foundation', 'Continuity']) {
      const draft = readDraft(en, name);
      assert.match(draft.get('subject'), new RegExp(name));
      assert.match(draft.get('body'), new RegExp(name));
      assert.match(draft.get('body'), en ? /^Hi Dominic,/ : /^Hallo Dominic,/);
    }
  }
});

test('English inquiries use English prompts', () => {
  const draft = readDraft(true);
  assert.equal(draft.get('subject'), 'Project inquiry | CardellinoTech');
  assert.match(draft.get('body'), /Company:/);
  assert.match(draft.get('body'), /Preferred timeframe:/);
});

test('punctuation and unicode cannot split mailto query parameters', () => {
  const name = 'Cloud & CI/CD – Grüße? #1';
  const draft = readDraft(false, name);
  assert.equal(draft.size, 2);
  assert.equal(draft.get('subject'), `Projektanfrage: ${name} | CardellinoTech`);
  assert.ok(draft.get('body').includes(name));
});
