//using function keyword
function display(){
    console.log("function called;");
}

display();//function called;

var print= function(){
    console.log("print function called:");
}

print();//print function called:
function add(a,b)
{
    return a+b;
}
console.log(add(5,7));//12

var a=0;
console.log(a);//0
function newprint(){
    var b=11;
    a=10;
}
newprint();
console.log(a);//10
//console.log(b);//error b is not defined:we cannot acces variable declared in function only function scope

//IIFE:immediate invoked function expression
(function disp(c,d){
    console.log("add a+b:"+(c+d))
})(5,6);//OUTPU:11

//call() method

let animal={
    name:'dog',
    eat(a,b){
        console.log(this.name + " " + "is eating" + " " + a + " " + b);
    }
};

animal.eat(5,'bones');//dog is eating 5 bones

let human={
    name:'nayan'
};

animal.eat.call(human,5,'oranges');//nayan is eating 5 oranges

//apply() method uses argument as array
animal.eat.apply(human,[6,'mangoes']);//nayan is eating 6 mangoes
