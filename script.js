// Task 1 

// Write the code, one line for each action:

// 1. Create an Empty Object User
// 2. Add the property name with the value John
// 3. Add the property surname with the value Smith
// 4. Change the value of the name fo Pete
// 5. Remove the property name from the object.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user)

// Task 2

// Write the function isEmpty(obj) which returns true if the object has no properties
// and returns false otherwise. should work like that:

let schedule = {};
alert( isEmpty(schedule)); //true

schedule["8:30"] = "get up";
alert( isEmpty(schedule)); //false

let obj = {};

let isEmpty = (obj) => {
	for (let key in obj) {
		return false;
	}
	return true;
}

// TASK 3

// We have an object storing salaries of our team:

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

// Write the code to sum all salaries and store in the variable 'sum'. Should
// be 390 in the example above

// if salaries is empty, the result must be 0.

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
};

let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
}

alert(sum);

// TASK 3

// Multiply Numeric Property Values by 2
// Create a Function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

//before the call

let menu = {
	width: 200,
	height: 300,
	title: 'My menu'
};

multiplyNumeric(menu);

//after call

menu = {
	width: 400,
	height: 600,
	title: "My menu"
};

// please note that the multiplyNumeric does not need to return anything, it should modiy the object
// in-place.

// typeof() might help you here.

let menu = {
	width: 200,
	height: 300,
	title: 'My menu'
};

let multiplyNumeric = (obj) => {
	console.log(obj)
	for(let key in obj){
		if(typeof obj[key] == 'number'){
			obj[key] *= 2; 
		}
	} console.log(obj)
}


