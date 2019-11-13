// Business (or back-end) logic:

// import { Triangle } from './triangle-logic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';




// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#triangleSides").submit(function(event) {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    // console.log(side1);
    // console.log(side2);
    // console.log(side3);

    if (side1 === side2 && side2 === side3){
      $("#result").text("an equilateral triangle.");
    }
    else if (side1 === side2 || side2 === side3 || side3 === side1){
      $("#result").text("an isosceles triangle.");
    }
    else if ((side1 + side2 <= side3 ) || (side2 + side3 <= side1) || (side1 + side3 <= side2)){
      $("#result").text("something other than a triangle.");
    }
    else{
      $("#result").text("a scalene triangle.");
    }
    $(".results").show();

    event.preventDefault();
  });
});
