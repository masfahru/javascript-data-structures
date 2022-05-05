function bubbleSort(arr) {
  let maxIndex = arr.length - 1;
  while (maxIndex > 0) {
    for (let i = 0; i < maxIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    maxIndex--;
  }
}
let arr = [5, 4, 1, 2, 3, 0];
bubbleSort(arr);
console.log(arr);
