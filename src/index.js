import fs from 'fs';
import getComparison from './comparison.js';
import path from 'path';
import { cwd } from 'process';

const genDiff = (filepath1, filepath2) => {
  const currentPath = cwd();
  const file1 = JSON.parse(fs.readFileSync(path.resolve(currentPath, filepath1)), 'utf-8');
  const file2 = JSON.parse(fs.readFileSync(path.resolve(currentPath, filepath2)), 'utf-8');
  const result = getComparison(file1, file2);
  return result;
};
export default genDiff;
