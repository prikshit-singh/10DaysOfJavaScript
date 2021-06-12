
// Task
// Given an array,X , of N integers and an array, W, representing the respective weights of X's elements, calculate and print the weighted mean of X's elements. Your answer should be rounded to a scale of decimal place 1(i.e.,12.3)

// Example







var x=[10 ,40, 30, 50, 20];
var y=[1,2,3,4,5];
var z=0;
var a=0;

for(let i=0;i<x.length;i++){
   z=z+(x[i]*y[i]) 
   a=a+y[i];
   
}
var ans=z/a;
ans=ans.toFixed(1)
console.log(ans)