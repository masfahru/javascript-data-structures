// function to count all chars in an array
const charCounter = (arr) => {
  if (arr.length === 1) return arr[0].length;
  return arr[0].length + charCounter(arr.slice(1));
};
let arr = ['ab', 'c', 'def', 'ghij'];
console.log(charCounter(arr));
