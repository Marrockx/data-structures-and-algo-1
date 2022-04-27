function diffLevelsSum() {
    return sum1 - sum2;
}


let sum1 = 0;
let sum2 = 0;

function sumOfFirstTwoLevels(arr, n) {
    let sumFirst = [];
    for (let i = 0; i < n; i++) {
        sumFirst.push(arr[i]);
    }

    for (let i = 0; i < sumFirst.length; i++) {
        sum1 += sumFirst[i]
    }

    return (sum1);

}

function sumOfLastTwoLevels(arr, n) {
    let sumSecond = [];
    for (let i = 2; i < n; i++) {
        sumSecond.push(arr[i]);

    }
    for (let i = 0; i < sumSecond.length; i++) {
        sum2 += sumSecond[i]
    }

    return (sum2);

}

function getHeight(root) {
    if (root.left == null && root.right == null) {
        return 0;
    }

    let left = 0;
    if (root.left != null) {
        left = getHeight(root.left);
    }

    let right = 0;
    if (root.right != null) {
        right = getHeight(root.right);
    }

    return (Math.max(left, right) + 1);
}

function calcLevelSum(node, level, sum) {
    if (node == null) {
        return;
    }
    sum[level] += node.value;

    calcLevelSum(node.left, level + 1, sum);
    calcLevelSum(node.right, level + 1, sum);

    return sum;

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


let levels = getHeight(tree.root) + 1;

let sumOfLevels = new Array(2);


for (let i = 0; i < levels; i++) {
    sumOfLevels[i] = 0;

}

calcLevelSum(tree.root, 0, sumOfLevels);


sumOfFirstTwoLevels(sumOfLevels, 2);
sumOfLastTwoLevels(sumOfLevels, levels);

