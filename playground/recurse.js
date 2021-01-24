let power = function(base, exp) {
    if (exp <= 0) return 1
    return base * power(base, exp - 1)
}

//console.log(power(2,4))

let factorial = function(num) {
    if (num === 0) return 1
    return num * factorial(num-1)
}

//console.log(factorial(7))

let productOfArray = function(arr) {
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}

//console.log(productOfArray([1,2,3,10]))

let recursiveRange = function(num) {
    if (num === 0) return 0
    return num + recursiveRange(num-1)
}

//console.log(recursiveRange(10))

let fib = function(num) {
    if (num <= 0) return 0
    if (num == 1) return 1
    return fib(num-1) + fib(num-2)
}

//console.log(fib(35))

let reverse = function(str) {
    let result = ''

    function helper(str) {
        if (str.length === 0) return ''
        result += reverse()
    }

    helper(str)
}