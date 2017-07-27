var re = /\d{3}[-|\s]\d{3}[-|\s]\d{4}/;
var re1 = /^1[-|\s]\d{3}[-|\s]\d{3}[-|\s]\d{4}/;
var reb = /\(\d{3}[\)\s|\)]\d{3}[-|\s]\d{4}/;
var reb1 = /^1[\(]\d{3}[\)]\d{3}[-|\s]\d{4}/;
var rec = /^1\s\(\d{3}\)\s\d{3}-\d{4}/;
var digits = /^\d{10}/;

function telephoneCheck(str) {
  // Good luck!
  if ( str == str.match( re ) ){
    return true;
  } else if ( str == str.match( re1 ) ){
    return true;
  } else if ( str == str.match( digits ) ){
    return true;
  } else if ( str == str.match( reb ) ){
    return true;
  } else if ( str == str.match( rec ) ){
    return true;
  } else if ( str == str.match( reb1 ) ){
    return true;
  } else {
    return false;    
  }  
}

telephoneCheck("555-555-5555");
