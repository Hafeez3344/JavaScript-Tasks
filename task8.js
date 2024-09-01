

// let globalKey = ['person', 'loginInfo'];
// let data = [];
// let childkey = [['name', 'age'], ['email', 'password']];
// let childvalue = [['hafeez', '23'], ['hafeez@gmail.com', '1234']];


// for (let i = 0; i < childkey.length; i++) {
// let obj = {};
//   for (let j = 0; j < childkey[i].length; j++){
//     obj[childkey[i][j]] = childvalue[i][j];
//   }
  
//   data.push(obj);
// }

// let allData = { data:data };
// console.log(allData);




// console.log(globalKey);
// console.log(childKey);
// console.log(childValue);
    





// let globalKey = ['person', 'loginInfo'];
// let data = [];
// let alldata = [];
// let childkey = [['name', 'age'], ['email', 'password']];
// let childvalue = [['hafeez', '23'], ['hafeez@gmail.com', '1234']];

// for (let i = 0; i < childkey.length; i++) {
//   let obj = {};
//   for (let j = 0; j < childkey[i].length; j++) {
//     obj[childkey[i][j]] = childvalue[i][j];
//   }

//   data.push(obj);
  
// }

// let allData = {
//   [globalKey[0]]: data[0],
//   [globalKey[1]]: data[1]

// };

// console.log(allData);









































// let globalKey = ['person', 'loginInfo'];
// let data = [];
// let childkey = [['name', 'age'], ['email', 'password']];
// let childvalue = [['hafeez', '23'], ['hafeez@gmail.com', '1234']];

// for (let i = 0; i < childkey.length; i++) {
//   let obj = {};
//   for (let j = 0; j < childkey[i].length; j++) {
//     obj[childkey[i][j]] = childvalue[i][j];
//   }
//   data.push(obj);
// }

// let allData = {
//   data: data.reduce(function(acc, obj, index) {
//     acc[globalKey[index]] = obj;
//     return acc;
//   }, {})
// };

// console.log(allData);










// let globalKey = ['person', 'loginInfo'];
// let allData = [];
// let globalObj= {};
// let finalObj = {};
// let childkey = [['name', 'age'], ['email', 'password']];
// let childvalue = [['hafeez', '23'], ['hafeez@gmail.com', '1234']];
// for (let i = 0; i < childkey.length; i++) {
//   let obj = {};
//   for (let j = 0; j < childkey[i].length; j++) {
//     obj[childkey[i][j]] = childvalue[i][j];
//   }
//     globalObj = {};
//     globalObj[globalKey[i]] = obj;
//     allData.push(globalObj);
  
// }
// console.log(allData);



let globalKey = ['person', 'loginInfo'];
let allData = [];
let childkey = [['name', 'age'], ['email', 'password']];
let childvalue = [['hafeez', '23'], ['hafeez@gmail.com', '1234']];
for (let i = 0; i < childkey.length; i++) {
  let obj = {};
  for (let j = 0; j < childkey[i].length; j++) {
    obj[childkey[i][j]] = childvalue[i][j];
  }
  let globalObj = {};
  globalObj[globalKey[i]] = obj;
  allData.push(globalObj);
}
let result = { "Data": allData };
console.log(result);
