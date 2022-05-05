// Missing Alphabet in a String
const missingAlphabet = (str) => {
  var alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  var result = [];
  var hashMap = new Map();

  for (let index = 0; index < str.length; index++) {
    let count = hashMap.get(str[index]) ?? 0;
    hashMap.set(str[index], count + 1);
  }

  for (let index = 0; index < alphabet.length; index++) {
    if (hashMap.get(alphabet[index]) == undefined) result.push(alphabet[index]);
  }
  return result;
};

console.log(missingAlphabet('the quick brown box jumps over a lazy dog'));
