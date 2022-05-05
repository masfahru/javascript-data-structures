// Print all numbers inside the array using recursive function
const printAllNumbers = (arr) => {
  let results = [];
  if (!Array.isArray(arr)) {
    if (!isNaN(arr)) {
      return [arr];
    }
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = printAllNumbers(arr[i]);
    for (let j = 0; j < temp.length; j++) {
      results.push(temp[j]);
    }
  }
  return results;
};
var arr = [
  1,
  2,
  3,
  'Empat',
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [
    15,
    16,
    17,
    18,
    19,
    [20, 21, 22, [23, 24, 25, [26, 27, 28, 29]], 30, 31],
    32,
  ],
  33,
];
console.time('start');
console.log(printAllNumbers(arr));
console.timeEnd('start');
