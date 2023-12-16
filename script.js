/*
The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {

  if (num === 1) {
    return 1;
  }
  let array = [0, 1];
  let sum = 1;

  for (let i = 2; i <= num; i++) {
    
    array[i] = array[i - 2] + array[i - 1];
    
    if (array[i] <= num & array[i]%2 !== 0) {
      sum += array[i]
    }
  }
  
  return sum;
}

console.log(sumFibs(75025)); //135721
