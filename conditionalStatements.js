var score=28;
function getGrade(score) {
    if(score<=5){
        return "F";
    }else if(score>5 && score<=10){
        return "E";
    }else if(score>10 && score <=15){
       return "D";
    }else if(score>15 && score <=20){
        return "C";
    }else if(score>20 && score <=25){
        return "B";
    }else {
        return "A";
    }
    
    
}
console.log(getGrade(score))