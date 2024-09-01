// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet() {
//         console.log('Hello, World!');
//     }
// };

// person.greet();



let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.firstName = "khan";
person.age = 23;
delete person.firstName;
// console.log('lastName' in person)
// console.log('addres' in person)
console.log(person);