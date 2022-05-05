// Function to find first duplicate letter in a string
const duplicateLetterCheck = (str) => {
  var hashMap = new Map();

  for (let index = 0; index < str.length; index++) {
    if (hashMap.get(str[index])) {
      return str[index];
    }
    if (index == str.length - 1) {
      return 'Not Found';
    }
    hashMap.set(str[index], true);
  }
};
console.log(duplicateLetterCheck('abccdeff'));
