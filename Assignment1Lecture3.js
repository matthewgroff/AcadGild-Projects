function car(make,model,year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.listCar = function(){
		alert(this.make);
		alert(this.model);
		alert(this.year);
	}
}

var obOne = new car("ford","mustang","1999");
var obTwo = new car("honda","accord","2000");

obOne.listCar();
obTwo.listCar();