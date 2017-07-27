
// > smallestCommons([1,5])
// 60
// > smallestCommons([5,1])
// 60
// > smallestCommons([1,13])
// 360360
// > smallestCommons([23,18])
// 6056820

function range(x,y){
  var arr = [];
  while (x < y){
      arr.push(x++);
  }
    return arr;
}

function smallestCommons(arr) {
  return range(arr[0], arr[1]);
}

console.log(smallestCommons([1,5]));
