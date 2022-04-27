let btnFive = document.querySelector('.fifth-btn')

btnFive.addEventListener('click', alertFive)

function alertFive() {
    alert(`The ascending order sorting of array - [9, -3, 5, 2, 6, 8, -6, 1, 3] - using quick sort is: ${quickSort([9, -3, 5, 2, 6, 8, -6, 1, 3])}`)
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {

        let pivotPos = pivot(arr, left, right);

        quickSort(arr, left, pivotPos - 1);
        quickSort(arr, pivotPos + 1, right);

    }
    return arr;
}

// sort the function
// quickSort([9, -3, 5, 2, 6, 8, -6, 1, 3]);

function pivot(arr, begin = 0, end = arr.length - 1) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    var pivot = arr[begin];
    var swapPos = begin;

    for (var i = begin + 1; i <= arr.length; i++) {
        if (pivot > arr[i]) {
            swapPos++;
            swap(arr, swapPos, i);
        }
    }

    swap(arr, begin, swapPos);
    console.log(arr)
    return swapPos;
}


