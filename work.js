// let str = "this is a string";
// console.log(str)

// // First occurence
// let position = str.indexOf('is');
// console.log(position)

// // Last occurence
// position = str.lastIndexOf('is');
// console.log(position) 


// let substr = str.slice(1,6);
// console.log(substr)


// let substr1 = str.substr(1,2);
// console.log(substr1)


// let replaced  = str.replace('string', 'hafeez');
// console.log(replaced)


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// let char = str.charAt(14);
// console.log(char)


// console.log(str[3]);







// const obj=[
//     {name:"asad",rollno:786123,address:"Lahore city",phone:03146281798,university:"Lahore university"},
//     {name:"ali",rollno:786923 ,address:"Okra",phone:03158518518,university:"UMT university"},
//     {name:"bilal",rollno:7827823,address:"Pattoki",phone:035268146156,university:"COMSAT university"},
//    {name:"kmai",rollno:78613763,address:"Faisalabad",phone:03067151152,university:"GLOBAL university"},
//     ];
//     for(let i in obj ){
//       console.log(obj[i])
//     };


// {name:"asad",rollno:786123,address:"Lahore city",phone:03146281798,university:"Lahore university"},
//   {name:"ali",rollno:786923 ,address:"Okra",phone:03158518518,university:"UMT university"},
//   {name:"bilal",rollno:7827823,address:"Pattoki",phone:035268146156,university:"COMSAT university"},
//  {name:"kmai",rollno:78613763,address:"Faisalabad",phone:0306715128152,university:"GLOBAL university"},
//   ];
//   for(let i in obj ){
//     console.log(obj[i].rollno)
//   };










 








// let arr = [1,2,3,4,5,6,7,8,9,12,15,28,19,21];
// let arthmetic = [];
// let sum = 0;


// for (let i = 0; i < arr.length; i++) {
//   if (arr [i] % 3 === 0)
//   arthmetic.push(arr[i]);
//   sum = arthmetic.reduce((arthmetic,num) => arthmetic+num,0);

// }

// console.log(arthmetic);
 
// console.log(sum);






// let mid = function (first,end,arr){
//   let final = [];
//   for(i = 0; i < arr.length; i++){
//     if (i>= first && i<end){
//       final.push(arr[i]);
//     }
    
//   }
//   return final;
// }
// console.log(mid(7,10,[1,2,3,4,5,6,7,17,8,9,10]));







// let arr = [1,2,3,4,5,6,7,8,9,10]
// let mid = function (first, last){
//   let final = [];
//   for(i = 0; i < arr.length; i++){ 
//     if (i> first && i<last){
//       final.push(i);
//     }
//   }
//   return final;
// }
// console.log(mid(3,9));








// let arr = [1,2,3,4,5,6,7,8,9,10];

// function mid(first, last) {
//   for (let i = first + 0; i < last; i++) { 
//     console.log(arr[i]); 
//   }
// }

// mid(1, 8);




// const Number = [1,2,3];
// Number [10] = 11;
// console.log(Number);






// let obj = [
//   {
//     person1: {
//         name: "hafeez",
//         batch: "IT",
//         age: 15
//     }
//     },
    
//     {
//     person2: {
//         name: "shoaib",
//         batch: "CS",
//         age: 20
//     }
//     },
    
//     {
//     person3: {
//         name: "zarban",
//         batch: "eng",
//         age: 14
//     }
//     }

// ];
// console.log(obj);
// console.log(obj[0].person1.name);


 





// let obj = [    
//   {        
//     person1: {            
//       name: "hafeez",            
//       batch: "IT",            
//       age: 15        
      
//     }    },    
    
//     {        
//       person2: {            
//         name: "shoaib",            
        
//         batch: "CS",            
//         age: 20        
        
//       }    },    
      
//       {        
//         person3: {            
//           name: "zarban",            
//           batch: "eng",            
//           age: 14        
          
//         }    
        
//       }
      
//       ];

// for (let i = 0; i < obj.length; i++) {
//     obj.requiredage = 5;
//     // obj[i]["requiredAge"] = 2;
// }



// console.log(obj);






let arr = [
    {
        person1: {
            name: "hafeez",
            batch: "IT",
            age: 21
        }
    },
    {
        person2: {
            name: "shoaib",
            batch: "CS",
            age: 15
        }
    },
    {
        person3: {
            name: "zarban",
            batch: "eng",
            age: 14
        }
    }
];

let agegreaterThan20 = [];
let agelessThan20 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][`person${i+1}`].age > 20) {
        agegreaterThan20.push(arr[i][`person${i+1}`].name);
    } else if (arr[i][`person${i+1}`].age < 20) {
        agelessThan20.push(arr[i][`person${i+1}`].name);
    } 
}

console.log("person whose age is greater than 20:", agegreaterThan20);
console.log("person whose age is less than 20:", agelessThan20);










