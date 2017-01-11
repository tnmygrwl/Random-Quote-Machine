$(document).ready(function() {
  $("#get-quote").on('click', function() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
      $("#newQuote").html(a[0].content);
      $("#getName").html('~' + a[0].title);
    });
  });
  $("#share-quote").on('click', function() {
    var quote = $('#newQuote').text();
    var author = $('#getName').text();
    $('#share-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quote + ' ' + author);
  });
});