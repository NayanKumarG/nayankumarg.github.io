// encapsulation,polymorphism,abstraction,inheritance

/* Encapsulation:wrapping of data and function
object:physical entity of a class created using new keyword and memory allocated in heap
ex:var adam = new Student(); */

class Box{
    constructor(length){
        this.length=length;
    }
    display(){
        console.log("lenght of the box is:"+this.length);
    }
}

let obj = new Box(20);
obj.display();

/*abstraction: hiding of unneccessary information
hiding some methods from users which is not neccessary to show.
for example array.push():here push method is abstracted we are not creating that method.*/

//protoype inheritance: in javascript every object has its own property is called property

let father={
    name:"john"
}

let son=Object.create(father);
console.log(father.isPrototypeOf(son));//true
let son1={};
console.log(father.isPrototypeOf(son1));//false

var parent={
    name:"john",
    eat(){
        console.log("parent eating");
    },
    sing: function(){
console.log("parent is singing:");
    },
    drink: ()=>{
console.log("parent drinking:");
    }
};

var child={
    name:"son",
    eat(){
        console.log("child eating:");
    }
};
 child.__proto__=parent;
 for(let p in child)
 {
 console.log(p+" "+ child.hasOwnProperty(p));/*name true
                                               eat true
                                               sing false
                                               drink false*/ //false are inherited from parent so it is not own property of child

 }
 console.log(child.drink());//parent drinking:

 /*Inheritance: using extend keyword inheriting property object in other class
 constructor is not inheriting, but we can invoke by using super keyword*/
//  class Apple extend Fruits{

//  } 

class Parent{
    sing(){
        console.log("parent is singing:");
            }
            drink(){
        console.log("drinking:");
            }
}
class Children extends Parent{

    constructor(){
        super();//invoking Parent constructor
    }
    sing(){
        console.log("child is singing:");//child is singig:
        super.sing();//to access parent method use super keyword outpt:parent is singing:
            }

}
let john = new Children();
console.log(john.drink());
john.sing();

/*polymorphism: something in multiple forms: it divided into 2 parts overloading and overriding
method overloading:function with same name but different arguments or parameter passed
*/
class Overloading{
    display(){
        console.log("No argument method:")
    }
    display(arg){
        console.log("There is an argument:"+arg);
    }
    
}
let ol= new Overloading();
ol.display();//There is an argument:undefined
ol.display("Hello");//There is an argument:Hello
//method implemented last that will consider in javascript:here only second method is considered

/*method overriding:it is runtime polymorphism. child class wants to override parent with same method having same signature*/
class Parnt{
live(){
    console.log("living in india:");
}
}

class Childrn extends Parnt{
    
    live(){//this method already inherited but chuild class oveeriding again
console.log("living in USA:");
    }

}
let nayan= new Childrn();

nayan.live();//living in USA
