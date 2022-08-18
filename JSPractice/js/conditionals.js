console.log("Loop examples...")

// if else 

var a=1;
var b=3

if(a+b>4)
{
    console.log(a+b);
}
//if condition having only single statement then curly braces not required
else if(a+b<4)
console.log(a*b)
else
console.log("Hello")

//switch 
var day="mon"
switch (day) {
    case "sun":console.log("today is sunday");
      break;
    case "mon":console.log("today is monday");
    break;
     case "tue":console.log("today is tuesday");
     break;
     default:console.log("today is wednsday");
  }