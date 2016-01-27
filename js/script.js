
$('#submit').on('click', function(e) {
	e.preventDefault();

	var newThing = $('#taskInput').val();
	console.log("this"+newThing);



	$('#taskList').append('<li>' + newThing + '<button id="delete">X</button></li>');

	$('#taskInput').val('');

	
});


$('#taskList').on('click', "li #delete", function(e) {
	e.preventDefault();
	console.log("Hay");
	$(this).parent().remove();

	
});

