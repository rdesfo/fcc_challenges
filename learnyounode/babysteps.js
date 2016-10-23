
var sum = 0;
var a = process.argv;

for (i =2; i < a.length; i++){
  sum = sum + Number(a[i]);
}

console.log(sum)
