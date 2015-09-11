$(document).ready(function(){
	
$("").hide();

$('h1').click(function(){
	
	$(this).next().slideToggle(300);
});

$('button').click(function(){

	var toAdd = $("input[name=message]").val();
	$('#messages').append('<p>'+toAdd+'</p>');
});

});