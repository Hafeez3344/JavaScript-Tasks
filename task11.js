let arr = [33,42,36,7,4,2];
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[i] < arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
};
console.log(`Sorted Array: ${arr}}`);
console.log(`Smallest Value Is: ${arr[0]}`);
console.log(`Largest Value Is: ${arr[arr.length-1]}`);

