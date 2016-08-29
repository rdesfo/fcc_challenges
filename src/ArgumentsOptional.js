
// > addTogether(2,3)
// 5
// > addTogether(2)(3)
// 5
function addTogether(arg) {
  if (arguments.length == 2){
    if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])){
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  } else {
    args = arguments[0];
    if (Number.isInteger(arguments[0])) {
      return function(y){
        if (Number.isInteger(arguments[0])) {
          return args + y;
	} else {
          return undefined;
	}
      };
    } else {
      return undefined;
    }
  }
}
