//connect the buttons to variables
const output=document.querySelector('#output');
const del=document.querySelector('#del');
const clr=document.querySelector('#clr');
const mod=document.querySelector('#mod');
const divide=document.querySelector('#divide');
const num7=document.querySelector('#num7');
const num8=document.querySelector('#num8');
const num9=document.querySelector('#num9');
const multiply=document.querySelector('#multiply');
const num4=document.querySelector('#num4');
const num5=document.querySelector('#num5');
const num6=document.querySelector('#num6');
const subtract=document.querySelector('#subtract');
const num1=document.querySelector('#num1');
const num2=document.querySelector('#num2');
const num3=document.querySelector('#num3');
const add=document.querySelector('#add');
const negate=document.querySelector('#negate');
const num0=document.querySelector('#num0');
const dot=document.querySelector('#dot');
const equal=document.querySelector('#equal');
const left=document.querySelector('#left');
const right=document.querySelector('#right');
const memorize=document.querySelector('#memorize');
const unmemorize=document.querySelector('#unmemorize');

//click function implementations not showing operators on output
/*let display='0';
output.textContent=display;
let numFirst='';
let numSecond='';
let operator='';

const deleteChar=function(){
    if(display!=='0'){
        if(display.length!==1&&display.length!==0){
            display=display.slice(0,-1);
        }else{
            display='0';
        }
        output.textContent=display;
    }
};
const clearDisplay=()=>{
    display='0';
    output.textContent=display;
};
const showRemainder=()=>{
    numFirst=display;
    //if(operator===''){
        display='';
    //}
    operator='%';
};
const divideOp=()=>{
    numFirst=display;
    //if(operator===''){
        display='';
    //}
    operator='/';
};
const display7=()=>{
    if(display==='0'){
        display='7';
    }
    else{
        display+='7';
    }
    output.textContent=display;
};
const display8=()=>{
    if(display==='0'){
        display='8';
    }
    else{
        display+='8';
    }
    output.textContent=display;
};
const display9=()=>{
    if(display==='0'){
        display='9';
    }
    else{
        display+='9';
    }
    output.textContent=display;
};
const times=()=>{
    numFirst=display;
    operator='*';
    display='';
};
const display4=()=>{
    if(display==='0'){
        display='4';
    }
    else{
        display+='4';
    }    output.textContent=display;
};
const display5=()=>{
    if(display==='0'){
        display='5';
    }
    else{
        display+='5';
    }
    output.textContent=display;
};
const display6=()=>{
    if(display==='0'){
        display='6';
    }
    else{
        display+='6';
    }
    output.textContent=display;
};
const minus=()=>{
    numFirst=display;
    operator='-';
    display='';
};
const display1=()=>{
    if(display==='0'){
        display='1';
    }
    else{
        display+='1';
    }
    output.textContent=display;
};
const display2=()=>{
    if(display==='0'){
        display='2';
    }
    else{
        display+='2';
    }
    output.textContent=display;
};
const display3=()=>{
    if(display==='0'){
        display='3';
    }
    else{
        display+='3';
    }
    output.textContent=display;
};
const plus=()=>{
    numFirst=display;
    operator='+';
    display='';
};
const negateNum=()=>{
    if(display!=='0'){
        if(display.startsWith('-')){
            display=display.slice(1);
        }else{
            display='-'+display;
        }
        output.textContent=display;
    }
};
const display0=()=>{
    if(display!=='0'){
        display+='0';
        output.textContent=display;
    }
};
const decimal=()=>{
    if(display.search(/[.]/)===-1){
        display+='.';
        output.textContent=display;
    }
};
const calculate=()=>{
    if(operator!==''){
        numSecond=display;
        if(numSecond!==''){
            display=String(eval(numFirst+operator+numSecond));
            output.textContent=display;
        }
        operator='';
    }
};*/

//click function implementations showing operators on output
let display='0';
output.textContent=display;
let mem='';

const deleteChar=function(){
    if(display!=='0'){
        if(display.length!==1&&display.length!==0){
            display=display.slice(0,-1);
        }else{
            display='0';
        }
        output.textContent=display;
    }
};
const clearDisplay=()=>{
    display='0';
    output.textContent=display;
};
const showRemainder=()=>{
    display+='%';
    output.textContent=display;
};
const divideOp=()=>{
    display+='/';
    output.textContent=display;
};
const display7=()=>{
    if(display==='0'){
        display='7';
    }
    else{
        display+='7';
    }
    output.textContent=display;
};
const display8=()=>{
    if(display==='0'){
        display='8';
    }
    else{
        display+='8';
    }
    output.textContent=display;
};
const display9=()=>{
    if(display==='0'){
        display='9';
    }
    else{
        display+='9';
    }
    output.textContent=display;
};
const times=()=>{
    display+='*';
    output.textContent=display;
};
const display4=()=>{
    if(display==='0'){
        display='4';
    }
    else{
        display+='4';
    }    output.textContent=display;
};
const display5=()=>{
    if(display==='0'){
        display='5';
    }
    else{
        display+='5';
    }
    output.textContent=display;
};
const display6=()=>{
    if(display==='0'){
        display='6';
    }
    else{
        display+='6';
    }
    output.textContent=display;
};
const minus=()=>{
    display+='-';
    output.textContent=display;
};
const display1=()=>{
    if(display==='0'){
        display='1';
    }
    else{
        display+='1';
    }
    output.textContent=display;
};
const display2=()=>{
    if(display==='0'){
        display='2';
    }
    else{
        display+='2';
    }
    output.textContent=display;
};
const display3=()=>{
    if(display==='0'){
        display='3';
    }
    else{
        display+='3';
    }
    output.textContent=display;
};
const plus=()=>{
    display+='+';
    output.textContent=display;
};
const negateNum=()=>{
    if(display!=='0'){
        if(display.startsWith('-')){
            display=display.slice(1);
        }else{
            display='-'+display;
        }
        output.textContent=display;
    }
};
const display0=()=>{
    if(display!=='0'){
        display+='0';
        output.textContent=display;
    }
};
const decimal=()=>{
    if(display.search(/[.]/)===-1){
        display+='.';
        output.textContent=display;
    }
};
const calculate=()=>{
    display=String(eval(display));
    output.textContent=display;
};
const addLeft=()=>{
    if(display='0'){
        display='';
    }else{
        if(!isNaN(display[display.length-1])){
            display+='*';
        }
    }
    display+='(';
    output.textContent=display;
};
const addRight=()=>{
    display+=')';
    output.textContent=display;
};
const addMem=()=>{
    mem=display;
};
const releseMem=()=>{
    if(display!=='0'){
        display+=mem;
    }
    else{
        display=mem;
    }
    output.textContent=display;
};

//connect the actions of clicking the buttons to events
del.addEventListener('click',deleteChar);
clr.addEventListener('click',clearDisplay);
mod.addEventListener('click',showRemainder);
divide.addEventListener('click',divideOp);
num7.addEventListener('click',display7);
num8.addEventListener('click',display8);
num9.addEventListener('click',display9);
multiply.addEventListener('click',times);
num4.addEventListener('click',display4);
num5.addEventListener('click',display5);
num6.addEventListener('click',display6);
subtract.addEventListener('click',minus);
num1.addEventListener('click',display1);
num2.addEventListener('click',display2);
num3.addEventListener('click',display3);
add.addEventListener('click',plus);
negate.addEventListener('click',negateNum);
num0.addEventListener('click',display0);
dot.addEventListener('click',decimal);
equal.addEventListener('click',calculate);
left.addEventListener('click',addLeft);
right.addEventListener('click',addRight);
memorize.addEventListener('click',addMem);
unmemorize.addEventListener('click',releseMem);