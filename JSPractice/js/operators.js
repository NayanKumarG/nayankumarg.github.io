//Unary opearators
//postfix
var i=10
console.log(i++);//i=10
console.log(i);//i=11

//prefix
var i=10;
console.log(++i);//i=11
console.log(i);//i=11

//decrement operator is same
var i=10
console.log(i--);//i=10
console.log(i);//i=9

//prefix
var i=10;
console.log(--i);//i=9
console.log(i);//i=9

//Shift operators: right shift and left shift
var num=8,n=2;//num: 0000..0001000
console.log(num<<n);//000100000 it is 32 left shift
console.log(num>>2);//0010 it is 2

//exponent
var a=5;
console.log(a**2);//25

//ternary operator
var a=2;
console.log((a==2)?console.log("ok"):console.log("not ok"));


