/**
 * Check prime number
 * @param {Number} n
 * @return {Boolean}
 */
function isPrime(n){
  var currDivisor = 3,
    divisorLimit = Math.sqrt(n);

  if(n == 2 || n == 3){
    return true;
  }

  if(n % 2 == 0){
      return false;
  }

  while (currDivisor <= divisorLimit){
    if(n % currDivisor == 0){
      return false;
    }
    currDivisor++;
  }

  return true;
}

var firstNume = 89;
var secondNum = 14;

console.log('is ' + firstNume
            + ' a prime number ? \n'
            + ': '
            + isPrime(firstNume)
            + '\n');

console.log('is ' + secondNum
            + ' a prime number ? \n'
            + ': '
            + isPrime(secondNum)
            + '\n');
