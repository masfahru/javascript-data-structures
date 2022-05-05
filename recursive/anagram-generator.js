// function to collect all anagram of a string
const anagram = (str) => {
  let results = [];
  if (str.length === 1) return str;
  for (let i = 0; i < str.length; i++) {
    let s = str[0];
    let temp = anagram(str.slice(1));
    for (let j = 0; j < temp.length; j++) {
      results.push(s + temp[j]);
    }
    str = str.substr(1, str.length - 1) + s;
  }
  return results;
};
console.log(anagram('fahru'));
