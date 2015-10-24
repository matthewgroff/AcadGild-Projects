function outerFunc(param){
	
  var innerFunc = function (input){
     
    var multiplication = input*param;
     alert('Product of input and param is '+multiplication);

  }
  return innerFunc;
}
var closureFunc = outerFunc(12);
closureFunc(4);
