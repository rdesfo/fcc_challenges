
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
  while (x < y+1){
      arr.push(x++);
  }
    return arr;
}

function smallestCommons(arr) {
  const x = arr[0];
  const y = arr[1];

  if (x < y) {
    return findCommonMultiple(range(x, y));
  } else {
    return findCommonMultiple(range(y, x));
  }
}

// last one is goint to be greatest number
// FindCommonMultiple :: [Int] -> Int
function findCommonMultiple(r){
  var m = r[r.length-1];
  const n = m;

  function divByM (x){
    return m % x === 0;
  }

  while (r.every(divByM) == false){
    m = m + n;
  }
  return m;
}

console.log(smallestCommons([1,5]));
