class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;

    }

}

function balancedNodeLength(node) {
    let leftNode = node;
    let rightNode = node;
    let length = 0;
    while (leftNode && rightNode) {
        leftNode = leftNode.left;
        rightNode = rightNode.right;
        length++;
    }
    return length;
}

function countNodes(root) {

    if (root == null) {
        return 0;
    }

    return 1 + balancedNodeLength(root);

}


var tree = new BST();

tree.root = new Node(5);
tree.root.left = new Node(4);
tree.root.right = new Node(7);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(8);
tree.root.left.left.left = new Node(2);
tree.root.left.left.right = new Node(6);
tree.root.right.right.left = new Node(6);
tree.root.right.right.right = new Node(9);
