$(document).ready(function() {
  $("#abc").submit(function(event) {
    var a = parseInt($("#a").val());
    var b = parseInt($("#b").val());
    var c = parseInt($("#c").val());

    if(a === b && b === a && c === a) {
      $("#perfectTriangle").show();
      $("#isosceles").hide();
      $("#scalene").hide();
    } else if(a === b || b === c || c === a) {
      $("#isosceles").show();
      $("#perfectTriangle").hide();
      $("#scalene").hide();
    } else if(a !== b && b !== c && c !== a) {
      $("#scalene").show();
      $("#perfectTriangle").hide();
      $("#isosceles").hide();
    } else if((a + b) < c) {
      $("#notTriangle").show();
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
