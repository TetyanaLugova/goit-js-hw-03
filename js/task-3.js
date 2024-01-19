"use strict"

function filterArray(numbers, value) {
    const newArray = [];
    for (let i = 0; i < numbers.length; i += 1){
        if (numbers[i] > value) {
             newArray.push(numbers[i]);
        }
    }
    return newArray;
}

