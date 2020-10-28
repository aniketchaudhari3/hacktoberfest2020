function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};

let randomArray = [23, 55, 1, 8, 18, 2, 5, 6, 0, -1];

console.log(bubbleSort(randomArray));