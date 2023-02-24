import _ from 'lodash';

const getComparison = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        status: 'nested',
        key,
        children: getComparison(value1, value2),
      };
    }
    if (!_.has(file2, key)) {
      return {
        status: 'deleted',
        key,
        value: value1,
      };
    }
    if (!_.has(file1, key)) {
      return {
        status: 'added',
        key,
        value: value2,
      };
    }
    if (value1 !== value2) {
      return {
        status: 'changed',
        key,
        oldValue: value1,
        newValue: value2,
      };
    }
    return {
      status: 'unchanged',
      key,
      value: value1,
    };
  });
  return result;
};

export default getComparison;
