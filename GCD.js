/**
 * Return the greatest common divisor of two number
 * Iterative way.
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function findGreatestCommonDivisor(a, b){
  a = Math.abs(a);
  b = Math.abs(b);

//Can use a tmp value too
  if(a < b){
    b = b - a;
    a = a + b;
    b = a - b;
  }

  while(true){
    a %= b;
    if(a === 0){
      return b;
    }

    b %= a;
    if(b === 0){
      return a;
    }
  }

  return null;
}

/**
 * Return the greatest common divisor of two number
 * Recursive way. Take care of out of memory exception
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function findGCD(a, b){
  return b ? findGCD(b, a%b) : Math.abs(a);
}

console.log('greatest common divisor for 21 and 28: '
            + findGreatestCommonDivisor(21, 28)
            + '\n');

console.log('greatest common divisor for 28 and 21: '
            + findGCD(28, 21)
            + '\n');
