function getCount(objects) {
    var c=0;
    for(let i in objects){
        if(objects[i].x===objects[i].y){
            c++;
        }
    }
    return c;
}

console.log(getCount(objects))