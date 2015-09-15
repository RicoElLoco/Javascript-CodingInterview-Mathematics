/**
 * Simple methode which draw a circle into console.
 * @param {Number} r
 * @return {Number} undefined
 */

 function drawCircle(r){
   var n = 2*r+1,
      arr = [],
      x,
      y;

   for(var i = 0; i < n; i++){
     for(var j = 0; j < n; j++){
       x = i - r;
       y = j - r;
       if (x * x + y * y <= r * r + 1){
         arr.push('O');
       } else {
         arr.push(' ');
       }
       arr.push(' ');
     }
     arr.push('\n');
   }

   console.log(arr.join(''));
 }

drawCircle(8);
