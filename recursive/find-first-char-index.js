// Find Char Index in a String
const findCharIndex = (str, char) => {
  if (str[0] == char) return 0;
  return findCharIndex(str.slice(1), char) + 1;
};
console.log(findCharIndex('abcdefghijklmnopqrstuvwxyz', 'i'));
