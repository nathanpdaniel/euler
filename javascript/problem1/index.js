/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

Answer: 233168
*/

const multiples = (n) => {
  return multiplesOf(3, n) + multiplesOf(5, n) - multiplesOf(15, n);
}

const multiplesOf = (n, m) => {
  const a = parseInt((m-1)/n, 10);
  return (n * a * (a+1))/2;
}

module.exports = multiples;