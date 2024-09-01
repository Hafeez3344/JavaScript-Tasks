const display1E1=document.querySelector('.display-1');
const display2E1=document.querySelector('.display-2');
const tempResultE1=document.querySelector('.temp-result');
const numbersE1=document.querySelectorAll('.number');
const operationE1=document.querySelectorAll('.operation');
const equalE1=document.querySelector('.equal');
const clearAllE1=document.querySelector('.all-clear');
const clearLastE1=document.querySelector('.last-entity-clear');
const deleteE1=document.querySelector('.delete-button');
const inverseE1 = document.querySelector('.inverse-button');
const powerTwoE1 = document.querySelector('.power-two');
const sqrtE1= document.querySelector('.sqrt');
const minusE1= document.querySelector('.minus');

let dis1Num= '';
let dis2Num= '';
let result= null;
let lastOperation='';
let haveDot= false;
numbersE1.forEach(number => {
    number.addEventListener('click',(e)=>{
        if(e.target.innertText === '.' && !haveDot){
            haveDot=true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText=dis2Num;
        
    })
    });

operationE1.forEach(operation => {
    operation.addEventListener('click', (e)=>{
        if(!dis2Num) result;
        haveDot=false;
        const operationName= e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            result= parseFloat(dis2Num);
        }
        
        clearVar(operationName);
        lastOperation=operationName;
        console.log(result);
    })
       
});
function clearVar(name= ''){
dis1Num += dis2Num + ' ' + name + ' ';
display1E1.innerText=dis1Num;
display2E1.innerText='';
dis2Num='';
tempResultE1.innerText=result;
};

deleteE1.addEventListener('click', (e) => {
    dis2Num = dis2Num.slice(0, -1);
    display2E1.innerText = dis2Num;
  });

  inverseE1.addEventListener('click', (e) => {
    dis2Num = (1 / parseFloat(dis2Num)).toString();
    display2E1.innerText = dis2Num;
});

powerTwoE1.addEventListener('click', (e) => {
    dis2Num = Math.pow(parseFloat(dis2Num), 2).toString();
    display2E1.innerText = dis2Num;
});

sqrtE1.addEventListener('click', (e) => {
    dis2Num = Math.sqrt(parseFloat(dis2Num)).toString();
    display2E1.innerText = dis2Num;
  });
  

  minusE1.addEventListener('click', (e) => {
    dis2Num = '-' + dis2Num;
    display2E1.innerText = dis2Num;
  });
  
  
function mathOperation(){
    if(lastOperation ==='*'){
        result=parseFloat(result) * parseFloat(dis2Num);
    }else if(lastOperation === '+'){
        result=parseFloat(result) + parseFloat(dis2Num);


    }else if(lastOperation ==='-'){
        result=parseFloat(result) - parseFloat(dis2Num);


    }else if(lastOperation === '/'){
        result=parseFloat(result) / parseFloat(dis2Num);


    }else if(lastOperation === '%'){
        result=parseFloat(result) % parseFloat(dis2Num);


    }
    
}
equalE1.addEventListener('click', (e)=>{
    if(!dis1Num || !dis2Num) return;
    haveDot=false;
    mathOperation();
    clearVar();
    display2E1.innerText=result;
    tempResultE1.innerText='';
    dis2Num=result;
    dis1Num='';
});
clearAllE1.addEventListener('click',(e)=>{
    display1E1.innerText = '';
    display2E1.innerText = '';
    dis1Num = '';
    dis2Num= '';
    result = '';
    tempResultE1.innerText= '0';
    
});
clearLastE1.addEventListener('click', (e)=>{
    display2E1.innerText ='';
    dis2Num= '';
});

window.addEventListener('keydown', (e)=>{
    if(
        e.key=== '0'||
        e.key=== '1'||
        e.key=== '2'||
        e.key=== '3'||
        e.key=== '4'||
        e.key=== '5'||
        e.key=== '6'||
        e.key=== '7'||
        e.key=== '8'||
        e.key=== '9'||
        e.key=== '.'
    ){
        clickButtonEl(e.key);
    }else if(
        e.key === '+' ||
        e.key === '/' ||
        e.key === '%'  
        ){
         clickoperation(e.key)  
        }else if(e.key==='*'){
            clickoperation('X')
        }else if(e.key=='Enter' ||e.key==='='){
            clickEqual();
        }
});
function clickButtonEl(key){
    numbersE1.forEach(button =>{
        if(button.innerText===key){
            button.click();
        }
    })
};
function clickoperation(key){
    operationE1.forEach(button=>{
        if(button.innertText=== key){
            button.click();
        }
    })
};
function clickEqual(){
    equalE1.click();
}
