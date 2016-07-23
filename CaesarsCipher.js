function rot13(str) { // LBH QVQ VG!
  var arr = str.split("");
  var cipher= [];
  var decipher = [];
    
  for(var i=0; i < arr.length; i++){
    if (arr[i].match(/[A-M]/)){
      cipher.push(arr[i].charCodeAt() + 13);
    } else if (arr[i].match(/[N-Z]/)){
      cipher.push(arr[i].charCodeAt() - 13);
    } else 
    cipher.push(arr[i].charCodeAt());
  }
  
  for(var j=0; j < cipher.length; j++){
    decipher.push(String.fromCharCode(cipher[j]));
  }

  return decipher.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
