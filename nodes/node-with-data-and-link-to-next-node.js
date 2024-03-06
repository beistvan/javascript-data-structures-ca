class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node("I am a Node's data");
console.log(firstNode.data);
console.log(firstNode.next);

module.exports = Node;

