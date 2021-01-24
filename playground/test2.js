let search = function(arr, val) {
    let min = 0
    let max = arr.length - 1
    let steps = 1;

    while (min <= max) {
        let mid = Math.floor((min+max) / 2)
        let curEl = arr[mid]

        if (arr[mid] < val) {
            min = mid + 1
        } else if (arr[mid] > val) {
            max = mid - 1
        } else {
            console.log('Steps: ' + steps)        
            return mid
        }
        steps++
    }
    return -1    
}

let sameFreq = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return -1
    }

    let str1 = num1.toString()
    let str2 = num2.toString()

    let obj1 = {}
    let obj2 = {}
    for (let val of str1) {
        obj1[val] = (obj1[val] || 0) + 1        
    }

    for (let val of str2) {
        obj2[val] = (obj2[val] || 0) + 1
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

// let arr1 = [1,2,3,4,5,6,7,10,21,50,90,100]
// let val = 90
// console.log(search(arr1,val))

let areThereDuplicates = function(...vars) {
    vars = arguments
    if (vars.length === 0) {
        return false
    }

    let comparisonObj = {}
    for (let val of vars) {
        if (comparisonObj[val] === undefined) {
            comparisonObj[val] = 1
        } else {
            return true
        }
    }

    return false
}

//console.log(areThereDuplicates(2,1,3,5,7,9,9,1,2))

let averagePair = function(arr, avg) {
    if (arr.length === 0) return false

    let curAvg = 0
    for (let i = 0; i < arr.length - 1; i++) {
        curAvg = (arr[i] + arr[i+1]) / 2
        if (curAvg === avg) {
            return true
        }
    }

    return false
}

// let arr = [1,3,3,5,6,7,10,12,19]
// let avg = 8
// console.log(averagePair(arr, avg))

let isSubsequence = function(needle, haystack) {
    if (needle === '' || haystack === '') return -1
    if (needle.length > haystack.length) return -1

    let len = needle.length;
    let correct = 0
    // let str1 = Array.from(needle)
    // let str2 = Array.from(haystack)    

    let pt1 = 0
    for (let pt2 = 0; pt2 < haystack.length; pt2++) {        
        if (haystack[pt2] === needle[pt1]) {
            pt1++
            correct++
        }
    }

    if (correct >= len) {
        return true
    }

    return false
}

// let str1 = 'string'
// let str2 = 'sptrring'
// console.log(isSubsequence(str1, str2))

let findLongestSubstring = function(str) {
    if (str === '') return 0

    let values = {}
    let curMax = 0;
    let runningMax = 0
    for (let char of str) {
        if (runningMax > 0 && values[char] !== undefined) {
            if (runningMax > curMax) {
                curMax = runningMax
            }
            runningMax = 0
        } else {
            values[char] = 1
            runningMax++
        }
    }

    return curMax
}

//let str = 'rithmschool'
//let str = 'thecatinthehat'
// let str = 'longestsubstring'
// console.log(findLongestSubstring(str))

