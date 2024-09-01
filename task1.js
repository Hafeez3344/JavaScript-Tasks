let arr=[
    {
      name:"hafeez",
      Field:"IT",
      age:21,
      requiredage:""
    },
    {
      name:"shoaib",
      Field: "Softwere",
      age:14,
      requiredage:""
    },
    {
      name:"Zarban",
      Field: "Networking",
      age:15,
      requiredage:""
    }
    ];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i].age < 21) {
    arr[i].requiredage = 21 - arr[i].age;
    console.log("Age is not valid");
  } else {
    arr[i].requiredage = 0;
    console.log("Age is valid");
  }
  console.log(arr[i]);
}