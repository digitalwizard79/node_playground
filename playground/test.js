let charCount = function(str) {
    let result = {}
    for(let letter of str) {
        letter = letter.toLowerCase()
        if (/[a-z0-9]/.test(letter)) {
            result[letter] = ++result[letter] || 1
            // if (result[letter] === undefined) {
            //     result[letter] = 1
            // } else {
            //     result[letter]++
            // }
        }
    }

    return result;
}

let checkFrequency = function(str1, str2) {
    if (str1.length !== str2.length) 
        return false

    let fCounter1 = {};
    let fCounter2 = {};
    for (let val of str1) {
        fCounter1[val] = (fCounter1[val] || 0) + 1
    }

    for (let val of str2) {
        fCounter2[val] = (fCounter2[val] || 0) + 1
    }

    console.log(fCounter1)
    console.log(fCounter2)
    for (let key in fCounter1) {
        if (!(fCounter2[key] === fCounter1[key])) {
            return false
        }
    }

    return true;
}

let sumZero = function(arr) {
    if (arr.length < 2) {
        return undefined
    }

    let p1 = 0;
    let p2 = arr.length - 1
    while(p1 < p2) {
        let num1 = arr[p1]
        let num2 = arr[p2]
        let total = sum(num1, num2)        
        if (total === 0) {
            return [num1, num2]
        } else if (total > 0) {
            p2--
        } else {
            p1++
        }        
    }

    return undefined;
}

let sum = function(a, b) {
    return a + b;
}

let countUniqueValues = function(arr1) {
    // define the pointers
    // loop through and create an object that has the values
    // return the length of the object

    let values = {};
    for (let val of arr1) {
        if (values[val] === undefined) {
            values[val] = true;
        }
    }

    return Object.keys(values).length;
}

// let maxSubarraySum = function(arr1, num1) {
//     if (arr1.length === 0) return null
    
//     let maxSum = 0        
//     let runningSum = 0    
//     for (i = 0; i < arr1.length - num + 1; i++) {
//         let j = i + 1        
//         runningSum = num1 + num2
// console.log('Running Sum: ' + runningSum)            
//         if (runningSum > maxSum) {
//             maxSum = runningSum
//             console.log('Max Sum: ' + maxSum)
//         }
//     }    

//     return maxSum
// }

let maxSubarraySum = function(arr1, num1) {
    let maxSum = 0
    let tempSum = 0
    if (arr1.length < num) return null
    for (let i = 0; i < num1; i++) {
        maxSum += arr1[i]
    }
    tempSum = maxSum
    for (let j = num; j < arr1.length; j++) {
        tempSum = tempSum - arr1[j - num] + arr1[j]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

let arr1 = [1,2,5,2,8,1,5]
let num = 5
console.log(maxSubarraySum(arr1, num))

// let word = "Were! testing"
// console.log(charCount(word));

// let str1 = "aaz";
// let str2 = "zza";
// console.log(checkFrequency(str1,str2))

// let arr1 = [-3,-2,-1,1,5,7]
// console.log(sumZero(arr1))
// console.log(countUniqueValues(arr1))