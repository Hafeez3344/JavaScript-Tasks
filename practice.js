// Hoisting

// console.log(c);

// var a = 10;
// var b = 20;
// var c = a + b;



// JS object example

// let person= {
//   name: "khan",
//   age: 35,
//   properties: {
//     color: "white",
//     height: "7 feet",
//   address: {
//     country: "pakistan",
//     city: "lahore",
//     street: "gulberg 3",
//     occu: "student"
//   }
//   }
  
// };
// console.log(person.name,person.age);
// console.log(person.properties,person.city)



// let company= {
//   name: "Seebiz",
//   ceo: "nadeem ballaj",
//   location: "lahore",
  
//   required_position: {
//     positions: "softwere enginner",
//     basics: "html css expert"
//   }
// };
// console.log(company.name);




// Arrow function

// var myFunction = (a, b) => {
//     return a + b;
//   };
//   console.log(myFunction(3,4));
  

// let arr =[0, 65, "hafeez", "khan",.74,5]
// let arr2 =["khan", 74, 83]
// let result=arr.push(arr2);
// console.log(result);





// let arr =[0, 65, "hafeez", "khan", .74]
// let arr2 =[5, 3,"khan", 5,7]
// let result=arr.push(...arr2);
// console.log(result);



// let a = [3,4,5,6,"khan","hafeez"]
// let b = ["khan",74,.64]
// let c=a.push(...b);
// console.log(c);



// let person = {
//   fname: "hafeez",
//   lname: "khan",
//   age: 25,
//   address: {
//     country: "pakistan",
//     city: "lahore",
//     street: "432 gulberg",
//   }
// };
// console.log(person["fname"], person["address"])
// console.log(this.person)
// console.log(person[0])
// person.nname= "hafi",
// delete person.lname;
// console.log(person)






// let salaries = {
//   hafeez: 100,
//   khan: 160,
//   naqeeb: 130
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);




// console.log(this)




// const number = [1,2,3,4,5,6,7,8,9,10];

// const evenNumbers = number.filter(number => number % 2 === 0)

// console.log(evenNumbers);







// let arr = [1,2,3];
// arr[-1] = 5;
// console.log(arr);




setTimeout(() => {
    console.log("hello");
}, 0);

console.log("world");
