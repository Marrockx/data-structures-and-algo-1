class Queue {

    constructor() {
        this.items = [];
        this.front = null;
        this.back = null;

    }

    isEmpty() {
        return this.items.length == 0;
    }

    getFirst() {
        if (this.items.length != 0) {
            return this.items[0];
        } else
            return null;
    }

    size() {
        return this.items.length;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length == 0) {
            return null;
        } else {
            return this.items.shift();
        }
    }
}

function genBin(n) {
    let result = [];
    let myQueue = new Queue();
    var s1, s2;
    myQueue.enqueue("1");
    for (var i = 0; i < n; i++) {

        result.push(myQueue.dequeue());
        s1 = result[i] + "0";
        s2 = result[i] + "1";

        myQueue.enqueue(s1);
        myQueue.enqueue(s2);

    }

    return result;
}

function oddBinNum(arr) {
    let store = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            store.push(arr[i])

        }
    }
    return store

}

