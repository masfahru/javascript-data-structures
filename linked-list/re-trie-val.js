class TrieNode {
  constructor() {
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  search(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (currentNode.children.get(char)) {
        currentNode = currentNode.children.get(char);
      } else {
        return null;
      }
    }
    return currentNode;
  }

  contains(word) {
    let lastNode = this.search(word);
    if (lastNode != null) {
      if (lastNode.children.has('*')) return true;
    }
    return false;
  }

  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (currentNode.children.get(char)) {
        currentNode = currentNode.children.get(char);
      } else {
        let newNode = new TrieNode();
        currentNode.children.set(char, newNode);
        currentNode = newNode;
      }
    }
    currentNode.children.set('*', null);
  }

  remove(word) {
    const isWordExist = this.search(word);
    if (!isWordExist) return false;
    return this.removeLetterNode(word, 0, this.root);
  }

  removeLetterNode(word, index, node) {
    if (!word[index]) {
      return node;
    }
    const currentNode = this.removeLetterNode(
      word,
      index + 1,
      node.children.get(word[index])
    );
    if (currentNode.children.size == 1) {
      currentNode.children.clear();
    } else {
      currentNode.children.delete('*');
    }
    return currentNode;
  }

  collectAllWords(node = null, word = '', words = []) {
    const currentNode = node ?? this.root;
    for (const [key, childNode] of currentNode.children) {
      if (key == '*') {
        if (word.length != 0) words.push(word);
      } else {
        this.collectAllWords(childNode, word + key, words);
      }
    }
    return words;
  }

  autoComplete(prefix) {
    const currentNode = this.search(prefix);
    if (!currentNode) return false;
    return this.collectAllWords(currentNode);
  }

  autoCorrect(word) {
    let letterFound = '';
    let currentNode = this.root;
    for (const char of word) {
      if (currentNode.children.get(char)) {
        letterFound = letterFound.concat(char);
        currentNode = currentNode.children.get(char);
      } else {
        return letterFound + this.collectAllWords(currentNode)[0];
      }
    }
    return letterFound;
  }
}

// instantiate our trie
var trie = new Trie();

// insert few values
trie.insert('cat');
trie.insert('catnap');
trie.insert('catnip');
trie.insert('catboy');

// check methods
console.log(trie.contains('cat')); // true
console.log(trie.contains('catnar')); // false
console.log(trie.collectAllWords());
trie.remove('cat');
console.log(trie.contains('cat')); // false
console.log(trie.collectAllWords());
trie.insert('cat');
console.log(trie.contains('cat')); // true
console.log(trie.collectAllWords());
console.log(trie.autoComplete('cat'));
console.log(trie.autoCorrect('catnar'));
