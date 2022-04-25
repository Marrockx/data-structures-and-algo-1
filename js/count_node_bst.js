class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function left_height(node) {
    let ht = 0;
    while (node) {
        ht++;
        node = node.left;
    }

    // Return the left height obtained
    return ht;
}

// Function to get the right height
// of the binary tree
function right_height(node) {
    let ht = 0;
    while (node) {
        ht++;
        node = node.right;
    }

    // Return the right height obtained
    return ht;
}

// Function to get the count of nodes
// in complete binary tree
function TotalNodes(root) {

    // Base Case
    if (root == null)
        return 0;

    // Find the left height and the
    // right heights
    let lh = left_height(root);
    let rh = right_height(root);

    // If left and right heights are
    // equal return 2^height(1<<height) -1
    if (lh == rh)
        return (1 << lh) - 1;

    // Otherwise, recursive call
    return 1 + TotalNodes(root.left)
        + TotalNodes(root.right);
}

// Helper function to allocate a new node
// with the given data

// Driver Code
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(9);
root.right.right = new Node(8);
root.left.left.left = new Node(6);
root.left.left.right = new Node(7);

// document.write(TotalNodes(root));