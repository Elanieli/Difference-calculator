import fs from 'fs';
import path from 'path';
import { cwd } from 'process';
import getComparison from './comparison.js';
import parse from './parsers.js';

const currentPath = cwd();
const getFormat = (filename) => path.extname(filename).slice(1);
const getData = (filename) => fs.readFileSync(path.resolve(currentPath, filename), 'utf-8');

const genDiff = (filepath1, filepath2) => {
  const file1 = parse(getData(filepath1), getFormat(filepath1));
  const file2 = parse(getData(filepath2), getFormat(filepath2));
  const result = getComparison(file1, file2);
  return result;
};
export default genDiff;
