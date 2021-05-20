var f=5;
function factorial(f){
    let fact = 1;
    if(f==0 || f==1){
        return f;
    }else{
    for(let i=1;i<=f;i++){
        
        fact = fact *i;
    }
    return fact;
    }
    
}
console.log(factorial(f))