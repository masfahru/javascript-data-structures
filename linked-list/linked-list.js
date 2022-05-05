class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    let node = new Node(data);
    // to keep track the first node
    this.firstNode = node;
    // helper to get the size of the list
    this.length = 1;
  }

  read(index) {
    let currentIndex = 0;
    if (index < 0 || index >= this.length) {
      throw new Error('index outside of the range');
    }

    let result = this.firstNode;
    while (currentIndex < index) {
      result = result.next;
      currentIndex++;
    }
    return result;
  }

  search(data) {
    let currentIndex = 0;
    let result = this.firstNode;
    do {
      if (result.data === data) {
        break;
      }
      result = result.next;
      currentIndex++;
    } while (result);
    if (result == null) {
      throw new Error("Data can't be found");
    }
    return currentIndex;
  }

  insertAtIndex(index, data) {
    let currentIndex = 0;
    if (index < 0 || index > this.length) {
      throw new Error('index outside of the range');
    }

    let node = new Node(data);
    let currentNode = this.firstNode;
    if (currentNode == null) {
      this.firstNode = node;
      return;
    }

    if (index == 0) {
      node.next = currentNode;
      this.firstNode = node;
      this.length++;
      return;
    }

    while (currentIndex < index) {
      currentIndex++;
      if (currentIndex == index) {
        node.next = currentNode.next;
        currentNode.next = node;
      }
      currentNode = currentNode.next;
    }
  }

  printList() {
    let currentNode = this.firstNode;
    if (currentNode == null) {
      console.log('List is Empty');
      return;
    }
    do {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    } while (currentNode);
  }
}
console.time('start');
let linkedList = new LinkedList('a');
linkedList.insertAtIndex(0, 'b');
linkedList.insertAtIndex(2, 'c');
linkedList.printList();
console.timeEnd('start');
