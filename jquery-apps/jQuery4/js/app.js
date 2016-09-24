///Bad appearance at smaller width
///Hide text links, replace them with more appropriate links

///Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
///Cycle over menu links
$("#menu a").each(function(){
	var $anchor = $(this);
	///Create an option
	var $option = $("<option></option>");
	
	///Deal with selected options 
	if($anchor.parent().hasClass("selected")) {
		$option.prop("selected", true);
	}
	
	///Option's value is the href
	$option.val($anchor.attr("href"));
	///Option's text is the text of the link
	$option.text($anchor.text());
	///Append option to select
	$select.append($option);
})

///Bind change list to select
$select.change(function(){
	///Go to select's location
	window.location = $select.val();
});
	

