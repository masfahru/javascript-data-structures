// function to filter only even number
const filterEvenNumber = (arr) => {
  if (arr.length === 0) return [];
  if (arr[0] % 2 == 0) {
    return [arr[0], ...filterEvenNumber(arr.slice(1))];
  } else {
    return filterEvenNumber(arr.slice(1));
  }
};
console.log(filterEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
