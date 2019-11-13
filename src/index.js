// Business (or back-end) logic:

import { Triangle } from './triangle-logic.js';
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

    var triangle = new Triangle(side1, side2 , side3);
    var result = triangle.checkType();

    $(".results").show();
    $("#result").text(result);

    event.preventDefault();
  });
});
