import _ from 'lodash';

const genIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - 2);
const stringify = (node, depth = 1) => {
  if (!_.isObject(node) || node === null) {
    return String(node);
  }
  const lines = Object.entries(node).map(([key, value]) => `${genIndent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${lines.join('\n')}\n  ${genIndent(depth)}}`;
};

const stylish = (resultOfComparison) => {
  const iter = (currentValue, depth = 1) => {
    const data = currentValue.map((obj) => {
      if (obj.status === 'nested') {
        return `${genIndent(depth)}  ${obj.key}: {\n${iter(obj.children, depth + 1)}\n${genIndent(depth)}  }`;
      }
      if (obj.status === 'added') {
        return `${genIndent(depth)}+ ${obj.key}: ${stringify(obj.value, depth)}`;
      }
      if (obj.status === 'deleted') {
        return `${genIndent(depth)}- ${obj.key}: ${stringify(obj.value, depth)}`;
      }
      if (obj.status === 'changed') {
        return `${genIndent(depth)}- ${obj.key}: ${stringify(obj.oldValue, depth)}\n${genIndent(depth)}+ ${obj.key}: ${stringify(obj.newValue, depth)}`;
      }
      if (obj.status === 'unchanged') {
        return `${genIndent(depth)}  ${obj.key}: ${stringify(obj.value, depth)}`;
      }
      return obj;
    });
    return data.join('\n');
  };
  return `{\n${iter(resultOfComparison)}\n}`;
};

export default stylish;
