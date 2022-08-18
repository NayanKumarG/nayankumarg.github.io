//Examples of arrays
//arrays can be heterogenous: store different datatype 
var arr=[1,2,3,'hello',3];
console.log(arr[2]);//3
console.log(arr[3]);//hello

//array can contain empty data
var a=[1,2,3, ,4,5];
console.log(a[3]);//undefined
console.log(a);//(6) [1, 2, 3, empty, 4, 5]

//Array operations: push and pop

a.push(3);//added at end
console.log(a);//(7) [1, 2, 3, empty, 4, 5,3]

a.pop();//last end pop
console.log(a);//(6) [1, 2, 3, empty, 4, 5]

a.unshift(3);//insert at first index
console.log(a);//(7) [3, 1, 2, 3, empty, 4, 5]
a.shift();//remove from first index
console.log(a);//(6) [1, 2, 3, empty, 4, 5]

//splice method
a.splice(1,3,'hello');//it will slice between index 1-3 and replace with hello
console.log(a);//output:(4) [1, 'hello', 4, 5]

a.splice(1,2);
console.log(a);//(2) [1, 5]

//slice method: create new array from existing array
a.push(3);
a.push(6);
a.push(9);
console.log(a);//(5) [1, 5, 3, 6, 9]
 let arr1=a.slice(1,3);//include index 1 and exclusive of index 3
 console.log(arr1);//(2) [5, 3] 

//array printing: using for loop and foreach ,for of

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

a.forEach(item=>console.log(item));

for(item of a)
{
    console.log(item);
}

for(item in a)
{
    console.log(item);//prints index
}