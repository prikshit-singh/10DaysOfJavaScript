var length=3;
var width=4.5;
function getArea(length, width) {
    let area = length*width;
    // Write your code here
    
    return area;
}
function getPerimeter(length, width) {
    let perimeter = 2*(length+width);
    // Write your code here
    
    return perimeter;
}

console.log(getArea(length, width))
console.log(getPerimeter(length, width))