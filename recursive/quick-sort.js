// QuickSort (and Partitioning)
const partition = (arr, leftPointer, rightPointer) => {
  let pivot = arr[Math.floor((leftPointer + rightPointer) / 2)];

  while (leftPointer <= rightPointer) {
    while (arr[leftPointer] < pivot) {
      leftPointer++;
    }
    while (arr[rightPointer] > pivot) {
      rightPointer--;
    }
    if (leftPointer <= rightPointer) {
      [arr[leftPointer], arr[rightPointer]] = [
        arr[rightPointer],
        arr[leftPointer],
      ];
      leftPointer++;
      rightPointer--;
    }
  }
  return leftPointer;
};

const quickSort = (arr, leftPointer, rightPointer) => {
  let index;
  if (arr.length > 1) {
    //index returned from partition
    // arr also modified after calling partition
    index = partition(arr, leftPointer, rightPointer);
    if (leftPointer < index - 1) {
      //more elements on the left side of the pivot
      quickSort(arr, leftPointer, index - 1);
    }
    if (index < rightPointer) {
      //more elements on the right side of the pivot
      quickSort(arr, index, rightPointer);
    }
  }
};
let arr = [5, 6, 4, 8, 3, 9];
// first call to quick sort
quickSort(arr, 0, arr.length - 1);
console.log(arr); //prints [2,3,5,6,7,9]
