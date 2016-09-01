
// > typeof sumPrimes(10)
// 'number'
// > sumPrimes(10) 
// 17
// > sumPrimes(977)
// 73156

// sumPrimes :: Int -> Int
function sumPrimes(n){
  var sum = 0;
  var list = genPrimeList(n);

  for (var i=0; i < list.length; i++){
    sum += list[i];
  }
  return sum;
}

// genPrimeList :: Int -> [Int]
// > genPrimeList(5)
// [2,3,5]
function genPrimeList(n){
  var primelist = [];

  for (var i=2; i <= n; i++){
    if (isPrime(i)){
      primelist.push(i);
    }
  }
  return primelist;
}

// genRange :: Int -> [Int]
// > genRange(5)
// [2,3]
// > genRange(11)
// [2,3,4,5,6]
function genRange(n){
  var r = [];

  for (var i = 2; i <= Math.ceil(n/2); i++){
    r.push(i);
  }
  return r;
}

// isPrime :: Int -> Bool
// > isPrime(17)
// true
function isPrime(n){
  var list = genRange(n);

  for (var i=0; i < list.length; i++){
    if (n % list[i] === 0){
      return false;
    }
  }
  return true;
}
