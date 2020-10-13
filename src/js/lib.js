/**
 * Recursive implementation of the Euclidean algorithm to find the greatest common divisor.
 * @param {Number} a First argument 
 * @param {Number} b Second argument
 * @return {Number} greatest common divisor of a and b
 */
function ggT(a, b) {

    // check if integer
    if (!Number.isInteger(a)) throw TypeError(`argument a has wrong type: '${typeof a}', should be Integer instead`)
    if (!Number.isInteger(n)) throw TypeError(`argument n has wrong type: '${typeof n}', should be Integer instead`)

    // remove signs
    a = Math.abs(a)
    b = Math.abs(b)

    // check argument order, switch arguments if neccessary
    if (a < b) return ggT(b, a)

    const r = (a % b) // calculate remainder of a and b
    if (r == 0) return b // exit condition
    else return ggT(b, r) // find ggT of b and r
}

/**
 * Function to determine the least common multiple of the absolute values of a and b using their greatest common divisor.
 * @param {Number} a 
 * @param {Number} b 
 * @return {Number} Least common multiple of a and b.
 */
function kgV(a, b) {

    // check if integer
    if (!Number.isInteger(a)) throw TypeError(`argument a has wrong type: '${typeof a}', should be Integer instead`)
    if (!Number.isInteger(n)) throw TypeError(`argument n has wrong type: '${typeof n}', should be Integer instead`)

    return Math.trunc((Math.abs(a) * Math.abs(b)) / ggT(a, b))
}