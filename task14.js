function recursive(num){
    if (num < 1){
        return num;
    }
    return recursive(num/2);
}
console.log(recursive(10));


