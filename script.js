$(document).ready(function(){
  //API request
  let randID = Math.floor(Math.random()* 2000);
  let endpoint = "https://quotesondesign.com/wp-json/posts?filter[id]=" + randID + "&filter[orderby]=rand&callback=";
  $.getJSON(endpoint, function(data) {
    let initQuote = data[0];
    $(".quote").html(initQuote.content);
    $(".author").html(initQuote.title);
  });
});