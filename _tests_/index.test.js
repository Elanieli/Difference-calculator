import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

test('genDiff', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const getPath = (filename) => path.join(__dirname, '..', '_fixtures_', filename);
  const readFile = (filename) => fs.readFileSync(getPath(filename), 'utf-8').trim();

  const resultJson = readFile('result/result_json.txt');

  const file1 = getPath('file1.json');
  const file2 = getPath('file2.json');

  expect(genDiff(file1, file2)).toEqual(resultJson);
});
