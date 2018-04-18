// const url = "https://www.reddit.com/r/hiphopheads/top.json?limit=40";
var url = "https://www.reddit.com/r/pics.json";

$.ajax({
  type: 'GET',
  url: url,
  dataType: 'jsonp',
  success: function(data) {console.log('Success!!', data); },
  error: function() {console.log('ajax call did not work'); },
  jsonp: 'jsonp'
});
