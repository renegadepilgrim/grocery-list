$(document).ready(function() {
  $("form#list").submit(function() {
    event.preventDefault();

    var grocery1 = $("input#entry1").val();
    var grocery2 = $("input#entry2").val();
    var grocery3 = $("input#entry3").val();
    var grocery4 = $("input#entry4").val();
    var grocery5 = $("input#entry5").val();

    var groceries = [grocery1, grocery2, grocery3, grocery4, grocery5];

    var upperGroceries = groceries.map(function(grocery) {
      return grocery.toUpperCase();
    });

    $("#list").hide();
    $("#output").text(upperGroceries);
  });
});
