import _ from 'lodash';

const formatter = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const plain = (resultOfComparison) => {
  const iter = (currentValue, path) => {
    const data = currentValue.map((obj) => {
      const keyPath = (path === '' ? `${obj.key}` : `${path}.${obj.key}`);

      switch (obj.status) {
        case 'changed':
          return `Property '${keyPath}' was updated. From ${formatter(obj.oldValue)} to ${formatter(obj.newValue)}`;
        case 'nested':
          return iter(obj.children, keyPath);
        case 'added':
          return `Property '${keyPath}' was added with value: ${formatter(obj.value)}`;
        case 'deleted':
          return `Property '${keyPath}' was removed`;
        case 'unchanged':
          return null;
        default:
          throw new Error(`${obj.status} is wrong type of status!`);
      }
    });
    return [...data].filter(Boolean).join('\n');
  };
  return iter(resultOfComparison, '');
};

export default plain;
