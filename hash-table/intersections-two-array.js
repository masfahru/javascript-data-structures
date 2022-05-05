// Intersection Function
const intersection = (arr1, arr2) => {
  var [longest, shortest, result] = [[], [], []];
  var hashMap = new Map();

  if (arr1.length > arr2.length) {
    [longest, shortest] = [arr1, arr2];
  } else {
    [longest, shortest] = [arr2, arr1];
  }

  longest.forEach((elem) => {
    hashMap.set(elem, true);
  });

  shortest.forEach((elem) => {
    if (hashMap.get(elem)) result.push(elem);
  });
  return result;
};
console.log(intersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 9]));
