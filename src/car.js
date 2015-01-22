function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.state = "off";
    this.previous_owners = [];
    this.current_owner = "Manufacturer";
    this.passengers = [];
}

var myCar = new Car("buick", "Lesabre", 2015, "red");

Car.prototype.start = function(){
	this.state = "on";

};

Car.prototype.off = function(){
	this.state = "off";
	
};




Car.prototype.sale = function(newOwner){
    
    this.previous_owners.push(this.current_owner);
    this.current_owner = newOwner;

};

Car.prototype.paint = function(newColor){
	this.color = newColor;

};

Car.prototype.pick_up = function(passenger){
 if (this.state === "on"){
     this.passengers.push(passenger);
 }
};


//use splice and indexOf >>>store indexOf in a variable
Car.prototype.dropOff = function(passenger){
	var riders = this.passengers.indexOf(passenger);
   if (this.state === "on") {
   	this.passengers.splice(riders, 1);
   }
};



module.exports=Car;