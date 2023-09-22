// this is my first js code
// console.log('Hello World');

// let name = 'Cath';
// console.log(name);

//Variables
//cannot be a reserved keyword
//should be meaningful
//cannot start with a number
//cannot contain a space or hypen (-)
//are case-sensitive

// let firstName = 'Cath';
// let lastName = 'Tagao';
// console.log(firstName,lastName);

// let interestRate = 0.3;
// interestRate =1;
// console.log(interestRate)

// let name = 'Cath'; // string literal
// let age= 20; 

// let person = {
//     name: 'Cath',
//     age: 20
// };

// Dot Notation
// person.name = 'Kate';

// Bracket Notation 
// let selection = 'name';
// person[selection] = 'Kathy';

// console.log(person.name)

// number literal
// let isApproved = false; //boolean literal
// let firstNamed = undefined
// selectedColor = null;

// let selectedColor = ['red','blue'];
// selectedColor[2] = 'green';
// console.log(selectedColor.length);


//Performing Task
function greet(name, lastName){
    console.log('Hello World' + name + ''+ lastName);
}
greet(' John', ' Smith');

//Calculating a value
function square(number){
    return number*number;
}

console.log(square(2));