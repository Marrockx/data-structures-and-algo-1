
let btnTwo = document.querySelector('.second-btn')
btnTwo.addEventListener('click', alertTwo)
function alertTwo() {
    alert(`The number that appears twice in the array is: ${duplicateElement([1, 2, 3, 4, 4])}`)
}

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