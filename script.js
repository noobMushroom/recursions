#!/usr/bin/node

function fibs(num) {
    let array = [];
    for (let i = 0; i <= num; i++) {
        if (i == 0 || i == 1) {
            array.push(i)
        } else {
            array.push(array[(i - 1)] + array[(i - 2)])
        }
    }
    return array
}

console.log(fibs(5))

function fibsRec(num) {
    if (num === 1) return [0]
    if (num === 2) return [0, 1]
    return [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
}

console.log(fibsRec(4))

function mergeSort(array) {
    if (array.length<=1) return array;
    else{
        const middle= Math.floor(array.length/2);
        const leftSide=mergeSort(array.slice(0, middle));
        const rightSide = mergeSort(array.slice(middle));
        
        console.log('this is the left array', leftSide)
        console.log('this is the right array', rightSide);
        console.log('this is the main array', array)
       return merge(leftSide, rightSide);
    }
}

function merge(leftSide, rightSide){
    let newArr=[];
    while(leftSide.length && rightSide.length){
        if (leftSide[0]<=rightSide[0]){
            console.log('this is the leftSide[0]', leftSide[0])
            newArr.push(leftSide.shift())
            console.log('this is newArr from the leftSide', newArr)
        }else{
            console.log('this is the rightSide', rightSide[0])
            newArr.push(rightSide.shift())
            console.log('this the newArr from the right side', newArr);
        }
    }
    while(leftSide.length){
        newArr.push(leftSide.shift())
    }
    while (rightSide.length){
        newArr.push(rightSide.shift())
    }
    console.log('this the newArr from main function', newArr)
    return [...newArr,...rightSide, ...leftSide]
}
let array= [1,2,30,4,5,89,90];
console.log(mergeSort(array));
