//for loop
for(var i=0;i<10;i++)
console.log("number is:"+i);

//for each :prints items
let fruits=['apple','orange','mango'];
fruits.forEach(item=>console.log(item));

//for of : prints the items
for( var a of fruits)
{
    console.log(a);
}

//for in :prints index 0 1 2
for(item in fruits)
{
    console.log(item);
}

//while loop
var i=0;
while(i<5)
{
    console.log("print:"+i);
    i++;
}

//do while :executes atleast one 
var i=0;
do{
    console.log("print:"+i)
    i++;
}while(i<6);