//OOP stands for Object Oriented Programming

//objects can have a collection of variable properties
// Example: a person (firstname, lastname, age)

let person = {};
console.log(typeof(person));
console.log(person);

//object properties are key-value pairs
person = {
    firstname : 'Kim',
    lastname : 'Para',
    age : 21
};
console.log(person);

// Accessing properties via Dot Notation
console.log(person.firstname);

//Accessing properties via Bracket Notation - same output as Dot Notation
console.log(person["firstname"]);