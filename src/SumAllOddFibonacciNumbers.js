// > typeof sumFibs(1)
// 'number'
// > sumFibs(1000)
// 1785
// > sumFibs(4000000)
// 4613732
// > sumFibs(4)
// 5
// > sumFibs(75024)
// 60696
// > sumFibs(75025)
// 135721

// sumFibs :: Int -> Int
function sumFibs(n) {
  var fibs = [1,1];

  while(fibs[fibs.length -1] < n){
    fibs = genFib(fibs);
  }
  if (fibs[fibs.length -1] > n){
    fibs.pop();
  }
  return sum(filterOdds(fibs)); 
}

//sum :: [Int] -> Int
// > sum([1,1,2,3,5])
// 12
function sum(ns){
  if (ns.length > 0){
    return ns.pop() + sum(ns);
  } else {
    return 0;
  }
}

// genFib :: [Int] -> [Int]
// > genFib([1,1,2])
// [1,1,2,3]
function genFib(ns){
  var num1 = Number(ns[ns.length-1]);
  var num2 = Number(ns[ns.length-2]);

  ns.push(num1 + num2);
  return ns;
}

// filterOdds :: [Int] -> [Int]
// > filterOdds([1,2,3,4,5])
// [1,3,5]
function filterOdds(ns){
  function isOdd(val) {
    return 1 === val%2;
  }
  return ns.filter(isOdd);
}

