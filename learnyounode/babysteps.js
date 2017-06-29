

var allArg = process.argv;
var myArg = allArg.slice(2);

// > getSum([1,2,3])
// 6
function getSum(a){
  var sum = 0;
  for (i=0; i < a.length; i++){
    sum = sum + Number(a[i]);
  }
  return sum;
}

console.log(getSum(myArg));
