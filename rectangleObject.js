function Rectangle(a, b) {
    var object= {  length:a,
       width:b,
       perimeter: (2*(a+b)),
       area:a*b
       }
       
       return object;
  }

  console.log(Rectangle(4,5))