'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Experience Chan! It's not a lot of questions." +
			"Too many questions is the Chan disease." +
			"The best way is just to observe the noise of the world." +
			"The answer to your questions?" +
			"Ask your own heart.");
	});

console.log("Project clicked")

function projectClick(e){
	console.log("Project clicked");
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
}


console.log('hehe');
  $("#myElement").click(changeText);
  
  function changeText(event){
    $(this).text("Changed text");
  }

  /*
  Adding a CSS class
  
  Select the element, then call addClass()
  
*/
$('#css_change').click(function(){
  $(this).prev().addClass("text-center");
});

/*
  Remove, and toggle CSS Classes
  You can remove classes with removeClass()
  Or, toggle them on and off with toggleClass():
*/

$("#css_remove").click(function(){
  $(this).prev().removeClass("text-center");
});

$("#css_toggle").click(function(){
  $(this).prev().toggleClass("text-center");
});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}