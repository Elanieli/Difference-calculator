import _ from 'lodash';

const getComparison = (file1, file2) => {
    const keys1 = Object.keys(file1);
    const keys2 = Object.keys(file2);
    const keys = _.union(keys1, keys2);
    const sortedKeys = _.sortBy(keys);

    const result = sortedKeys.reduce((acc, key) => {
        if (!Object.hasOwn(file1, key)) {
            acc.push(` + ${key}: ${file2[key]} \n`);
        } else if(!Object.hasOwn(file2, key)) {
            acc.push(` - ${key}: ${file1[key]} \n`);
        } else if(file1[key] !== file2[key]) {
            acc.push(` - ${key}: ${file1[key]} \n + ${key}: ${file2[key]} \n`);
        } else {
            acc.push(`   ${key}: ${file1[key]} \n`);
        }
        return acc;
    }, []);

    const result1 = `{\n${result.join('')}\n}`;
    return result1;
};

export default getComparison;