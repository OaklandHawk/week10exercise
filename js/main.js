//#3
var litObjDexi = {
	breed: 'Pitbull',
	weight: 50,
	age: 8,
	image: 'https://i.pinimg.com/736x/91/1e/ba/911eba1d5c74314e5568e3237ae5f2f1--red-nose-pitbull-puppies-puppy-pitbulls.jpg'
}
var litObjBandit = {
	breed: 'Pitbull',
	weight: 90,
	age: 12,
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeC4iICSD8joNVGFxtgcFs8ksEaJjr0FwHnP63_Orbq9kCUnH'
}
var litObjSnoop = {
	breed: 'Pitbull',
	weight: 80,
	age: 12,
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zPC8_QeW5Gz0hmi6e61Wut7Q1-JQ1vJgBB7R8d52ZCFYas3QAw'
}

console.log(litObjDexi, litObjBandit, litObjSnoop);

//#4
function Dogs(breed, weight, age, image) {
	this.breed = breed;
	this.weight = weight;
	this.age = age;
	this.image = image;
}
var conObj1 = new Dogs('Pitbull', 50, 9, 'https://i.pinimg.com/736x/91/1e/ba/911eba1d5c74314e5568e3237ae5f2f1--red-nose-pitbull-puppies-puppy-pitbulls.jpg');
var conObj2 = new Dogs('Pitbull', 90, 12, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeC4iICSD8joNVGFxtgcFs8ksEaJjr0FwHnP63_Orbq9kCUnH');
var conObj3 = new Dogs('Pitbull', 80, 12, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zPC8_QeW5Gz0hmi6e61Wut7Q1-JQ1vJgBB7R8d52ZCFYas3QAw');

console.log(conObj1, conObj2, conObj3);

//#3 Add to a method each literal object, that multiplies two numbers and returns the product.
var litObjDexi = {
	breed: 'Pitbull',
	weight: 50,
	age: 8,
	image: 'https://i.pinimg.com/736x/91/1e/ba/911eba1d5c74314e5568e3237ae5f2f1--red-nose-pitbull-puppies-puppy-pitbulls.jpg',
	dogYearsToHumanYears: function() {
		return this.age * 7
	}
}
var litObjBandit = {
	breed: 'Pitbull',
	weight: 90,
	age: 12,
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeC4iICSD8joNVGFxtgcFs8ksEaJjr0FwHnP63_Orbq9kCUnH',
	dogYearsToHumanYears: function() {
		return this.age * 7
	}
}
var litObjSnoop = {
	breed: 'Pitbull',
	weight: 80,
	age: 12,
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zPC8_QeW5Gz0hmi6e61Wut7Q1-JQ1vJgBB7R8d52ZCFYas3QAw',
	dogYearsToHumanYears: function() {
		return this.age * 7
	}
}

console.log(litObjDexi.dogYearsToHumanYears(), litObjBandit.dogYearsToHumanYears(), litObjSnoop.dogYearsToHumanYears());

//#6
function Dogs(breed, weight, age, image) {
	this.breed = breed;
	this.weight = weight;
	this.age = age;
	this.image = image;
	this.dogYearsToHumanYears = function() {
		return this.age * 7;
	};
}
var conObj1 = new Dogs('Pitbull', 50, 9, 'https://i.pinimg.com/736x/91/1e/ba/911eba1d5c74314e5568e3237ae5f2f1--red-nose-pitbull-puppies-puppy-pitbulls.jpg');
var conObj2 = new Dogs('Pitbull', 90, 12, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeC4iICSD8joNVGFxtgcFs8ksEaJjr0FwHnP63_Orbq9kCUnH');
var conObj3 = new Dogs('Pitbull', 80, 12, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zPC8_QeW5Gz0hmi6e61Wut7Q1-JQ1vJgBB7R8d52ZCFYas3QAw');

//#7 Add each constructor object to an array
var dogsArray = [litObjDexi, litObjBandit, litObjSnoop];

//#8 Loop through the array of objects
for (var i = 0; i < dogsArray.length; i++) {
	//for each one create an element to add the content to (one needs to be an image element).
	var newDiv  = document.createElement("div")
  	var newImg  = document.createElement("img");
 	var newH1   = document.createElement("h1");
  	var newH2   = document.createElement("h2");
  	var newP    = document.createElement("p");
  	var newSpan = document.createElement("span");
  	console.log(newDiv, newImg, newH1, newH2, newP, newSpan);

  	 // #9 Still in the loop, create text nodes for each piece of content
  	var newH1Text   = document.createTextNode(dogsArray[i].breed);
  	var newH2Text   = document.createTextNode(dogsArray[i].weight);
  	var newPText    = document.createTextNode("age: " + dogsArray[i].age);
  	var newSpanText = document.createTextNode("Dogs years to human years: " + dogsArray[i].dogYearsToHumanYears());
  	console.log(newH1Text, newH2Text, newPText, newSpanText);

    // add those to the elements you created.
  	newH1.appendChild(newH1Text);
  	newH2.appendChild(newH2Text);
  	newP.appendChild(newPText);
  	newSpan.appendChild(newSpanText);

  	  // #10 Still in the loop, update the source and alt attributes of the image.
  	newImg.src = dogsArray[i].image;
  	newImg.alt = dogsArray[i].breed + " " + dogsArray[i].weight;

  	  // #12 Add the elements to the HTML so a user can view them.
  	newDiv.appendChild(newImg);
  	newDiv.appendChild(newH1);
  	newDiv.appendChild(newH2);
  	newDiv.appendChild(newP);
  	newDiv.appendChild(newSpan);

  	document.getElementById("display").appendChild(newDiv)
}