$(document).ready(function() {
  $("#onlyform").submit(function(event) {
    event.preventDefault();
    var whateverWeCallIt = $("input#stupidstufftheytypein").val();
    $(".showthem").text(whateverWeCallIt);
  });

  $("#onlyform").submit(function() {
    $("#postcard").removeClass("card");
  });


  $("#screamingform").submit(function(event) {
    event.preventDefault();
    var weCallIt = $("input#theytype").val().toUpperCase();
    $(".output").text(weCallIt);
  });
});
