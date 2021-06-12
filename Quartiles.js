var arr=[3,7,8,5,12,14,21,13,18];
arr=arr.sort((a,b)=>{return a-b});
console.log(arr)
var n=arr.length;
var j=0;
var Q1=[];var Q2=[];var Q3=[];
if(n%2!==0){
   
for(let i=0;i<(Math.floor(n/2));i++){
    Q1[i]=arr[i];
}
for(i=(Math.ceil(n/2));i<n;i++){
    Q3[j]=arr[i];
    j+=1;
}
Q2=arr[Math.floor(n/2)] 
var ans1=(Q1.length/2);
Q1=(Q1[ans1]+Q1[ans1-1])/2;
Q3=(Q3[ans1]+Q3[ans1-1])/2;

console.log(Q1,Q2,Q3)
}else{
    for(let i=0;i<(n/2);i++){
        Q1[i]=arr[i];
    }
    for(i=(n/2);i<n;i++){
        Q3[j]=arr[i];
        j+=1;
    }
    var ans1=(Q1.length/2);
Q1=(Q1[ans1]+Q1[ans1-1])/2;
Q2=(arr[1]+arr[2])/2
Q3=(Q3[ans1]+Q3[ans1-1])/2;
console.log(Q1,Q2,Q3)
}
