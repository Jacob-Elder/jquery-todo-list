$(document).ready(function() {

	//assigns the trash can image to a variable
	var trashCan = '<img class="trashCan" src="js/recycle.png">';


	//Add button click event that appends user input to list
	//and appends a trash can image
	//and resets the text field
	$(".submit").click(function(event){
		event.preventDefault();
		var input = $(".userInput").val();
		$(".todoList").append('<li class="listItem">' + input + "     " + trashCan + '</li>');
		$(".userInput").val("");
	});

	//adds click event to trash cans
	//removes that li when clicked
	$(document).on('click', 'img', function(event) {
	event.preventDefault();
	$(this).parent().remove();
	});


});
