

var myArg = process.argv;

// > getSum([1,2,3])
// 6
function getSum(a){
  var sum = 0;

  for (i =2; i < a.length; i++){
    sum = sum + Number(a[i]);
  }
  console.log(sum)
}

getSum(myArg)
