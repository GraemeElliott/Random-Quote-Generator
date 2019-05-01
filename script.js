$(document).ready(function() {

  var apiURL = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?&callback=?";

  function apiCall() {
    $.getJSON(apiURL, function(json) {
      $(".quote").html(json["quoteText"]);
      $(".author").html(json["quoteAuthor"]);
      $(".twitterButton").click(function() {
        window.open(href = "https://twitter.com/intent/tweet?text=" + json["quoteText"] + ", " + json["quoteAuthor"]);
      });
    });
  };

  // on page load

  apiCall();

  // on click
  $(".quoteButton").click(apiCall);

});