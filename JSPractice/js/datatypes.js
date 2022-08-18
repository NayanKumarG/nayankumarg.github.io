//primitive: integer float as numbers , string
var a=10;
console.log(typeof(a));//number

var b=10.098;
console.log(typeof(b));//number

//string
var a="nayan";
var b='kumar';
console.log(typeof(a+b));//string
console.log(a+b+"25 year old");//nayankumar 25 year old
console.log(`${a}`);//nayan

//non primitive: object 

//object declaration using literals
var animal={
    name:"cat",
    color:'black',
    number:10,
    eat(){
        console.log(`${this.name} is eating`);
    },
    sing: function(){
        console.log(`${this.name} singing`);
    }
}

animal.eat();
let col=animal["color"];//or animal.color
console.log(col);
console.log(animal.color);
animal.sing();

//object declaration using new keyword
let animals=new Object();
animals.name="cat";
animals['color']="black";
console.log(animals.name);

