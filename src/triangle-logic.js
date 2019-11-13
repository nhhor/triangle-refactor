export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  // if (side1 === side2 && side2 === side3){
  //   return "an equilateral triangle.";
  // }
  // else if (side1 === side2 || side2 === side3 || side3 === side1){
  //   return "an isosceles triangle.";
  // }
  // else if ((side1 + side2 <= side3 ) || (side2 + side3 <= side1) || (side1 + side3 <= side2)){
  //   return "not a triangle";
  // }
  // else{
  //   return "a scalene triangle.";
  // }
}

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "something other than a triangle.";
  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    return "a scalene triangle.";
  }  else if ((this.side1 === this.side2) && ((this.side1 === this.side3)) && ((this.side2 === this.side3))) {
    return "an equilateral triangle.";
  }  else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
    return "an isosceles triangle.";
  }
};
