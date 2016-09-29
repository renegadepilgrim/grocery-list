$(document).ready(function() {
  $("form#list").submit(function() {
    event.preventDefault();

    var groceries = ["entry1", "entry2", "entry3", "entry4", "entry5"];
    var fancyGross = [];

   groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      fancyGross.push(userInput);
    });
    
    var upperGross = fancyGross.map(function(gross) {
        return gross.toUpperCase();
      });

    upperGross.sort();

    $("#list").fadeOut();
    $("#output").slideDown();

    upperGross.forEach(function(list) {
      $("#output").append("<li>" + list + "</li>");
    });
  });
});
