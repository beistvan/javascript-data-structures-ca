class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }
}

const firstNode = new Node('I am an instance of a Node!');
firstNode.setNextNode('This is a string, not a Node.'); // throws error

//const seondNode = new Node('I am an instance of a second Node!');
//firstNode.setNextNode(seondNode);
//console.log(seondNode);

module.exports = Node;

