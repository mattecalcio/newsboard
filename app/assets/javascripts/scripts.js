$(document).ready(function(){
  $.getJSON("http://api.feedzilla.com/v1/articles.json?count=31&culture_code=en_us", function(data) {
  var items = [];
  var x = 1;
  items.push('<table border="0"><tr><th>Num</th><th>Title</th><th>Date</th></tr>');
  $.each(data.articles, function(key, val) {
    items.push('<tr><td>'+ x++ +'</td><td nowrap><a href="'+val.url +'">' + val.title + '</a></td><td nowrap>'+ val.publish_date +'</td></tr>');
  });
  items.push('</table>');
  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('#results');
});

  $.getJSON("http://api.feedzilla.com/v1/categories.json", function(data) {
   var items = [];
 	items.push('<input type="checkbox" checked="true" name="category" id="' + "All" + '">' + "All" + '</input><br>');
  $.each(data, function(key, val) {
    items.push('<input type="checkbox" name="category" id="' + val.category_id + '">' + val.english_category_name + '</input><br>');
  
  });
 
  
  $("#filters").html(items.join(''));

});
	var apply = function(){
		alert("Rahul");
	}


	$('#apply').click(apply);

});


