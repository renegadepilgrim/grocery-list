$(document).ready(function() {
  $("form#list").submit(function() {
    event.preventDefault();

    /*var grocery1 = $("input#entry1").val();
    var grocery2 = $("input#entry2").val();
    var grocery3 = $("input#entry3").val();
    var grocery4 = $("input#entry4").val();
    var grocery5 = $("input#entry5").val();*/

    var groceries = ["entry1", "entry2", "entry3", "entry4", "entry5"];
    var fancyGross = [];


   groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      fancyGross.push(userInput);
    });

    var finalGross = fancyGross.map(function(gross) {
        return gross.toUpperCase();
      });

    $("#list").hide();
    $("#output").text(finalGross);
  });
});
