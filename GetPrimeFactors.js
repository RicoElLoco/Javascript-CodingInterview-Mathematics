/**
 * Return a list of prime factor of a number.
 * @param {Number} n
 * @return {Number} factorsArray
 */
function getPrimeFactor(n){
  var factorsArray = [],
    currDivisor = 2;

  while( n > 2){
    if(n % currDivisor == 0){
      factorsArray.push(currDivisor);
      n = n/ currDivisor;
    } else {
      currDivisor++;
    }
  }

  return factorsArray;
}

var num = 69;

console.log('Prime factors list for ' + num + ' : ');
console.log(getPrimeFactor(num).join(', ') + '.');
