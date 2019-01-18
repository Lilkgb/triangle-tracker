$(document).ready(function() {
  $("#abc").submit(function(event) {
    var a = parseInt($("#a").val());
    var b = parseInt($("#b").val());
    var c = parseInt($("#c").val());

    if(a === b && b === a && c === a) {
      $("#perfectTriangle").show();
      $("#isosceles").hide();
      $("#scalene").hide();
    }
    else if(a === b + c || b === c + a || c === a + b) {
      $("#isosceles").show();
      $("#perfectTriangle").hide();
      $("#scalene").hide();
    }
    else if() {
      $("#scalene").show();
      $("#perfectTriangle").hide();
      $("#isosceles").hide();
    }
    else {
      console.log("error")
      $("#perfectTriangle").hide();
      $("#isosceles").hide();
      $("#scalene").hide();
    }


    event.preventDefault();
  });
});
