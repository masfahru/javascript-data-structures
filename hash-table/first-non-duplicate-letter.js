// a function that returns the first non-duplicated character in a string
const firstNonDuplicateLetter = (str) => {
  var hashMap = new Map();
  for (let index = 0; index < str.length; index++) {
    let count = hashMap.get(str[index]) ?? 0;
    hashMap.set(str[index], count + 1);
  }
  for (let arrString of hashMap) {
    if (arrString[1] == 1) {
      return arrString[0];
    }
  }
};
console.log(firstNonDuplicateLetter('minimum'));
