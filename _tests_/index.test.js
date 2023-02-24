import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '_fixtures_', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

const resultStylish = readFile('result/result_stylish.txt');
const resultJson = readFile('result/result_json.txt');

test.each(['json', 'yml'])('genDiff(%#)', (format) => {
  const file1 = getFixturePath(`file1.${format}`);
  const file2 = getFixturePath(`file2.${format}`);

  expect(genDiff(file1, file2)).toEqual(resultStylish);
  expect(genDiff(file1, file2, 'stylish')).toEqual(resultStylish);
  expect(genDiff(file1, file2, 'json')).toEqual(resultJson);
});
