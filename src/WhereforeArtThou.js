
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  // ks :: [keys] -- array of keys from source
  var ks = Object.keys(source);

  
  function allSource(element, index, array){
    for (var i = 0; i < ks.length; i++){
      if (element.hasOwnProperty(ks[i]) === false){
        return false;
      }
      if (element[ks[i]] != source[ks[i]]){
        return false;
      }
    }
    return element;
  }
   
  arr = collection.filter(allSource);
  
  // Only change code above this line
  return arr;
}

// [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
