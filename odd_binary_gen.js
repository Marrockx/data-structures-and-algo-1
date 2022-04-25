function genBin(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
        if (i % 2 !== 0) {
            arr.push(convertToBinary(i));

        }
    }

    return arr;
}

function convertToBinary(dec) {
    let bin = 0;
    let rem, i = 1; // rem - remainder and i;

    while (dec != 0) {
        rem = dec % 2;
        dec = parseInt(dec / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin
}