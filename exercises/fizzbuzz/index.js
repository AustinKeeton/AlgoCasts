// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Straightforward version
const fizzBuzz = n => {
    for (let i = 1; i <= n; i++) {
        if (i % (3*5) === 0) {
            console.log('fizzbuzz');
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        }
        else if (i % 3 === 0) {
            console.log('fizz');
        }
        else {
            console.log(i);
        }
    }
}

// Fancy version. >:)
// const divides = (divisor, dividend) => dividend % divisor === 0;

// const range = (start, end) => {
//     if (start === end) { return [start] };
//     return [start, ...range(start + 1, end)];
// }

// function fizzBuzz(n) {
//     range(1, n).forEach(num => {
//         if (divides(3*5, num)) {
//             console.log('fizzbuzz');
//         }
//         else if (divides(5, num)) {
//             console.log('buzz');
//         }
//         else if (divides(3, num)) {
//             console.log('fizz');
//         }
//         else {
//             console.log(num);
//         }
//     });
// }

module.exports = fizzBuzz;
