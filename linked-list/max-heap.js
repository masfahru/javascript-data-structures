// MaxHeap, the root is the biggest value
class MaxHeap {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  rootNode = () => this.items[0];
  lastNode = () => this.items[this.length - 1];
  leftChildIndex = (index) => index * 2 + 1;
  rightChildIndex = (index) => index * 2 + 2;
  getParentIndex = (index) => Math.floor((index - 1) / 2);

  push(item) {
    // push item to MaxHeap, first it's inserted to the last node

    // new item inserted as the last node
    this.items.push(item);
    this.length++;

    // track new item's index
    let itemIndex = this.length - 1;

    // Trickle Up Algorithm
    let parentIndex = this.getParentIndex(itemIndex);
    // while the new node is greater than its parent node
    while (itemIndex > 0 && this.items[itemIndex] > this.items[parentIndex]) {
      // swap new node with its parent
      [this.items[itemIndex], this.items[parentIndex]] = [
        this.items[parentIndex],
        this.items[itemIndex],
      ];
      // update the index
      itemIndex = parentIndex;
      parentIndex = this.getParentIndex(itemIndex);
    }
  }

  pop() {
    // Pop item from Max Heap, deleting the root (first) Node

    // the last item become the first
    this.items[0] = this.items.pop();

    let currentIndex = 0;
    let largerChildIndex = this.getLargerChildIndex(currentIndex);
    // recronstruct the heap
    while (this.checkIfChildGreaterThanParent(currentIndex)) {
      [this.items[currentIndex], this.items[largerChildIndex]] = [
        this.items[largerChildIndex],
        this.items[currentIndex],
      ];
      currentIndex = largerChildIndex;
      largerChildIndex = this.getLargerChildIndex(currentIndex);
    }
  }

  checkIfChildGreaterThanParent(index) {
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);
    return (
      (this.items[leftChild] && this.items[leftChild] > this.items[index]) ||
      (this.items[rightChild] && this.items[rightChild] > this.items[index])
    );
  }

  getLargerChildIndex(index) {
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);
    // if there is no right index
    if (rightChild < this.length) {
      if (this.items[rightChild] > this.items[leftChild]) {
        return rightChild;
      }
    }
    return leftChild;
  }
}

let newHeap = new MaxHeap();
newHeap.push(100);
newHeap.push(88);
newHeap.push(87);
newHeap.push(16);
newHeap.push(25);
newHeap.push(86);
newHeap.push(8);
newHeap.push(12);
newHeap.push(50);
newHeap.push(2);
newHeap.push(15);
newHeap.push(3);
console.log(newHeap.items);
newHeap.pop();
console.log(newHeap.items);
