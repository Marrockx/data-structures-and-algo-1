function duplicateElement(arr) {
    const obj = {};
    for (let char of arr) {
        obj[char] = (obj[char] || 0) + 1
    }
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === 2) {
            return arr[i];
        }
    }

    return -1;
}