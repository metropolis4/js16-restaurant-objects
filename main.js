// Part 1, Main Constructor

var Fooditem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;

};

Fooditem.prototype.toString = function() {
	// body...
	return 'Name: ' + this.name + '\n' + 'Calories: ' + this.calories + '\n' + 
	'Vegan: ' + this.vegan + '\n' + 'Gluten Free: ' + this.glutenFree + '\n' +
	'Citrus Fee: ' + this.citrusFree;

};



// Part 2, Secondary Constructors
var Drink = function  (name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};

// Declare var to make a string for drink and plate
var basicString = function () {
	return 'Name: ' + this.name + '\n' + 'Description: ' + this.description + '\n' +
	'Price: ' + this.price + '\n' + 'ingredients: ' + this.ingredients; 
};

Drink.prototype.toString = basicString; 

var Plate = function  (name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};

Plate.prototype.toString = basicString;

// Order Class
var Order = function  (plates) {
	this.plates = plates;
};

// Declare a var to make a string for Order and Menu
var basicString2 = function () {
	return 'Plates: ' + this.plates;
} ;

Order.prototype.toString = basicString2;

// Menu Class
var Menu = function  (plates) {
	this.plates = plates;
};

Menu.prototype.toString = basicString2;

// Restaurant Class
var Restaurant = function (name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;

};

Restaurant.prototype.toString = function () {
	return 'Name: ' + this.name + '\n' + 'Description: ' + this.description + '\n' +
	'Menu: ' + this.menu;
};

// Customer Class
var Customer = function (diet) {
	this.diet = diet;
};

Customer.prototype.toString = function () {
	return 'Dietary Preference: ' + this.diet;
};



var burritoPlate = new Fooditem ('Burrito Plate', 2000, false, false, true);
var guacamolePlate = new Fooditem ('Guacamole Plate', 1000, true, true, false);
var margaritaDrink = new Fooditem ('Margarita Drink', 300, true, true, false);

