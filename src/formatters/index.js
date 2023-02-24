import formatter from './stylish.js';

const format = (data, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.stringify(data);
    case 'stylish':
      return formatter(data);
    default:
      throw new Error(`${formatName} is wrong format!`);
  }
};
export default format;
